/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Character, ApiResponse } from './interfaces';

function elem(tagName: string) {
  return document.createElement(tagName);
}

function displayData(data: ApiResponse) {
  const characters = data.results;
  characters.forEach((character: Character) => {
    const image = <HTMLImageElement>elem('img');
    const card = elem('div');
    const name = <HTMLAnchorElement>elem('a');
    const statusContainer = elem('div');
    const status = elem('p');
    const dot = elem('div');
    const origin = elem('p');
    const cardContainer = document.querySelector('.card-container');

    let firstEpisodeTitle = '';
    let lastEpisodeTitle = '';
    image.src = character.image;
    name.href = character.url;
    name.innerText = character.name;
    fetch(character.episode[0])
      .then((res) => res.json())
      .then((epData) => {
        firstEpisodeTitle = epData.name;
        const firstSeen = elem('p');
        firstSeen.innerText = `First seen in: ${firstEpisodeTitle}`;
        card.appendChild(firstSeen);
      });
    fetch(character.episode[character.episode.length - 1])
      .then((res) => res.json())
      .then((epData) => {
        lastEpisodeTitle = epData.name;
        const lastSeen = elem('p');
        lastSeen.innerText = `Last seen in: ${lastEpisodeTitle}`;
        card.appendChild(lastSeen);
      });

    statusContainer.classList.add('status-container');
    status.innerText = `${character.status} - ${character.species}`;
    dot.classList.add('dot');
    origin.innerText = `Origin: ${character.origin.name}`;

    card.classList.add('card');
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(statusContainer);
    statusContainer.appendChild(dot);
    statusContainer.appendChild(status);
    card.appendChild(origin);
    cardContainer.appendChild(card);
    switch (character.status) {
      case 'Alive':
        dot.classList.add('dot--alive');
        break;
      case 'Dead':
        dot.classList.add('dot--dead');
        break;
      default:
        dot.classList.add('dot--unknown');
    }
  });
}

fetch('https://rickandmortyapi.com/api/character/')
  .then((res) => res.json())
  .then(displayData);

const loadMoreBtn = document.querySelector<HTMLButtonElement>('.btn__load-more-btn');
let nextPage = 2;
loadMoreBtn.addEventListener('click', () => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${nextPage}`)
    .then((res) => res.json())
    .then((data) => {
      displayData(data);
      if (nextPage === data.info.pages) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerText = "That's all";
      }
      nextPage += 1;
    });
});
