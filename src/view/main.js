import restautants from "../data/DATA.json";

const main = () => {
  const renderRestaurants = () => {
    restautants.restaurants.forEach((restaurant) => {
      const restaurantCard = document.querySelector(".posts");
      restaurantCard.innerHTML += `
      <article class="post-item">
      <img class="post-item__thumbnail"
           src="${restaurant.pictureId}"
           alt="Gambar restoran">
      <div class="post-item__content">
        <p class="post-item__date">${restaurant.city}
        </p>
        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
        <h2 class="post-item__rating">Rating: ${restaurant.rating}</h2>
        <p class="post-item__description">${restaurant.description}</p>
      </div>
    </article>`;
    });
  };
  renderRestaurants();
};
export default main;
