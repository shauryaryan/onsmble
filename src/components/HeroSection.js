// // src/components/HeroSection.js
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
//
// const HeroContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #d4c1a7;
//     color: #ffffff;
//     height: 100vh;
//     padding: 3rem;
//     font-family: 'Andale Mono', monospace;
//     position: relative;
//     overflow: hidden;
// `;
//
// const TopText = styled.div`
//     position: absolute;
//     top: 20px;
//     left: 20px;
//     font-size: 1.2rem;
// `;
//
// const LeftContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     max-width: 40%;
// `;
//
// const Logo = styled.h1`
//     font-size: 3rem;
//     font-weight: bold;
//     color: #ffffff;
//     margin-bottom: 1rem;
// `;
//
// const JoinButton = styled(Link)`
//     background-color: #6f6b58;
//     color: #ffffff;
//     text-decoration: none;
//     text-align: center;
//     padding: 0.75rem 2rem;
//     font-size: 1rem;
//     cursor: pointer;
//     border-radius: 8px;
//     margin-bottom: 1.5rem;
// `;
//
// const LoginButton = styled.div`
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     font-size: 1rem;
//     cursor: pointer;
//     color: #ffffff;
// `;
//
// const IconsContainer = styled.div`
//     display: flex;
//     gap: 1.5rem;
//     margin-bottom: 1.5rem;
// `;
//
// const IconWrapper = styled.div`
//     cursor: pointer;
//     filter: ${({ isActive }) => (isActive ? 'brightness(1.2)' : 'brightness(0.7)')};
//     transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
//     transition: transform 0.3s, filter 0.3s;
// `;
//
// const FooterText = styled.p`
//     font-size: 0.9rem;
//     color: #ffffff;
//     margin-top: 1.5rem;
// `;
//
// const ImageContainer = styled.div`
//     position: relative;
//     width: 70%;
//     height: 150%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
//
// const CategoryImage = styled.img`
//     position: absolute;
//     width: 70px; // Ensure all images have the same size
//     height: 90px;
//     object-fit: contain; // Ensures images fit within bounds without distortion
//     border-radius: 15px; // Optional if you want circular crop
//     transition: opacity 0.5s ease-in-out;
// `;
//
// const CentralLogo = styled.img`
//     width: 150px;
//     height: auto;
//     position: relative;
//     z-index: 2;
// `;
//
// const positions = [
//     { top: '20%', left: '40%' },
//     { top: '30%', left: '60%' },
//     { top: '50%', left: '70%' },
//     { top: '70%', left: '60%' },
//     { top: '70%', left: '40%' },
//     { top: '70%', left: '20%' },
//     { top: '50%', left: '10%' },
//     { top: '30%', left: '20%' },
// ];
//
// const HeroSection = () => {
//     const [activeCategory, setActiveCategory] = useState(null);
//
//     const categories = {
//         bedroom: [
//             '/images/bedroom/bedroom1.png',
//             '/images/bedroom/bedroom2.png',
//             '/images/bedroom/bedroom3.png',
//             '/images/bedroom/bedroom4.png',
//             '/images/bedroom/bedroom5.png',
//             '/images/bedroom/bedroom6.png',
//             '/images/bedroom/bedroom7.png',
//             '/images/bedroom/bedroom8.png',
//             '/images/bedroom/bedroom9.png',
//             '/images/bedroom/bedroom10.png',
//         ],
//         living: [
//             '/images/living/living1.png',
//             '/images/living/living2.png',
//             '/images/living/living3.png',
//             '/images/living/living4.png',
//             '/images/living/living5.png',
//             '/images/living/living6.png',
//             '/images/living/living7.png',
//             '/images/living/living8.png',
//             '/images/living/living9.png',
//             '/images/living/living10.png',
//         ],
//         office: [
//             '/images/office/office1.png',
//             '/images/office/office2.png',
//             '/images/office/office3.png',
//             '/images/office/office4.png',
//             '/images/office/office5.png',
//             '/images/office/office6.png',
//             '/images/office/office7.png',
//             '/images/office/office8.png',
//             '/images/office/office9.png',
//         ],
//         dining: [
//             '/images/dining/dining1.png',
//             '/images/dining/dining2.png',
//             '/images/dining/dining3.png',
//             '/images/dining/dining4.png',
//             '/images/dining/dining5.png',
//             '/images/dining/dining6.png',
//             '/images/dining/dining7.png',
//         ],
//     };
//
//     const rotatingImages = [
//         '/images/rotating/image1.png',
//         '/images/rotating/image2.png',
//         '/images/rotating/image3.png',
//         '/images/rotating/image4.png',
//         '/images/rotating/image5.png',
//         '/images/rotating/image6.png',
//         '/images/rotating/image7.png',
//         '/images/rotating/image8.png',
//     ];
//
//     const icons = {
//         bedroom: '/images/icons/bed.png',
//         living: '/images/icons/living.png',
//         office: '/images/icons/office.png',
//         dining: '/images/icons/dining.png',
//     };
//
//     useEffect(() => {
//         const categoryKeys = Object.keys(categories);
//         let index = activeCategory ? categoryKeys.indexOf(activeCategory) : 0;
//
//         const interval = setInterval(() => {
//             index = (index + 1) % categoryKeys.length;
//             setActiveCategory(categoryKeys[index]);
//         }, 5000);
//
//         return () => clearInterval(interval);
//     }, [activeCategory]);
//
//     const displayedImages = activeCategory ? categories[activeCategory] : rotatingImages;
//
//     return (
//         <HeroContainer>
//             <TopText>Your Home for Interiors</TopText>
//             <LoginButton>LOG IN</LoginButton>
//             <LeftContent>
//                 <Logo>onsmble</Logo>
//                 <JoinButton to="/join">JOIN THE WAITLIST</JoinButton>
//                 <IconsContainer>
//                     {Object.entries(icons).map(([category, iconPath]) => (
//                         <IconWrapper
//                             key={category}
//                             isActive={activeCategory === category}
//                             onMouseEnter={() => setActiveCategory(category)}
//                         >
//                             <img src={iconPath} alt={`${category} icon`} width="32" height="32" />
//                         </IconWrapper>
//                     ))}
//                 </IconsContainer>
//                 <FooterText>PARTNER WITH US</FooterText>
//             </LeftContent>
//             <ImageContainer>
//                 <CentralLogo src="/images/central-logo.png" alt="Central Logo" />
//                 {displayedImages.map((src, index) => (
//                     <CategoryImage key={index} src={src} alt={`Image ${index + 1}`} style={positions[index % positions.length]} />
//                 ))}
//             </ImageContainer>
//         </HeroContainer>
//     );
// };
//
// export default HeroSection;





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
//
// const HeroContainer = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #d4c1a7;
//     color: #ffffff;
//     height: 100vh;
//     padding: 4rem 3rem;
//     font-family: 'Andale Mono', monospace;
//     position: relative;
// `;
//
// const LeftContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     max-width: 40%;
// `;
//
// const Subtitle = styled.p`
//     font-size: 1rem;
//     color: #ffffff;
//     position: absolute;
//     top: 2rem;
//     left: 3rem;
// `;
//
// const Logo = styled.h1`
//     font-size: 3rem;
//     font-weight: bold;
//     color: #ffffff;
//     margin-bottom: 0.5rem;
// `;
//
// const JoinButton = styled.button`
//     background-color: #6f6b58;
//     color: #ffffff;
//     border: none;
//     padding: 0.75rem 2rem;
//     font-size: 1rem;
//     cursor: pointer;
//     border-radius: 8px;
//     margin-bottom: 1.5rem;
// `;
//
// const LoginButton = styled.div`
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     font-size: 1rem;
//     cursor: pointer;
//     color: #ffffff;
// `;
//
// const IconsContainer = styled.div`
//     display: flex;
//     gap: 1rem;
//     margin-bottom: 2rem;
// `;
//
// const IconWrapper = styled.div`
//     cursor: pointer;
//     filter: ${({ isActive }) => (isActive ? 'brightness(1.2)' : 'brightness(0.7)')};
//     transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
//     transition: transform 0.3s, filter 0.3s;
//     width: 50px;
//     height: 22px;
// `;
//
// const FooterText = styled.p`
//     font-size: 0.9rem;
//     color: #ffffff;
//     margin-top: 2rem;
// `;
//
// const ImageContainer = styled.div`
//     position: relative;
//     width: 60%;
//     height: 90%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
//
// const CategoryImage = styled.img`
//     position: absolute;
//     width: 100px;
//     height: 150px;
//     object-fit: contain;
//     transition: opacity 0.5s ease-in-out;
// `;
//
// const CentralLogo = styled.img`
//     width: 150px;
//     height: auto;
//     position: relative;
//     z-index: 2;
// `;
//
// const calculateRadialPositions = (radius, count) => {
//     const angleStep = (2 * Math.PI) / count;
//     return Array.from({ length: count }, (_, i) => ({
//         top: `${50 + radius * Math.sin(i * angleStep)}%`,
//         left: `${50 + radius * Math.cos(i * angleStep)}%`,
//     }));
// };
//
// const HeroSection = () => {
//     const navigate = useNavigate();
//     const [activeCategory, setActiveCategory] = useState(null);
//
//     const categories = {
//         bedroom: Array.from({ length: 12 }, (_, i) => `/images/bedroom/bedroom${i + 1}.png`),
//         living: Array.from({ length: 10 }, (_, i) => `/images/living/living${i + 1}.png`),
//         office: Array.from({ length: 9 }, (_, i) => `/images/office/office${i + 1}.png`),
//         dining: Array.from({ length: 7 }, (_, i) => `/images/dining/dining${i + 1}.png`),
//     };
//
//     // const rotatingImages = Array.from({ length: 8 }, (_, i) => `/images/rotating/image${i + 1}.png`);
//
//     const icons = {
//         bedroom: '/images/icons/bed.png',
//         living: '/images/icons/living.png',
//         office: '/images/icons/office.png',
//         dining: '/images/icons/dining.png',
//     };
//
//     useEffect(() => {
//         const categoryKeys = Object.keys(categories);
//         let index = activeCategory ? categoryKeys.indexOf(activeCategory) : 0;
//
//         const interval = setInterval(() => {
//             index = (index + 1) % categoryKeys.length;
//             setActiveCategory(categoryKeys[index]);
//         }, 5000);
//
//         return () => clearInterval(interval);
//     }, [activeCategory]);
//
//     const displayedImages = activeCategory ? categories[activeCategory] : rotatingImages;
//     const positions = calculateRadialPositions(35, displayedImages.length);
//
//     return (
//         <HeroContainer>
//             <LoginButton>LOG IN</LoginButton>
//             <Subtitle>Your Home for Interiors</Subtitle>
//             <LeftContent>
//                 <Logo>onsmble</Logo>
//                 <JoinButton onClick={() => navigate('/join')}>JOIN THE WAITLIST</JoinButton>
//
//                 <IconsContainer>
//                     {Object.entries(icons).map(([category, iconPath]) => (
//                         <IconWrapper
//                             key={category}
//                             isActive={activeCategory === category}
//                             onMouseEnter={() => setActiveCategory(category)}
//                         >
//                             <img src={iconPath} alt={`${category} icon`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//                         </IconWrapper>
//                     ))}
//                 </IconsContainer>
//
//                 <FooterText>PARTNER WITH US</FooterText>
//             </LeftContent>
//
//             <ImageContainer>
//                 <CentralLogo src="/images/central-logo.png" alt="Central Logo" />
//                 {displayedImages.map((src, index) => (
//                     <CategoryImage
//                         key={index}
//                         src={src}
//                         alt={`Image ${index + 1}`}
//                         style={{
//                             top: positions[index].top,
//                             left: positions[index].left,
//                             transform: 'translate(-50%, -50%)',
//                         }}
//                     />
//                 ))}
//             </ImageContainer>
//         </HeroContainer>
//     );
// };
//
// export default HeroSection;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d4c1a7;
    color: #ffffff;
    height: 100vh;
    padding: 4rem 3rem;
    font-family: 'Andale Mono', monospace;
    position: relative;
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40%;
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: #ffffff;
    position: absolute;
    top: 2rem;
    left: 3rem;
