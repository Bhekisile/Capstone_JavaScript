import likesListener from './likes.js';
import displayPopup from './popup.js';

const mealList = document.getElementById('meal-list');

export default function renderRecipes(recipe, appId) {
  const li = document.createElement('li');
  li.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('meal-img');
  img.src = recipe.strMealThumb;
  img.alt = 'Image of food';

  const h4 = document.createElement('h4');
  h4.innerHTML = `<h4>${recipe.strMeal}</h4>
                <span><button class='likesBtn'><i class="fa fa-heart-o"></i></button></span>`;
  h4.classList.add('meal-h4');

  const likesValue = document.createElement('div');
  likesValue.classList.add('likes-value');
  likesValue.textContent = `${recipe.likes} likes`;

  const commentBtn = document.createElement('button');
  commentBtn.innerHTML = 'Comments';
  commentBtn.type = 'submit';
  commentBtn.id = 'modalComments';
  commentBtn.classList.add('comment-btn');

  li.append(img, h4, likesValue, commentBtn);
  mealList.append(li);

  likesListener(recipe, appId);

  commentBtn.addEventListener('click', () => {
    displayPopup(recipe);
  });
}