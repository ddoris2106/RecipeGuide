import React, {useState} from 'react';
import S from "./RecipeStyles";

function Recipe({recipe, author, index}) {

    const [expansion, setExpansion] = useState(false);

    const name = {};

    const getName = () => {
        // If the author data exists
        if(author){
            // Check if the author has both a name and alias
            if(author.name !== null && author.alias !== null){
                name.length = 2;

                // Order the name
                if(author.primary === "name") {
                   name.first = author.name;
                   name.last = author.alias; 
                }
                else{
                    name.first = author.alias;
                    name.last = author.name; 
                }
            }
            else{
                name.length = 1;
                author.name === null ? name.first = author.alias : name.first = author.name;
            }
        }
        else{
            name.length = 1;
            name.first = "Coming Soon";
        }
        
    };

    getName();

    let delay = index * 0.4;

    const handleClick = () => {
        setExpansion(!expansion);
    }

    return(
        <S.Recipe key={recipe.id} delay={delay} onClick={handleClick} expansion={expansion}>
            <S.ImageContainer>
                <img src={recipe.image}></img>
            </S.ImageContainer>
            <S.RecipeInfo expansion={expansion}>
                <S.Title expansion={expansion}>{recipe.name}</S.Title>
                <S.Author expansion={expansion}>
                    {
                        name.length > 1 ?
                        <><S.Name>by {name.first}</S.Name><S.Dot></S.Dot><S.Name>{name.last}</S.Name></> :
                        <S.Name>by {name.first}</S.Name>
                    }
                </S.Author>
                { 
                    expansion && 
                    <>
                        <S.Description>{recipe.description}</S.Description>
                        <S.Link>{recipe.link}</S.Link>
                    </>
                }
            </S.RecipeInfo>
        </S.Recipe>
    );
}

export default Recipe;