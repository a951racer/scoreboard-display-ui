
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

export const apiConfig = {
    apiUrl: apiUrl,
    gameUrl: apiUrl + '/game',
  };