`;

const Logo = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-family: 'Cormorant Garamond', serif; /* Apply the Cormorant Garamond font */
`;

const JoinButton = styled.button`
    background-color: #6f6b58;
    color: #ffffff;
    border: none;
    padding: 0.65rem 1.5rem;
    font-size: .85rem;
    cursor: pointer;
    border-radius: 12px;
    margin-bottom: 2rem;
`;

// const LoginButton = styled.div`
//     position: absolute;
//     top: 20px;
//     right: 20px;
//     font-size: 1rem;
//     cursor: pointer;
//     color: #ffffff;
// `;

const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const IconWrapper = styled.div`
    cursor: pointer;
    filter: ${({ isActive }) => (isActive ? 'brightness(1.2)' : 'brightness(0.7)')};
    transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
    transition: transform 0.3s, filter 0.3s;
    width: 45px;
    height: 22px;
`;

const FooterText = styled.p`
    font-size: 0.9rem;
    color: #ffffff;
    margin-top: 10rem;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 60%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`;



const CategoryImage = styled.img`
    position: absolute;
    width: 100px;
    height: 150px;
    object-fit: contain;
    transition: opacity 0.5s ease-in-out;


`;

const CentralLogo = styled.img`
    width: 150px;
    height: auto;
    position: relative;
    z-index: 2;
`;




