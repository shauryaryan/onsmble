// // src/components/FloatingImages.js
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
//
// // Define a styled container to position the images
// const ImagesContainer = styled.div`
//     position: absolute;
//     top: 20%;
//     left: 50%;
//     width: 80%;
//     height: 60%;
//     overflow: hidden;
//     transform: translate(-50%, -20%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
//
// const ImageWrapper = styled(motion.div)`
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     background-size: contain;
//     background-repeat: no-repeat;
// `;
//
// // Array of image file paths - update this with your image paths
// const imageFiles = [
//     '/images/image1.png',  // Replace with actual paths
//     '/images/image2.png',
//     // Add more images as needed
// ];
//
// const RotatingImages = () => {
//     // Define floating and rotation animations
//     const floatingAnimation = {
//         y: [-10, 10], // Moves up and down
//         transition: {
//             duration: 4,
//             yoyo: Infinity,
//             ease: 'easeInOut',
//         },
//     };
//
//     const rotateAnimation = {
//         rotate: [0, 360],
//         transition: {
//             repeat: Infinity,
//             duration: 20,
//             ease: 'linear',
//         },
//     };
//
//     return (
//         <ImagesContainer>
//             {imageFiles.map((src, index) => (
//                 <ImageWrapper
//                     key={index}
//                     style={{
//                         backgroundImage: `url(${src})`,
//                         top: `${Math.random() * 100}%`,
//                         left: `${Math.random() * 100}%`,
//                     }}
//                     animate={{
//                         ...floatingAnimation,
//                         ...rotateAnimation,
//                     }}
//                 />
//             ))}
//         </ImagesContainer>
//     );
// };

// export default RotatingImages;

// src/components/FloatingImages.js
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
//
// const ImagesContainer = styled.div`
//     position: absolute;
//     right: 5%;
//     top: 65%;
//     width: 400px; /* Adjusted width to control the size of the circular layout */
//     height: 400px; /* Adjusted height to control the size of the circular layout */
//     transform: translateY(-50%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;
//
// const ImageWrapper = styled(motion.div)`
//     position: absolute;
//     width: 80px;
//     height: 80px;
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center;
// `;
//
// // Array of image file paths
// const imageFiles = [
//     '/images/image1.jpeg',
//     '/images/image2.jpeg',
//     '/images/image3.jpeg',
//     '/images/image4.jpeg',
//     '/images/image5.jpeg',
//     '/images/image6.jpeg',
//     '/images/image7.jpeg'
// ];
//
// const FloatingImages = () => {
//     const radius = 150; // Radius of the circular layout
//
//     return (
//         <ImagesContainer>
//             {imageFiles.map((src, index) => {
//                 // Calculate angle and position for each image
//                 const angle = (index / imageFiles.length) * (2 * Math.PI); // Angle for each image
//                 const x = radius * Math.cos(angle); // X coordinate
//                 const y = radius * Math.sin(angle); // Y coordinate
//
//                 return (
//                     <ImageWrapper
//                         key={index}
//                         style={{
//                             backgroundImage: `url(${src})`,
//                             left: `${x}px`, // Positioning each image based on x and y
//                             top: `${y}px`
//                         }}
//                         animate={{
//                             rotate: [0, 360],
//                             transition: {
//                                 repeat: Infinity,
//                                 duration: 30,
//                                 ease: 'linear',
//                             },
//                         }}
//                     />
//                 );
//             })}
//         </ImagesContainer>
//     );
// };
//
// export default FloatingImages;


// src/components/FloatingImages.js
// src/components/FloatingImages.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImagesContainer = styled(motion.div)`
    position: absolute;
    right: 5%;
    top: 60%;
    width: 400px;
    height: 400px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CentralLogo = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-image: url('/images/logo.png'); /* Path to your logo image */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
`;

const ImageWrapper = styled(motion.div)`
    position: absolute;
    width: 80px;
    height: 80px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: ${({ isHighlighted }) => (isHighlighted ? 1 : 0.4)};
    transform: ${({ isHighlighted }) => (isHighlighted ? 'scale(1.2)' : 'scale(1)')};
`;

const FloatingImages = ({ images = [] }) => {
    const radius = 150; // Radius for circular positioning

    return (
        <ImagesContainer
            animate={{
                rotate: 360,
            }}
            transition={{
                repeat: Infinity,
                duration: 60,
                ease: 'linear',
            }}
        >
            <CentralLogo />
            {images.length > 0 &&
                images.map((src, index) => {
                    const angle = (index / images.length) * (2 * Math.PI);
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);

                    return (
                        <ImageWrapper
                            key={index}
                            style={{
                                backgroundImage: `url(${src})`,
                                left: `${x}px`,
                                top: `${y}px`,
                            }}
                        />
                    );
                })}
        </ImagesContainer>
    );
};

export default FloatingImages;

