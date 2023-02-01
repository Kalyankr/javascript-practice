import { API_URL } from './config.js';
import { getjson } from './helpers.js';

export const state = {
  recipe: {},
};

export const loadrecipe = async function (id) {
  try {
    const data = await getjson(`${API_URL}${id}`);
    let { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};
