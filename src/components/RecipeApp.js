import React, { useEffect, useState } from 'react';
import styled, {css, keyframes} from 'styled-components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Nav from './Nav';
import FeaturedPage from './FeaturedPage';
import GridPage from './GridPage';



// Function to set up keyframe animation to move the background
const transitionBackgroundTest = (props) => {

    // Transition background forwards
    const transitionBackground = keyframes`
        0%{
            background-image: linear-gradient(${props.fromColor1} 15%, ${props.fromColor2} 70%);
        }
        5%{
            background-image: linear-gradient(${props.fromColor1} 12%, ${props.fromColor2} 60%);
        }
        15%{
            background-image: linear-gradient(${props.fromColor1} 9%, ${props.fromColor2} 50%);
        }
        25%{
            background-image: linear-gradient(${props.fromColor1} 5%, ${props.fromColor2} 40%);
        }
        30%{
            background-image: linear-gradient(${props.fromColor1} 2.5%, ${props.fromColor2} 35%);
        }
        35%{
            background-image: linear-gradient(${props.fromColor1} 0%, ${props.fromColor2} 30%);
        }
        36%{
            background-image: linear-gradient(${props.fromColor2} 25%, ${props.toColor1} 100%)
        }
        40%{
            background-image: linear-gradient(${props.fromColor2} 10%, ${props.toColor1} 95%);
        }
        50%{
            background-image: linear-gradient(${props.fromColor2} 5%, ${props.toColor1} 90%);
        }
        60%{
            background-image: linear-gradient(${props.toColor1} 85%, ${props.toColor2} 100%);
        }
        75%{
            background-image: linear-gradient(${props.toColor1} 60%, ${props.toColor2} 95%);
        }
        80%{
            background-image: linear-gradient(${props.toColor1} 45%, ${props.toColor2} 90%);
        }
        90%{
            background-image: linear-gradient(${props.toColor1} 35%, ${props.toColor2} 80%);
        }
        100%{
            background-image: linear-gradient(${props.toColor1} 15%, ${props.toColor2} 90%);
        }
    `;

    // Transition background backwards
    const transitionBackgroundBack = keyframes`
        0%{
            background-image: linear-gradient(${props.toColor1} 15%, ${props.toColor2} 90%);
        }
        5%{
            background-image: linear-gradient(${props.toColor1} 35%, ${props.toColor2} 85%);
        }
        15%{
            background-image: linear-gradient(${props.toColor1} 45%, ${props.toColor2} 80%);
        }
        25%{
            background-image: linear-gradient(${props.toColor1} 60%, ${props.toColor2} 85%);
        }
        35%{
            background-image: linear-gradient(${props.toColor1} 85%, ${props.toColor2} 90%);
        }
        40%{
            background-image: linear-gradient(${props.fromColor2} 0%, ${props.toColor1} 95%);
        }
        50%{
            background-image: linear-gradient(${props.fromColor1} 3%, ${props.fromColor2} 30%);
        }
        65%{
            background-image: linear-gradient(${props.fromColor1} 5%, ${props.fromColor2} 40%);
        }
        80%{
            background-image: linear-gradient(${props.fromColor1} 7%, ${props.fromColor2} 50%);
        }
        90%{
            background-image: linear-gradient(${props.fromColor1} 10%, ${props.fromColor2} 60%);
        }
        100%{
            background-image: linear-gradient(${props.fromColor1} 15%, ${props.fromColor2} 70%);
        }
    `;

    let animName = props.direction === "normal" ? transitionBackground : transitionBackgroundBack;


    return css`
        animation: ${animName}; 
        animation-timing-function: ease;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    `;
} 


// Function to set up keyframe animation to move the background

