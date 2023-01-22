/* eslint-disable no-use-before-define */
import axios from 'axios';

const endpoint = 'http://localhost:3004/animals';

interface Animal {
  id: number;
  image: string;
  name: string;
  description: string;
}

const createCard = (animal: Animal) => {
  const card = document.createElement('div');
  card.classList.add('card', `card-${animal.id}`);

  const image = document.createElement('img');
  image.src = animal.image;
  image.alt = animal.name;

  const name = document.createElement('p');
  name.classList.add('name');
  name.innerText = `Name: ${animal.name}`;

  const description = document.createElement('p');
  description.classList.add('description');
  description.innerText = `Description: ${animal.description}`;

  card.append(image, name, description);

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('button', 'is-danger');
  deleteBtn.innerHTML = 'Delete';
  deleteBtn.addEventListener('click', async () => {
    try {
      await axios.delete(`http://localhost:3004/animals/${animal.id}`);
      refreshCards();
    } catch (error) {
      console.error(error);
    }
  });

  const editBtn = document.createElement('button');

  editBtn.classList.add('button', 'is-info');
  editBtn.innerHTML = 'Edit';
  editBtn.addEventListener('click', async () => {
    const editDialog = document.createElement('div');
    editDialog.classList.add('edit-dialog', 'control');
    editBtn.disabled = true;
    const imageUrlInput = document.createElement('input');
    imageUrlInput.placeholder = 'Image URL';
    imageUrlInput.classList.add('input', 'is-small');
    imageUrlInput.value = animal.image;

    const nameInput = document.createElement('input');
    nameInput.value = animal.name;

    const descriptionInput = document.createElement('input');
    descriptionInput.value = animal.description;

    const updateBtn = document.createElement('button');
    updateBtn.innerHTML = 'Submit';
    updateBtn.classList.add('button', 'is-info');
    updateBtn.innerHTML = 'Update';
    updateBtn.style.display = 'block';
    updateBtn.style.width = '100%';
    updateBtn.addEventListener('click', () => {
      const newImageUrl = imageUrlInput.value;
      const newName = nameInput.value;
      const newDescription = descriptionInput.value;

      axios.put(`${endpoint}/${animal.id}`, {
        image: newImageUrl,
        name: newName,
        description: newDescription,
      }).then(() => {
        refreshCards();
        card.removeChild(editDialog);
      });
    });

    editDialog.appendChild(imageUrlInput);
    editDialog.appendChild(nameInput);
    editDialog.appendChild(descriptionInput);
    editDialog.appendChild(updateBtn);

    card.appendChild(editDialog);
  });
  card.appendChild(deleteBtn);
  card.appendChild(editBtn);

  return card;
};

const refreshCards = () => {
  axios.get(endpoint)
    .then((response) => {
      const { data } = response;
      const cards = document.querySelector<HTMLDivElement>('.cards');
      while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
      }
      data.forEach((animal: Animal) => {
        cards.appendChild(createCard(animal));
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

refreshCards();

let dialog = document.querySelector<HTMLDivElement>('.create-dialog');

if (!dialog) {
  dialog = document.createElement('div');
  dialog.id = 'create-dialog';
  dialog.classList.add('dialog', 'create-dialog');
  dialog.style.display = 'none';

  const imageUrlInput = document.createElement('input');
  imageUrlInput.placeholder = 'Image URL';

  const nameInput = document.createElement('input');
  nameInput.placeholder = 'Name';

  const descriptionInput = document.createElement('input');
  descriptionInput.placeholder = 'Description';

  const submitBtn = document.createElement('button');
  submitBtn.innerHTML = 'Submit';
  submitBtn.classList.add('button', 'is-success');
  submitBtn.innerHTML = 'Submit';
  submitBtn.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value;
    const name = nameInput.value;
    const description = descriptionInput.value;

    axios.post(endpoint, {
      image: imageUrl,
      name,
      description,
    }).then(() => {
      refreshCards();
      dialog.style.display = 'none';
    });
  });

  dialog.appendChild(imageUrlInput);
  dialog.appendChild(nameInput);
  dialog.appendChild(descriptionInput);
  dialog.appendChild(submitBtn);

  const dialogRow = document.querySelector<HTMLDivElement>('.dialog-row');

  dialogRow.appendChild(dialog);
}

const createBtn = document.querySelector<HTMLButtonElement>('.create-button');
createBtn.classList.add('button', 'is-primary');
createBtn.addEventListener('click', () => {
  if (dialog.style.display === 'none') {
    dialog.style.display = 'block';
  } else {
    dialog.style.display = 'none';
  }
});
