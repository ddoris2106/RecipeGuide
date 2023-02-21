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
    height: 850px;
    height: auto;
    padding: 1rem 2.25rem;
    overflow: visible;

    border-radius: 0.8rem;
    transition: background 0.35s;

    ${props => props.expansion == true && 
        css`background-color: rgba(242, 240, 242, 0.4);`
    }

    scroll-snap-stop: always;
    scroll-snap-align: start;
    scroll-margin-top: 200px;

    animation: ${fadeUp} 1.25s linear forwards;
    animation-delay: ${props => props.delay}s;

    @media(min-width: 800px){
        height: 550px;
        flex-direction: row;
        justify-content: space-around;
    }
`;

S.ImageContainer = styled.div`
    width: 300px;
    height: 375px;
    margin: 0 auto;
    padding: 0.5rem;
    overflow: hidden;

    display: flex;
    justify-content: center;

    border-radius: 5%;
    position: relative;

    @media(min-width: 400px){
        min-width: 300px;
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
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25rem;
    transition: justify-content 0.35s;

    ${props => props.expansion == true && 
        css`justify-content: flex-start;`
    }
    
`;

S.Title = styled.h2`
    font-size: 3.125rem;
    font-weight: 500;
    font-style: italic;
    color: var(--text-white);
    transition: color 0.35s;

    ${props => props.expansion == true && 
        css`
            text-shadow: 0.1rem 0.2rem 0.3rem var(--bg-light-purple);
            color: var(--text-purple);
        `
    }


`;

S.Author = styled.h3`
    font-size: 2.625rem;
    font-weight: normal;
    color: var(--text-white);
    transition: color 0.35s;

    ${props => props.expansion == true && 
        css`
            text-shadow: 0.1rem 0.2rem 0.3rem var(--bg-light-purple);
            color: var(--text-purple);
        `
    }
`;

S.Name = styled.span``;

S.Dot = styled.span`
    display: inline-block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    margin: 0 0.5rem;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--bg-dark-purple);
`;

S.Description = styled.p`
    font-size: 2rem;
    font-weight: normal;
    color: var(--text-black);
`;

S.Link = styled.p``;

export default S;