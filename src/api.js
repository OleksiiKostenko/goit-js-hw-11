import { Notify } from 'notiflix';
import { createMarkupImageList, updateGalleryList } from './markup';


const axios = require('axios').default;

let page = 1;
let limit = 5;
const ENDPOINT = 'https://pixabay.com/api/';
const KEY_VALUE = '33445990-2dd1c7e9397bdf317f172af9d';
const URL_OPTIONS = `image_type=photo&orientation=horizontal&safesearch=true&per_page=${limit}&page=${page}`;
const inputEl = document.querySelector('#search-form');

//

// function getImage(query) {
//   fetch(`${ENDPOINT}?key=${KEY_VALUE}&${URL_OPTIONS}&q=${query}`)
//     .then(response => {
      // if (!response.ok) {
      //   throw new Error(response.status);
      // }
//       return response.json();
//     })

    // .then(({ hits }) => {
    //   if (hits.length === 0)
    //     throw new Error('No data')
    // return hits.reduce((markup,hits) => createMarkupImageList(hits) + markup,"")})
    // .then(updateGalleryList)
    // .catch(onError)
    // .finally(() => inputEl.reset())
// }




async function  getImage(query){
  try {
    const response = await axios.get(`${ENDPOINT}?key=${KEY_VALUE}&${URL_OPTIONS}&q=${query}`);
    console.log(response.data);

      if (!response.ok) {
        throw new Error(response.status)
      }

    return response.data
  } catch (error) {
   
  }
}

async function  getMoreImage(query){
  try {
    const response = await axios.get(`${ENDPOINT}?key=${KEY_VALUE}&${URL_OPTIONS}&q=${query}`);
    console.log(response.data);

      if (!response.ok) {
        throw new Error(response.status)
      }

    return response.data
  } catch (error) {
   
  }
}

export { getImage };
