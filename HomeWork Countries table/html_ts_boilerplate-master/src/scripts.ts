/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-self-compare */
const endpoint = 'http://localhost:3004/countries';

interface Country {
  name: string,
  capital: string,
  currency: { name: string },
  language: { name: string }
}

interface Search {
  name: string,
  capital: string,
  currency: string,
  language: string,
}
const searchCriteria:Search = {
  name: '',
  capital: '',
  currency: '',
  language: '',
};
const paginationNumber = document.querySelector('.pagination-number');
const pageSize = 20;
let currentPage = 0;
const sortBy = 'name';
let sortOrder = 'dsc';

// function that render the table
const renderTable = (data: any, currPage: number, searchCriteria: Search) => {
  // Get a reference to the table element
  const table = document.querySelector('table');
  // Clear the current table
  table.innerHTML = '';
  // Create the thead element
  const tableHead = document.createElement('thead');
  table.appendChild(tableHead);

  // Create the th elements
  const nameHeading = document.createElement('th');
  nameHeading.textContent = 'Name';
  nameHeading.addEventListener('click', () => sortTable(data, 'name'));
  tableHead.appendChild(nameHeading);

  const capitalHeading = document.createElement('th');
  capitalHeading.textContent = 'Capital';
  capitalHeading.addEventListener('click', () => sortTable(data, 'capital'));
  tableHead.appendChild(capitalHeading);

  const currencyHeading = document.createElement('th');
  currencyHeading.textContent = 'Currency';
  currencyHeading.addEventListener('click', () => sortTable(data, 'currency.name'));
  tableHead.appendChild(currencyHeading);

  const languageHeading = document.createElement('th');
  languageHeading.textContent = 'Language';
  languageHeading.addEventListener('click', () => sortTable(data, 'language.name'));
  tableHead.appendChild(languageHeading);
  // Filter the data based on the search criteria
  let filteredData = data;
  if (searchCriteria) {
    filteredData = data.filter((country: Country) => (
      country.name.toLowerCase().includes(searchCriteria.name.toLowerCase())
        && country.capital.toLowerCase().includes(searchCriteria.capital.toLowerCase())
        && country.currency.name.toLowerCase().includes(searchCriteria.currency.toLowerCase())
        && country.language.name.toLowerCase().includes(searchCriteria.language.toLowerCase())
    ));
  }

  // Get the subset of countries to be displayed on the current page
  const countriesToDisplay = filteredData.slice(currPage * pageSize, (currPage + 1) * pageSize);

  // Iterate over the array of countries
  countriesToDisplay.forEach((country: Country) => {
    // Create a new row for the country
    const row = document.createElement('tr');

    // Create cells for the name, capital, currency, and language
    const nameCell = document.createElement('td');
    nameCell.textContent = country.name;
    row.appendChild(nameCell);

    const capitalCell = document.createElement('td');
    capitalCell.textContent = country.capital;
    row.appendChild(capitalCell);

    const currencyCell = document.createElement('td');
    currencyCell.textContent = country.currency.name;
    row.appendChild(currencyCell);

    const languageCell = document.createElement('td');
    languageCell.textContent = country.language.name;
    row.appendChild(languageCell);

    // Append the row to the table
    table.appendChild(row);
  });
};

const getValue = (country: Country, sortBy: string) => {
  if (sortBy === 'name') {
    return country.name;
  } if (sortBy === 'capital') {
    return country.capital;
  } if (sortBy === 'currency.name') {
    return country.currency.name;
  } if (sortBy === 'language.name') {
    return country.language.name;
  }
  return country.name;
};

const sortTable = (data:Country[], sortBy: string) => {
  // return to the beginning of the table
  currentPage = 0;
  paginationNumber.innerHTML = '1/12';
  if (sortBy === sortBy) {
    sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  } else {
    sortOrder = 'asc';
  }
  data.sort((a: Country, b: Country) => {
    if (sortOrder === 'asc') {
      return getValue(a, sortBy) > getValue(b, sortBy) ? 1 : -1;
    }
    return getValue(a, sortBy) < getValue(b, sortBy) ? 1 : -1;
  });
  renderTable(data, currentPage, searchCriteria);
};

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    // Get count of total pages
    const totalPages = Math.ceil(data.length / pageSize);
    sortTable(data, sortBy);
    if (currentPage === 0) {
      renderTable(data, currentPage, searchCriteria);
    }
    // Create input fields for name, capital, currency, and language
    const nameInput = document.querySelector<HTMLInputElement>('#search-name');
    const capitalInput = document.querySelector<HTMLInputElement>('#search-capital');
    const currencyInput = document.querySelector<HTMLInputElement>('#search-currency');
    const languageInput = document.querySelector<HTMLInputElement>('#search-language');
    const searchBtn = document.querySelector<HTMLButtonElement>('.button--search');
    searchBtn.addEventListener('click', handleSearch);

    function handleSearch() {
      console.log('handle.search');
      searchCriteria.name = nameInput.value;
      searchCriteria.capital = capitalInput.value;
      searchCriteria.currency = currencyInput.value;
      searchCriteria.language = languageInput.value;

      let filteredData = data.filter((country: Country) => country.name.toLowerCase().includes(searchCriteria.name.toLowerCase()));
      filteredData = filteredData.filter((country: Country) => country.capital.toLowerCase().includes(searchCriteria.capital.toLowerCase()));
      filteredData = filteredData.filter((country: Country) => country.currency.name.toLowerCase().includes(searchCriteria.currency.toLowerCase()));
      filteredData = filteredData.filter((country: Country) => country.language.name.toLowerCase().includes(searchCriteria.language.toLowerCase()));
      paginationNumber.innerHTML = `${currentPage + 1}/${Math.ceil(filteredData.length / 20)}`;
      renderTable(filteredData, 0, searchCriteria);
    }

    const clearButton = document.querySelector<HTMLButtonElement>('.button--clear');
    clearButton.addEventListener('click', () => {
      currentPage = 0;
      paginationNumber.innerHTML = `${currentPage + 1}/${totalPages}`;
      nameInput.value = '';
      capitalInput.value = '';
      currencyInput.value = '';
      languageInput.value = '';
      searchCriteria.name = '';
      searchCriteria.capital = '';
      searchCriteria.currency = '';
      searchCriteria.language = '';
      renderTable(data, 0, searchCriteria);
    });

    paginationNumber.innerHTML = `${currentPage + 1}/${totalPages}`;
    // Get a reference to the "load more" button
    const loadMoreButton = document.querySelector('.button--load-more');
    loadMoreButton.addEventListener('click', () => {
      if (currentPage < totalPages - 1) {
        currentPage += 1;
      }
      renderTable(data, currentPage, searchCriteria);
      paginationNumber.innerHTML = `${currentPage + 1}/${totalPages}`;
    });
    const previousButton = document.querySelector('.button--previous');
    previousButton.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage -= 1;
      }
      renderTable(data, currentPage, searchCriteria);
      paginationNumber.innerHTML = `${currentPage + 1}/${totalPages}`;
    });
  });
