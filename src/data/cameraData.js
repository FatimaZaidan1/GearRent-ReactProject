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
    // 2. Use the imported image variable here
    imageUrl: sonyA7IVImage 
  },
  { 
    id: 2, 
    title: 'Canon EOS R5', 
    price: 120, 
    description: 'Mirrorless, 45MP, 8K Video',
    imageUrl: canonR5Image 
  },
  { 
    id: 3, 
    title: 'ARRI Alexa Mini LF', 
    price: 500, 
    description: 'Cinema Camera, Large Format',
    imageUrl: arriMiniLFImage 
  },
  { 
    id: 4, 
    title: 'Fujifilm X-T5', 
    price: 70, 
    description: 'Mirrorless, 40MP, APS-C',
    imageUrl: fujiXT5Image 
  },
  { 
    id: 5, 
    title: 'DJI Ronin RS 3 Pro', 
    price: 50, 
    description: '3-Axis Gimbal Stabilizer',
    imageUrl: djiRoninImage 
  },
  { 
    id: 6, 
    title: 'Blackmagic Pocket Cinema Camera 6K Pro', 
    price: 150, 
    description: 'Super 35 Sensor, EF Mount',
    imageUrl: blackmagicImage 
  },
];

export default cameraData;
