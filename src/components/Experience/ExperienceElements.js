import styled from 'styled-components';

//FIX THE PROBLEM WITH THE FONT WEIGHT!!!


export const ExperienceContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ExperienceH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ExperienceWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 40px;
    }
`;

export const ExperienceCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    max-width: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ExperienceIcon = styled.img`
    height: 100px;
    margin-bottom: 10px;
`;

export const ExperienceH2 = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

export const ExperienceP = styled.p`
    font-size: 1rem;
    text-align: center;
`;