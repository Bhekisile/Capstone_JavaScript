import './index.css';
import renderRecipes from './modules/displayMeals.js';
import countMeals from './modules/countMeals.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

const initializeApp = async (callback) => {
  const response = await fetch(`${apiUrl}apps/`, {
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to initialize the app');
  }
  const data = await response.text();
  const appId = data.trim();
  //   console.log(appId);
  if (callback) {
    callback(appId);
  }
  //   };

  fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s')
    .then((response) => response.json())
    .then((data) => {
      const { meals } = data;

      meals.forEach((meal) => {
        countMeals(meals);
        renderRecipes(meal, appId);
      });
    });
};
initializeApp();