import likesListener from './likes.js';

const mealList = document.getElementById('meal-list');

export default function renderRecipes(recipe, appId) {
  console.log('render', appId);

  const li = document.createElement('li');
  li.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('meal-img');
  img.src = recipe.strMealThumb;
  img.alt = 'Image of food';

  const h3 = document.createElement('h3');
  h3.innerHTML = `<h3>${recipe.strMeal}</h3>
                <span><button class='likesBtn'><i class="fa fa-heart-o"></i></button></span>`;
  h3.classList.add('meal-h3');

  const likesValue = document.createElement('div');
  likesValue.classList.add('likes-value');

  const commentBtn = document.createElement('button');
  commentBtn.innerHTML = 'Comments';
  commentBtn.type = 'submit';
  commentBtn.id = 'modalComments';
  commentBtn.classList.add('comment-btn');

  li.append(img, h3, likesValue, commentBtn);
  mealList.append(li);

  likesListener(recipe, appId);
}