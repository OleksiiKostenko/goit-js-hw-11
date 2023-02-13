const axios = require('axios').default;

export default class ImageApi {
  constructor() {
    this.page = 1;
    this.perPage = 40;
    this.searchQuery = '';
    this.ENDPOINT = 'https://pixabay.com/api/';
    this.KEY_VALUE = '33445990-2dd1c7e9397bdf317f172af9d';
    this.URL_OPTIONS =
      'image_type=photo&orientation=horizontal&safesearch=true';
  }
  async getImage() {
    const response = await axios(
      `${this.ENDPOINT}?key=${this.KEY_VALUE}&${this.URL_OPTIONS}&per_page=${this.perPage}&page=${this.page}&q=${this.searchQuery}`
    );

    console.log(response.data);
    this.incrementPage();
    return response.data;
  }

  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }

}
