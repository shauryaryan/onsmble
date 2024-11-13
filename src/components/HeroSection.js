//
//
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
//     font-size: 4rem;
//     font-weight: bold;
//     color: #ffffff;
//     margin-bottom: 0.5rem;
//     font-family: 'Cormorant Garamond', serif; /* Apply the Cormorant Garamond font */
// `;
//
// const JoinButton = styled.button`
//     background-color: #6f6b58;
//     color: #ffffff;
//     border: none;
//     padding: 0.65rem 1.5rem;
//     font-size: .85rem;
//     cursor: pointer;
//     border-radius: 12px;
//     margin-bottom: 2rem;
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
//     width: 45px;
//     height: 22px;
// `;
//
// const FooterText = styled.p`
//     font-size: 0.9rem;
//     color: #ffffff;
//     margin-top: 10rem;
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
// // Function to calculate radial positions around the central logo
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
//         dining: Array.from({ length: 10 }, (_, i) => `/images/dining/dining${i + 1}.png`),
//     };
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
//     }, [activeCategory, categories]); // Updated dependency array
//
//     const displayedImages = activeCategory ? categories[activeCategory] : [];
//     const positions = calculateRadialPositions(35, displayedImages.length);
//
//     return (
//         <HeroContainer>
//             <Subtitle>YOUR HOME FOR INTERIORS</Subtitle>
//             <LeftContent>
//                 <Logo>onsmble</Logo>
//                 <JoinButton onClick={() => navigate('/join')}>JOIN THE WAITLIST</JoinButton>
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
//                 <FooterText>PARTNER WITH US</FooterText>
//             </LeftContent>
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
//
//     @media (max-width: 768px) {
//         flex-direction: column;
//         padding: 2rem 1.5rem;
//         height: auto;
//     }
// `;
//
// const LeftContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     max-width: 40%;
//
//     @media (max-width: 768px) {
//         max-width: 80%;
//         text-align: center;
//     }
// `;
//
// const Subtitle = styled.p`
//     font-size: 1rem;
//     color: #ffffff;
//     position: absolute;
//     top: 2rem;
//     left: 3rem;
//
//     @media (max-width: 768px) {
//         font-size: 0.9rem;
//         top: 1rem;
//         left: 1.5rem;
//     }
// `;
//
// const Logo = styled.h1`
//     font-size: 4rem;
//     font-weight: bold;
//     color: #ffffff;
//     margin-bottom: 0.5rem;
//     font-family: 'Cormorant Garamond', serif;
//
//     @media (max-width: 768px) {
//         font-size: 2.5rem;
//     }
// `;
//
// const JoinButton = styled.button`
//     background-color: #6f6b58;
//     color: #ffffff;
//     border: none;
//     padding: 0.65rem 1.5rem;
//     font-size: 0.85rem;
//     cursor: pointer;
//     border-radius: 12px;
//     margin-bottom: 2rem;
//     font-family: 'Andale Mono', monospace;
//
//     @media (max-width: 768px) {
//         font-size: 0.75rem;
//         padding: 0.5rem 1.2rem;
//     }
// `;
//
// const IconsContainer = styled.div`
//     display: flex;
//     gap: 1rem;
//     margin-bottom: 2rem;
//
//     @media (max-width: 768px) {
//         gap: 0.5rem;
//     }
// `;
//
// const IconWrapper = styled.div`
//     cursor: pointer;
//     filter: ${({ isActive }) => (isActive ? 'brightness(1.2)' : 'brightness(0.7)')};
//     transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
//     transition: transform 0.3s, filter 0.3s;
//     width: 45px;
//     height: 22px;
//
//     @media (max-width: 768px) {
//         width: 35px;
//         height: 18px;
//     }
// `;
//
// const FooterText = styled.p`
//     font-size: 0.9rem;
//     color: #ffffff;
//     margin-top: 10rem;
//
//     @media (max-width: 768px) {
//         font-size: 0.8rem;
//         margin-top: 5rem;
//     }
// `;
//
// const ImageContainer = styled.div`
//     position: relative;
//     width: 60%;
//     height: 90%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//
//     @media (max-width: 768px) {
//         width: 100%;
//         height: auto;
//         margin-top: 2rem;
//     }
// `;
//
// const CategoryImage = styled.img`
//     position: absolute;
//     width: 100px;
//     height: 150px;
//     object-fit: contain;
//     transition: opacity 0.5s ease-in-out;
//
//     @media (max-width: 768px) {
//         width: 80px;
//         height: 120px;
//     }
// `;
//
// const CentralLogo = styled.img`
//     width: 150px;
//     height: auto;
//     position: relative;
//     z-index: 2;
//
//     @media (max-width: 768px) {
//         width: 120px;
//     }
// `;
//
// // Function to calculate radial positions around the central logo
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
//         dining: Array.from({ length: 10 }, (_, i) => `/images/dining/dining${i + 1}.png`),
//     };
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
//     }, [activeCategory, categories]); // Updated dependency array
//
//     const displayedImages = activeCategory ? categories[activeCategory] : [];
//     const positions = calculateRadialPositions(35, displayedImages.length);
//
//     return (
//         <HeroContainer>
//             <Subtitle>YOUR HOME FOR INTERIORS</Subtitle>
//             <LeftContent>
//                 <Logo>onsmble</Logo>
//                 <JoinButton onClick={() => navigate('/join')}>JOIN THE WAITLIST</JoinButton>
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
//                 <FooterText>PARTNER WITH US</FooterText>
//             </LeftContent>
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

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 1rem;
        height: auto;
        align-items: center;
    }
`;

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 40%;

    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        padding: 0 1rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: #ffffff;
    position: absolute;
    top: 2rem;
    left: 3rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        top: 1rem;
        left: 1rem;
    }
`;

const Logo = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-family: 'Cormorant Garamond', serif;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const JoinButton = styled.button`
    background-color: #6f6b58;
    color: #ffffff;
    border: none;
    padding: 0.65rem 1.5rem;
    font-size: 0.85rem;
    cursor: pointer;
    border-radius: 12px;
    margin-bottom: 2rem;
    font-family: 'Andale Mono', monospace;

    @media (max-width: 768px) {
        font-size: 0.75rem;
        padding: 0.5rem 1.2rem;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

const IconWrapper = styled.div`
    cursor: pointer;
    filter: ${({ isActive }) => (isActive ? 'brightness(1.2)' : 'brightness(0.7)')};
    transform: ${({ isActive }) => (isActive ? 'scale(1.1)' : 'scale(1)')};
    transition: transform 0.3s, filter 0.3s;
    width: 45px;
    height: 22px;

    @media (max-width: 768px) {
        width: 35px;
        height: 18px;
    }
`;

const FooterText = styled.p`
    font-size: 0.9rem;
    color: #ffffff;
    margin-top: 10rem;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        margin-top: 5rem;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 60%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-top: 2rem;
    }
`;

const CategoryImage = styled.img`
    position: absolute;
    width: 100px;
    height: 150px;
    object-fit: contain;
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 768px) {
        width: 80px;
        height: 120px;
    }
`;

const CentralLogo = styled.img`
    width: 150px;
    height: auto;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
        width: 120px;
    }
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
    }, [activeCategory, categories]);

    const displayedImages = activeCategory ? categories[activeCategory] : [];
    const positions = calculateRadialPositions(35, displayedImages.length);

    return (
        <HeroContainer>
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
