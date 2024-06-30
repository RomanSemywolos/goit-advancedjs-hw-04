import axios from "axios";

export function fetchImages(query, page) {
  return axios({
    method: 'get',
    url: `https://pixabay.com/api/?` + 
    `key=44704679-3d51d8c0a578dd091a2071345` +
    `&q=${query}` +
    `&image_type=photo` +
    `&orientation=horizontal` +
    `&safesearch=true` +
    `&per_page=40` +
    `&page=${page}`,
    responseType: 'json',
  });
}