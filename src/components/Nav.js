import React, { useState } from 'react';

import styled from 'styled-components';
import {Link} from 'react-router-dom';

const S = {};

S.Nav = styled.nav`
    position: fixed;
    max-height: 7%;
    width: 100%;
    padding: 2.5rem 1rem;
    margin: 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;

    z-index: 5;
`; 


S.Button = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 15%;
    border: none;

    background-image: url(${props => props.img});
    background-size: 90%;
    background-position: center center;
    background-color: transparent;
    background-repeat: no-repeat;

    &:hover{
        background-color: rgba(242, 240, 242, 0.65);
        border: 0.05rem solid var(--text-black);
        box-shadow: 0.05rem 0.05rem 0.25rem var(--text-black);
    }
`;

function Nav({handleColorIndex}) {

    const [pageBeingRendered, setPageBeingRendered] = useState("featured");

    const handleClick = (pageToRender) => {

        // If the button is clicked to switch to 
        if(pageToRender === "featured"){
            setPageBeingRendered("featured");

            handleColorIndex(2, "reverse");
        }

        if(pageToRender === "grid"){
            setPageBeingRendered("grid");

            handleColorIndex(2, "normal");
        }
    }
    
    return(
        <S.Nav className="Nav">
            {/* <S.Button ></S.Button> */}
            {
                (pageBeingRendered === "featured" ? 
                    <Link to="/grid">
                        <S.Button 
                            onClick={() => handleClick("grid")} 
                            img="./icons/grid-icon.svg"
                        ></S.Button>
                    </Link> :
                    <Link to="/">
                        <S.Button 
                            onClick={() => handleClick("featured")} 
                            img="./icons/star-icon.svg"
                        ></S.Button>
                    </Link>)
            }
            
        </S.Nav>
    );
}


export default Nav;