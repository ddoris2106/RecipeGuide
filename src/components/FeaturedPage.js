import React from 'react';
import styled from 'styled-components';

import Recipe from './Recipe';
import {getFavoriteRecipes, getAuthor} from '../utils/parseData';

const S = {};

S.FeaturedPage = styled.div`
    display: flex;
    gap: 1.8rem;

    background: none;
    padding: 0 2.5rem;
`;

function FeaturedPage() {
    const recipes = getFavoriteRecipes();

    return(
        <FeaturedPage>
            {recipes.map((recipe) => {
                return <Recipe recipe={recipe}></Recipe>;
            })}
        </FeaturedPage>
    );
}

export default FeaturedPage;