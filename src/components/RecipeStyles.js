import styled, {keyframes, css} from 'styled-components';
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

S.FavoriteRecipe = styled.div`
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

S.FavoriteImageContainer = styled.div`
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

S.FavoriteRecipeInfo = styled.div`
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

S.FavoriteTitle = styled.h2`
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

S.FavoriteAuthor = styled.h3`
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

S.GridRecipe = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0.2rem;
    background-color: rgba(236, 216, 242, 0.75);
    justify-self: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    transition: transform 0.25s linear;
    transition: filter 0.25s ease-in;

    &:hover{
        ${props => props.isExpanded === false &&
            css`
                transform: scale(1.1);
                filter: blur(0);
                transition: transform 0.25s linear;
            `
        }   
    }

    ${props => props.isHovered === false &&
        css`
            filter: blur(0.075rem);
        `
    }

    ${props => props.isExpanded === true &&
        css`
            transform: scale(1);
            filter: blur(0);
            transition: transform 0.25s linear;
            justify-content: flex-start;
            padding-top: 2.25rem;
        `
    }   
`;

S.GridRecipeImage = styled.img`
    height: 100%;
    max-width: 150%;
    transform: scale(1.2);

    ${props => props.isExpanded === true &&
        css`
            max-width: 40%;
            max-height: 35%;
            margin-bottom: 1.25rem;
        `
    }   
`;

S.FavoriteIcon = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    border-top-left-radius: 50%;


    background-image: url(./icons/star-icon.svg);
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: bottom right;
    background-color: var(--bg-white);
    z-index: 3;

    @media(min-width: 500px){
        width: 2rem;
        height: 2rem;
    }
    
    @media(min-width: 900px){
        width: 2.5rem;
        height: 2.5rem;
    }
`;

S.GridTitle = styled.h2`
    margin: 0;
    margin-block: 0;
    font-size: 1.25rem;
    font-weight: 500;
    font-style: italic;
    color: var(--text-dark-purple);

    @media(min-width: 500px){
        font-size: 2.25rem;
    }
    
    @media(min-width: 900px){
        font-size: 3rem;
    }
`;

S.GridAuthor = styled.h3`
    margin: 0;
    margin-block: 0;
    font-size: 1.125rem;
    font-weight: normal;
    color: var(--text-dark-purple);

    @media(min-width: 500px){
        font-size: 1.75rem;
    }
    
    @media(min-width: 900px){
        font-size: 2.25rem;
    }
`;

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