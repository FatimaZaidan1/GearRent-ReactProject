// src/data/cameraData.js (Path may vary)
// 1. Import local images from the assets folder (ensure these files exist!)
import sonyA7IVImage from '../assets/sony_a7iv.jpg';
import canonR5Image from '../assets/canon_r5.jpg';
import arriMiniLFImage from '../assets/arri_mini_lf.jpg';
import fujiXT5Image from '../assets/fuji_xt5.jpg';
import djiRoninImage from '../assets/dji_ronin.jpg';
import blackmagicImage from '../assets/blackmagic_6k.jpg';

const cameraData = [
  { 
    id: 1, 
    title: 'Sony Alpha a7 IV', 
    price: 95, 
    description: 'Mirrorless, 33MP, Full-Frame',
    detailedDescription: 'The Sony Alpha a7 IV is a versatile full-frame mirrorless camera suitable for both professional photographers and videographers. It features a new 33MP Exmor R CMOS sensor, 4K 60p video recording, and advanced Real-time AF. Ideal for hybrid shooters.',
    specs: ['Full-Frame Sensor', '33 Megapixels', '4K 60p Video', 'Silent Shutter'],
    imageUrl: sonyA7IVImage 
  },
  { 
    id: 2, 
    title: 'Canon EOS R5', 
    price: 120, 
    description: 'Mirrorless, 45MP, 8K Video',
    detailedDescription: 'The Canon EOS R5 is a groundbreaking mirrorless camera featuring a 45MP sensor and internal 8K RAW video recording. It also boasts exceptional In-Body Image Stabilization (IBIS) and Dual Pixel CMOS AF.',
    specs: ['8K RAW Video', '45 Megapixels', 'IBIS (8 Stops)', 'Dual Pixel AF II'],
    imageUrl: canonR5Image 
  },
  { 
    id: 3, 
    title: 'ARRI Alexa Mini LF', 
    price: 500, 
    description: 'Cinema Camera, Large Format',
    detailedDescription: 'The ARRI Alexa Mini LF delivers a natural, film-like image with Large Format aesthetics. Compact and lightweight, it’s designed for professional film and high-end commercial production, offering a massive dynamic range and beautiful color science.',
    specs: ['Large Format Sensor', 'ARRI Color Science', 'Internal ND Filters', 'Lightweight Carbon Body'],
    imageUrl: arriMiniLFImage 
  },
  { 
    id: 4, 
    title: 'Fujifilm X-T5', 
    price: 70, 
    description: 'Mirrorless, 40MP, APS-C',
    detailedDescription: 'A classic rangefinder-style camera with a modern touch, the X-T5 features a high-resolution 40MP APS-C sensor, 6.2K video recording, and Fujifilm\'s signature film simulations. Perfect for street and documentary photography.',
    specs: ['APS-C Sensor', '40 Megapixels', '6.2K Video', 'Film Simulations'],
    imageUrl: fujiXT5Image 
  },
  { 
    id: 5, 
    title: 'DJI Ronin RS 3 Pro', 
    price: 50, 
    description: '3-Axis Gimbal Stabilizer',
    detailedDescription: 'The DJI Ronin RS 3 Pro is a professional-grade gimbal designed to support mid-sized mirrorless and cinema camera setups. It ensures smooth, cinematic shots with automated axis locks and extended carbon fiber arms.',
    specs: ['3-Axis Stabilization', 'Carbon Fiber Arms', 'Auto-Lock Axes', '3.8kg Payload'],
    imageUrl: djiRoninImage 
  },
  { 
    id: 6, 
    title: 'Blackmagic Pocket Cinema Camera 6K Pro', 
    price: 150, 
    description: 'Super 35 Sensor, EF Mount',
    detailedDescription: 'A cinema camera offering stunning image quality with 6K resolution and a Super 35 sensor. The Pro model includes built-in ND filters, a brighter HDR screen, and longer battery life, making it a powerful and portable production tool.',
    specs: ['Super 35 Sensor', '6K Resolution', 'Built-in ND Filters', 'EF Lens Mount'],
    imageUrl: blackmagicImage 
  },
];

export default cameraData;