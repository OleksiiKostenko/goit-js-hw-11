import { Notify } from 'notiflix';
const axios = require('axios').default;

let page = 1;
let limit = 40;
const ENDPOINT = 'https://pixabay.com/api/';
const KEY_VALUE = '33445990-2dd1c7e9397bdf317f172af9d';
const URL_OPTIONS = `image_type=photo&orientation=horizontal&safesearch=true&per_page=${limit}`;

//

function getImage(query) {
  fetch(`${ENDPOINT}?key=${KEY_VALUE}&${URL_OPTIONS}&q=${query}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .then(data => console.log(data));
}

export { getImage };
