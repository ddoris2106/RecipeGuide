import React, {useState, useEffect} from 'react';
import S from './RecipeStyles';
import getName from '../utils/getAuthorName';

function GridRecipe({recipe, author, index, expandedRecipe, setExpandedRecipe}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const name = getName(author);

    const handleExpansion = () => {
        index === expandedRecipe ?
        setExpandedRecipe(null) :
        setExpandedRecipe(index);
    }
    
    useEffect(() => {
        index === expandedRecipe ? 
        setIsExpanded(true) :
        setIsExpanded(false);
    }, [expandedRecipe])
    return (
        <S.GridRecipe onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} isHovered={isHovered} isExpanded={isExpanded} onClick={handleExpansion} className={isExpanded === true ? "gridRecipe expandedRecipe" : "gridRecipe"} >
            <S.GridRecipeImage
                src={recipe.image}
                alt={recipe.name}
                isExpanded={isExpanded}
            ></S.GridRecipeImage>
            {
                recipe.favorite === true && 
                <S.FavoriteIcon className="favoriteRecipeIcon"></S.FavoriteIcon>
            }
            {
                isExpanded === true &&
                <>
                    <S.GridTitle>{recipe.name}</S.GridTitle>
                    <S.GridAuthor>
                    {
                        name.length > 1 ?
                        <><span>by {name.first}</span> | <span>{name.last}</span></> :
                        <span>by {name.first}</span>
                    }
                    </S.GridAuthor>
                    <S.Description>{recipe.description}</S.Description>
                    <S.Link
                        href={recipe.link}
                        target="blank"
                    >Link to Recipe</S.Link>
                </>
            }

        </S.GridRecipe>
    );
}

export default GridRecipe;