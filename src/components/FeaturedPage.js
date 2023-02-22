import React from 'react';
import styled, {keyframes} from 'styled-components';

import FeaturedRecipe from './FeaturedRecipe';
import {getFavoriteRecipes, getAuthor} from '../utils/parseData';

const fadeUp = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;

// Inspiration from: https://codepen.io/acupoftee/pen/WNbBxXq?editors=1100
const textAnim = keyframes`
    0%{
        clip-path: inset(0px 0 0px 0);
    }
    25%{
        clip-path: inset(50px 0 0px 0);
    }
    50%{
        clip-path: inset(50px 0 50px 0);
    }
    75%{
        clip-path: inset(20px 0 0px 0);
    }
    85%{
        clip-path: inset(60px 0 15px 0);
    }
    100%{
        clip-path: inset(0px 0 0px 0);
    }
`;

const changeColor = keyframes`
    0%{
        text-shadow: -1px 0 var(--text-black); 
    }
    40%{
        text-shadow: -1px 0 var(--bg-dark-purple);
    }
    50%{
        text-shadow: -1px 0 var(--bg-dark-purple);
    }
    80%{
        text-shadow: -1px 0 var(--text-black);
    }
    100%{
        text-shadow: -1px 0 var(--text-black);
    }
`;

const S = {};

S.FeaturedPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    background: none;
    padding: 0 2.5rem;
    height: 100%;
    overflow: auto;

    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
`;

S.Title = styled.h1`
    position: relative;
    margin: 0;

    // transform: translateY(35%);
    
    font-size: 3.5rem;
    font-weight: 500;
    font-style: italic;
    letter-spacing: 0.1rem;

    color: var(--text-white);
    text-shadow: 0.15rem 0.25rem 0.5rem var(--text-purple);
    -webkit-text-stroke: 0.025rem var(--text-black);

    scroll-snap-stop: always;
    scroll-snap-align: start;

    animation: ${fadeUp} 1.25s linear forwards;

    
    @media(min-width: 450px){
        font-size: 4.25rem;
    }

    @media(min-width: 800px){
        font-size: 5.65rem;
    }

    &::before{
        content: "Recipe Hub";
        position: absolute;
        top: 0;
        left: -0.1%;
        color: transparent;
        // scale: 0.9;
        text-shadow: -1px 0 var(--text-black);
        background: none;
        overflow: hidden;
        z-index: -1;
        animation: ${textAnim} 1.25s linear infinite alternate-reverse, ${changeColor} 3s ease-in-out infinite;
    }

`;

function FeaturedPage() {
    const recipes = getFavoriteRecipes();

    return(
        <S.FeaturedPage>
            <S.Title>Recipe Hub</S.Title>
            {recipes.map((recipe, idx) => {
                return (<FeaturedRecipe key={recipe.id} recipe={recipe} author={getAuthor(recipe.creator_id)} index={idx}></FeaturedRecipe>);
            })}
        </S.FeaturedPage>
    );
}

export default FeaturedPage;