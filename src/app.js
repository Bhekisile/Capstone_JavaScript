import './index.css';
import renderRecipes from './modules/displayMeals.js';
import countMeals from './modules/countMeals.js';
import { handleSaveLikes } from './modules/handleLikes.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const initializeApp = async () => {
  const response = await fetch(`${apiUrl}apps/`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to initialize the app');
  }
  const data = await response.text();
  const appId = data.trim();

  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
    .then((response) => response.json())
    .then((data) => {
      const { meals } = data;

      meals.forEach((meal) => {
        const likesCount = localStorage.getItem(meal.idMeal);
        if (likesCount !== null) {
          meal.likes = parseInt(likesCount, 10);
        } else {
          meal.likes = 0;
        }

        countMeals(meals);
        renderRecipes(meal, appId);
      });
      handleSaveLikes(appId);
    });
};

initializeApp();