import { parkCardsGrid, parkCardTemplate } from "../main.js";
import parks from "../data/parks.js";

const renderParkCards = () => {
  // Render a card for each park in the `parks` array:
  parks.forEach((park) => {
    // Get a copy of the HTML document fragment inside the `template` tag:
    const cardDocumentFragment = parkCardTemplate.content.cloneNode(true);
    // Get the `parks__card` element from the HTML document fragment:
    const card = cardDocumentFragment.querySelector(".parks__card");
    // Modify the content of the template card:
    card.querySelector("source").setAttribute("srcset", park.imageSource);
    card.querySelector(".parks__card-image").setAttribute("src", park.fallbackImageSource);
    card.querySelector(".parks__card-image").setAttribute("alt", park.altText);
    card.querySelector(".parks__card-title").textContent = park.title;
    card.querySelector(".parks__card-info-city").textContent = `${park.city}, ${park.country}`;
    card.querySelector(".parks__card-info-area").innerHTML = `${park.area} m<sup>2</sup>`;
    card.querySelector(".parks__card-info-description").innerHTML = `<b>Opis: </b>${park.description}`;
    card.querySelector(".parks__card-link").setAttribute("href", park.linkURL);
    // Append card to the container:
    parkCardsGrid.appendChild(card);
  });
}

export default renderParkCards;