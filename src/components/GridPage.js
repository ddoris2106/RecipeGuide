import React, {useState} from 'react';
import styled from 'styled-components';

import GridRecipe from './GridRecipe';
import { getAllRecipes, getAuthor } from '../utils/parseData';

const S = {};

S.GridPage = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 1.5rem;
    padding-top: 5rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 7rem;
    gap: 1.75rem 1.5rem;

    overflow: auto;

    @media(min-width: 500px){
        grid-auto-rows: 13.25rem;
    }
    
    @media(min-width: 900px){
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 16rem;
    }
`;

function GridPage() {
    const [expandedRecipe, setExpandedRecipe] = useState(null);
    const allRecipes = getAllRecipes();

    return(
        <S.GridPage>
            {allRecipes.map((recipe, idx) => {
                return <GridRecipe key={recipe.id} recipe={recipe} author={getAuthor(recipe.creator_id)} index={idx} expandedRecipe={expandedRecipe} setExpandedRecipe={setExpandedRecipe}></GridRecipe>;
            })}
        </S.GridPage>
    );
}

export default GridPage;