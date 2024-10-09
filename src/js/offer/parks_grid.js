import { parkCardsGrid } from "../main.js";
import parks from "../data/parks.js";

const renderParkCards = () => {
  // Render a card for each park in the `parks` array:
  parks.forEach((park) => {
    // Create a card container:
    const card = document.createElement("div");
    card.classList.add("offer__card");
    // Insert HTML code into the card container:
    card.innerHTML = `
      <!-- Card image -->
      <img class="parks__card-image" src="${park.imageSource}" alt="${park.altText}">
      <!-- Card image -->
      <!-- Card body -->
      <div class="parks__card-body">
        <!-- Title -->
        <h4 class="parks__card-title">${park.title}</h4>
        <!-- Title -->
        <!-- Info -->
        <div class="parks__card-info">
          <!-- Icon -->
          <div class="parks__card-info-icon" role="img" aria-label="Lokalizacja parku">
            <picture>
              <!-- Fallback PNG icon for older browsers -->
              <source type="image/png" srcset="./assets/icons/pin.png">
              <!-- SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="hsl(144, 73%, 52%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg> 
            </picture>
          </div>
          <!-- Icon -->
          <p class="parks__card-info-city">${park.city}, ${park.country}</p>
        </div> 
        <!-- Info -->
        <!-- Info -->
        <div class="parks__card-info">
          <!-- Icon -->
          <div class="parks__card-info-icon" role="img" aria-label="Powierzchnia parku">
            <picture>
              <!-- Fallback PNG icon for older browsers -->
              <source type="image/png" srcset="./assets/icons/square.png">
              <!-- SVG icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="hsl(144, 73%, 52%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-square">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              </svg>
            </picture>
          </div> 
          <!-- Icon -->
          <p class="parks__card-info-city">${park.area} m<sup>2</sup></p>
        </div> 
        <!-- Info -->
        <!-- Info -->
        <div class="parks__card-info">
          <!-- Description -->
          <p class="parks__card-info-description"><b>Opis: </b>${park.description}</p> 
          <!-- Description -->
        </div> 
        <!-- Info -->
        <!-- Link -->
        <div class="parks__card-link-box">
          <a href="${park.linkURL}" class="parks__card-link" target="_blank" rel="noopener">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            Zobacz na Wikipedii
          </a>
        </div>
        <!-- Link -->
      </div> 
      <!-- Card body -->
    `;

    // Append card to the container:
    parkCardsGrid.appendChild(card);
  });
}

export default renderParkCards;