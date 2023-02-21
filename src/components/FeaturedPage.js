import React from 'react';
import styled, {keyframes} from 'styled-components';

import Recipe from './Recipe';
import {getFavoriteRecipes, getAuthor} from '../utils/parseData';

const fadeUp = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
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

`;

function FeaturedPage() {
    const recipes = getFavoriteRecipes();
    console.log(recipes);

    return(
        <S.FeaturedPage>
            <S.Title>Recipe Hub</S.Title>
            {recipes.map((recipe, idx) => {
                return <Recipe key={recipe.id} recipe={recipe} author={getAuthor(recipe.creator_id)} index={idx}></Recipe>;
            })}
        </S.FeaturedPage>
    );
}

export default FeaturedPage;