import recipes from './recipes.mjs';

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const randomIndex = random(list.length);
  return list[randomIndex];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<span>${tag}</span>`).join(' ');
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;

  for (let i = 1; i <= 5; i++) {
    html += i <= rating
      ? `<span aria-hidden="true" class="icon-star">⭐</span>`
      : `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
  }

  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <section class="recipe">
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="content">
        <span class="tag">${tagsTemplate(recipe.tags)}</span>
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${ratingTemplate(recipe.rating)}
        </span>
      </div>
    </section>
  `;
}

function renderRecipes(recipeList) {
  const main = document.querySelector('main');
  main.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

function filterRecipes(query) {
  query = query.toLowerCase();

  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
    recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
  ).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.querySelector('header form input');
  const query = searchInput.value.trim();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

const searchForm = document.querySelector('header form');
searchForm.addEventListener('submit', searchHandler);

init();
