const displayPopup = (meal) => {
  const popup = document.querySelector('.popup');
  popup.style.display = 'block';
  popup.innerHTML = `
    <i class="fa fa-times close" aria-hidden="true"></i>
    <img class="popup-img" src="${meal.strMealThumb}" alt="">
    <h1 class="food-name">${meal.strMeal}</h1>
    <ul class="food-info">
    <li>Area : ${meal.strArea}</li>
    <li>Tags : ${meal.strTags}</li>
    </ul
  `;
  const closeButton = popup.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

export default displayPopup;