// Structure Taken From:
// https://stackoverflow.com/questions/72221862/passing-a-direction-prop-into-styled-components-keyframe-component
// https://github.com/styled-components/styled-components/issues/397
const transitionBackground = (props) => {

    // Transition background forwards
    const transitionBackground = keyframes`
        0%{
            background-image: linear-gradient(${props.fromColor1} 15%, ${props.fromColor2} 100%, ${props.toColor1} 150%);
        }
        15%{
            background-image: linear-gradient(${props.fromColor1} 7%, ${props.fromColor2} 70%, ${props.toColor1} 137%);
        }
        25%{
            background-image: linear-gradient(${props.fromColor1} 0%, ${props.fromColor2} 50%, ${props.toColor1} 125%);
        }
        50%{
            background-image: linear-gradient(${props.fromColor2} 0%, ${props.toColor1} 100%, ${props.toColor2} 150%);
        }
        75%{
            background-image: linear-gradient(${props.toColor1} 75%, ${props.toColor2} 125%);
        }
        85%{
            background-image: linear-gradient(${props.toColor1} 40%, ${props.toColor2} 100%);
        }   
        100%{
            background-image: linear-gradient(${props.toColor1} 15%, ${props.toColor2} 70%);
        }
    `;

    // Transition background backwards
    const transitionBackgroundBack = keyframes`
        0%{
            background-image: linear-gradient(${props.toColor1} 15%, ${props.toColor2} 70%);
        }
        15%{
            background-image: linear-gradient(${props.toColor1} 40%, ${props.toColor2} 100%);
        }
        25%{
            background-image: linear-gradient(${props.toColor1} 75%, ${props.toColor2} 125%);
        }
        50%{
            background-image: linear-gradient(${props.fromColor2} 0%, ${props.toColor1} 100%, ${props.toColor2} 150%);
        }
        75%{
            background-image: linear-gradient(${props.fromColor1} 0%, ${props.fromColor2} 50%, ${props.toColor1} 125%);
        }
        85%{
            background-image: linear-gradient(${props.fromColor1} 7%, ${props.fromColor2} 70%, ${props.toColor1} 137%);
        }
        100%{
            background-image: linear-gradient(${props.fromColor1} 15%, ${props.fromColor2} 70%);
        }
    `;

    let animName = props.direction === "normal" ? transitionBackground : transitionBackgroundBack;


    return css`
        animation: ${animName}; 
        animation-timing-function: ease-out;
        animation-duration: 1.12s;
        animation-fill-mode: forwards;
    `;
} 

// https://medium.com/inturn-eng/naming-styled-components-d7097950a245
const S = {};

S.RecipeApp = styled.div`
    --fromColor1: ${props => props.fromColor1};
    --fromColor2: ${props => props.fromColor2};
    --toColor1: ${props => props.toColor1};
    --toColor2: ${props => props.toColor2};

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-size: cover;
    // overflow: hidden;

    ${props => transitionBackground(props)}


    // background-image: linear-gradient(var(--toColor1) 15%, var(--toColor2) 70%);
    // transition: background-image linear 0.25s;

`;


// const styles = css``;

// transitionBackground = ${props => transitionBackgroundfc(props)};
    // animation: transitionBackground 0.75s ease-in-out forwards;

function RecipeApp() {

    const [isLoading, setIsLoading] = useState(true);
    const [colorIndex, setColorIndex] = useState(0);
    const [direction, setDirection] = useState("normal");
    const colorWheel = ["var(--bg-dark-purple)", "var(--bg-dark-purple)", "var(--bg-dark-purple)", "var(--bg-dark-pink)", "var(--bg-white)", "var(--bg-light-purple)"];

    const handleColorIndex = (index, dir) => {
        setIsLoading(true);
        setDirection(dir);
        setColorIndex(index);
    }


    useEffect(() => {
        // console.log(`State is now: ${isLoading}`);
        // Everytime the page is loading, automatically change the state to false after it is loaded
        setTimeout(() => {
            if(isLoading) {
                setIsLoading(false);
            }
        }, 750)
    }, [isLoading]);

    return(
        <Router>
            <S.RecipeApp 
                className={`App ${isLoading ? "pageLoading" : ""}`} 
                fromColor1={colorWheel[colorIndex]} 
                fromColor2={colorWheel[colorIndex + 1]} 
                toColor1={colorWheel[colorIndex + 2]} 
                toColor2={colorWheel[colorIndex + 3]} 
                direction={direction} 
            >
                <Nav handleColorIndex={handleColorIndex} />
                <Routes> 
                    <Route path="/" exact element={<FeaturedPage />} />
                    <Route path="/grid" element={<GridPage />} />
                </Routes>
            </S.RecipeApp>
        </Router>
    );
}


export default RecipeApp;