import React from 'react';
import styled from 'styled-components';


const S = {};

S.Recipe = styled.div`
    width: 100px;
    height: 200px;
`;

function Recipe({recipe}) {

    const handleChange = e => {
        console.log(e);
    }

    return(
        <S.Recipe onChange={(e) => handleChange(e)}>
            {recipe}
        </S.Recipe>
    )
}

export default Recipe;