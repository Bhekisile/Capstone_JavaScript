const mealCounter = document.getElementById('mealCounter');

export default function countMeals(meals) {
  if (mealCounter !== null) {
    mealCounter.innerHTML = `<p>Meals(${meals.length})</p>`;
  }
}