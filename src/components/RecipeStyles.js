import styled, {css, keyframes} from 'styled-components';

const fadeUp = keyframes`
    0%{
        opacity: 0;
        transform: translateY(10%);
    }
    60%{
        opacity: 0.45;
    }
    100%{
        opacity: 1;
        transform: translateY(5%);
    }
`;

const S = {};

S.Recipe = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 75px;

    width: 100%;
    height: 65%;
    padding: 1rem 0.75rem;
    overflow: visible;

    border-radius: 0.8rem;
    transition: background 0.35s;

    ${props => props.expansion === true && 
        css`
            background-color: rgba(242, 240, 242, 0.4);
            // min-height: initial;
            height: 85%;
        `
    }

    scroll-snap-stop: always;
    scroll-snap-align: start;
    

    animation: ${fadeUp} 1.25s linear forwards;
    animation-delay: ${props => props.delay}s;

    @media(min-width: 800px){
        height: 550px;
        flex-direction: row;
        justify-content: space-between;
        scroll-margin-top: 200px;
    }
`;

S.ImageContainer = styled.div`
    width: 250px;
    height: 500px;
    margin: 0 auto;
    padding: 0.5rem;
    overflow: hidden;

    display: flex;
    justify-content: center;

    background-color: rgba(242, 240, 242, 0.4);
    border-radius: 5%;
    position: relative;

    @media(min-width: 800px){
        min-width: 300px;
        height: 375px;
    }

    img{
        width: 300px;
        max-height: 100%;
        border-radius: 5%;
    }
`;

S.RecipeInfo = styled.div`
    position: relative;
    height: 90%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.4rem;
    transition: justify-content 0.35s;

    @media(min-width: 800px){
        width: 50%;
        justify-content: center;
    }

    ${props => props.expansion === true && 
        css`
            @media(min-width: 800px){
                justify-content: flex-start;
                height: 60%;
            }
            
        `
    }
    
    
`;

S.Title = styled.h2`
    font-size: 2.5rem;
    line-height: 2.25rem;
    font-weight: 500;
    font-style: italic;
    color: var(--text-white);
    transition: color 0.35s;
    transition: text-shadow 0.35s;

    ${props => props.expansion === true && 
        css`
            text-shadow: 0.1rem 0.2rem 0.3rem var(--bg-light-purple);
            color: var(--text-purple);
        `
    }

    @media(min-width: 500px){
        font-size: 3.25rem;
        line-height: 3rem;
    }

    @media(min-width: 900px){
        font-size: 4.5rem;
        line-height: 4rem;
    }

`;

S.Author = styled.h3`
    font-size: 2rem;
    font-weight: normal;
    color: var(--text-white);
    transition: color 0.35s;
    transition: text-shadow 0.35s;

    ${props => props.expansion === true && 
        css`
            text-shadow: 0.1rem 0.2rem 0.3rem var(--bg-light-purple);
            color: var(--text-purple);
        `
    }

    @media(min-width: 500px){
        font-size: 2.5rem;
    }

    @media(min-width: 900px){
        font-size: 3rem;
    }
`;

S.Name = styled.span``;

// S.Dot = styled.span`
//     display: inline-block;
//     position: relative;

//     margin: 0 0.5rem;
//     width: 7px;
//     height: 7px;
//     border-radius: 50%;
//     background-color: var(--bg-dark-purple);
// `;

S.Description = styled.p`
    font-size: 1rem;
    font-weight: normal;
    color: var(--text-black);

    @media(min-width: 500px){
        font-size: 1.5rem;
    }

    @media(min-width: 900px){
        font-size: 2rem;
    }
`;

S.Link = styled.a`
    font-size: 1rem;
    font-weight: 400;
    text-decoration: underline;
    color: var(--text-black);

    @media(min-width: 500px){
        font-size: 1.5rem;
    }

    @media(min-width: 900px){
        font-size: 2rem;
    }
`;

export default S;