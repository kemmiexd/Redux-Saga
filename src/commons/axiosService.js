import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    this.instance = instance;
  }

  handleSuccess = (response) => response

  handleError = (error) => Promise.reject(error);

  get(url) {
    return this.instance.get(url);
  }
}

export default new AxiosService();