// Function to calculate radial positions around the central logo
const calculateRadialPositions = (radius, count) => {
    const angleStep = (2 * Math.PI) / count;
    return Array.from({ length: count }, (_, i) => ({
        top: `${50 + radius * Math.sin(i * angleStep)}%`,
        left: `${50 + radius * Math.cos(i * angleStep)}%`,
    }));
};

const HeroSection = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = {
        bedroom: Array.from({ length: 12 }, (_, i) => `/images/bedroom/bedroom${i + 1}.png`),
        living: Array.from({ length: 10 }, (_, i) => `/images/living/living${i + 1}.png`),
        office: Array.from({ length: 9 }, (_, i) => `/images/office/office${i + 1}.png`),
        dining: Array.from({ length: 10 }, (_, i) => `/images/dining/dining${i + 1}.png`),
    };

    const icons = {
        bedroom: '/images/icons/bed.png',
        living: '/images/icons/living.png',
        office: '/images/icons/office.png',
        dining: '/images/icons/dining.png',
    };

    useEffect(() => {
        const categoryKeys = Object.keys(categories);
        let index = activeCategory ? categoryKeys.indexOf(activeCategory) : 0;

        const interval = setInterval(() => {
            index = (index + 1) % categoryKeys.length;
            setActiveCategory(categoryKeys[index]);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeCategory]);

    const displayedImages = activeCategory ? categories[activeCategory] : [];
    const positions = calculateRadialPositions(35, displayedImages.length);

    return (
        <HeroContainer>
            {/*<LoginButton>LOG IN</LoginButton>*/}
            <Subtitle>YOUR HOME FOR INTERIORS</Subtitle>
            <LeftContent>
                <Logo>onsmble</Logo>
                <JoinButton onClick={() => navigate('/join')}>JOIN THE WAITLIST</JoinButton>

                <IconsContainer>
                    {Object.entries(icons).map(([category, iconPath]) => (
                        <IconWrapper
                            key={category}
                            isActive={activeCategory === category}
                            onMouseEnter={() => setActiveCategory(category)}
                        >
                            <img src={iconPath} alt={`${category} icon`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </IconWrapper>
                    ))}
                </IconsContainer>

                <FooterText>PARTNER WITH US</FooterText>
            </LeftContent>
            <ImageContainer>
                <CentralLogo src="/images/central-logo.png" alt="Central Logo" />
                {displayedImages.map((src, index) => (
                    <CategoryImage
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        style={{
                            top: positions[index].top,
                            left: positions[index].left,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
            </ImageContainer>
        </HeroContainer>
    );
};

export default HeroSection;




