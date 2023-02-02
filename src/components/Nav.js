import React, { useState } from 'react';

import styled from 'styled-components';
// import {Link} from 'react-router-dom';

const S = {};

S.Nav = styled.nav`
    height: 50px;
    width: 100%;
    padding: 2.5rem 1rem;
    margin: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
`; 


S.Button = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 15%;
    background-color: white;
`;

function Nav({handleColorIndex}) {

    const [pageBeingRendered, setPageBeingRendered] = useState("featured");

    const handleClick = (pageToRender) => {

        // If the button is clicked to switch to 
        if(pageToRender == "featured"){
            setPageBeingRendered("featured");

            handleColorIndex(2, "reverse");
        }

        if(pageToRender == "grid"){
            setPageBeingRendered("grid");

            handleColorIndex(2, "normal");
        }
    }
    
    return(
        <S.Nav className="Nav">
            <S.Button ></S.Button>
            {
                (pageBeingRendered == "featured" ? 
                    <S.Button onClick={() => handleClick("grid")} >Grid</S.Button> :
                    <S.Button onClick={() => handleClick("featured")} >Featured</S.Button>)
            }
            
            
        </S.Nav>
        // <nav>
        //     <Link to="">
        //         <li></li>
        //     </Link>
        // </nav>
    );
}


export default Nav;