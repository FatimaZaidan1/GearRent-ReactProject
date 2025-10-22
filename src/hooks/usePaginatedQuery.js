import { useState, useEffect, useMemo, useCallback } from 'react';

// This custom hook abstracts the logic for fetching and managing paginated data.
// For this project, we are simulating a Firestore query using a mock data array.
// In a real application, the 'fetchFunction' would handle the actual Firestore API calls
// using 'limit' and 'startAfter' (or 'startAt') for cursor-based pagination.

/**
 * usePaginatedQuery
 * @param {Array<Object>} sourceData - The full array of data to paginate (simulating a collection).
 * @param {number} itemsPerPage - The number of items to show per page.
 * @returns {{ data: Array<Object>, currentPage: number, totalPages: number, isLoading: boolean, goToNextPage: function, goToPreviousPage: function }}
 */
const usePaginatedQuery = (sourceData, itemsPerPage = 8) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    
    // --- Data Calculation ---

    // Calculate total pages based on the full data length
    const totalPages = useMemo(() => {
        if (!sourceData || sourceData.length === 0) return 1;
        return Math.ceil(sourceData.length / itemsPerPage);
    }, [sourceData, itemsPerPage]);

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the slice of data for the current page
    const paginatedData = useMemo(() => {
        // Simulate a small loading delay for a better user experience
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300); // 300ms delay to simulate network latency

        // Return the slice while the loading state is being updated
        return sourceData.slice(startIndex, endIndex);
    }, [sourceData, startIndex, endIndex]); // Recalculate only when indices or source data change

    // --- Pagination Controls ---

    const goToNextPage = useCallback(() => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    }, [totalPages]);

    const goToPreviousPage = useCallback(() => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    }, []);
    
    // Reset page to 1 if the source data or items per page changes drastically
    useEffect(() => {
        setCurrentPage(1);
    }, [sourceData, itemsPerPage]);


    return {
        data: paginatedData,
        currentPage,
        totalPages,
        isLoading,
        goToNextPage,
        goToPreviousPage,
    };
};

export default usePaginatedQuery;
