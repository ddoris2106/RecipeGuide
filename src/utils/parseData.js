import data from '../recipes.json';

// Returns all recipes
export const getAllRecipes = () => data.recipes;

// Return array of recipes that are a favorite
export const getFavoriteRecipes = () => data.recipes.filter(recipe => recipe.favorite);

// Takes in an authors id and returns the authors information
export const getAuthor = selectedId => data.authors.find(author => author.id === selectedId);
