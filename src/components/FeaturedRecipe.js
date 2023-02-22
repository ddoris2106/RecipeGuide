import React, {useState} from 'react';
import S from "./RecipeStyles";
import getName from '../utils/getAuthorName';

function FeaturedRecipe({recipe, author, index}) {

    const [expansion, setExpansion] = useState(false);

    const name = getName(author);

    let delay = index * 0.4;

    const handleClick = () => {
        setExpansion(!expansion);
    }

    return(
        <S.FavoriteRecipe key={recipe.id} delay={delay} onClick={handleClick} expansion={expansion}>
            <S.FavoriteImageContainer>
                <img src={recipe.image} alt={`${recipe.name}`}
                ></img>
            </S.FavoriteImageContainer>
            <S.FavoriteRecipeInfo expansion={expansion}>
                <S.FavoriteTitle expansion={expansion}>{recipe.name}</S.FavoriteTitle>
                <S.FavoriteAuthor expansion={expansion}>
                    {
                        name.length > 1 ?
                        <><span>by {name.first}</span> | <span>{name.last}</span></> :
                        <span>by {name.first}</span>
                    }
                </S.FavoriteAuthor>
                { 
                    expansion && 
                    <>
                        <S.Description>{recipe.description}</S.Description>
                        <S.Link
                            href={recipe.link}
                            target="blank"
                        >Link to Recipe</S.Link>
                    </>
                }
            </S.FavoriteRecipeInfo>
        </S.FavoriteRecipe>
    );
}

export default FeaturedRecipe;