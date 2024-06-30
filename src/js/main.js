import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './search-api';
import { appendGallery } from './append-gallery';

const loadButton = document.querySelector('.load-more');
const searchForm = document.querySelector('.search-form');

let page = 1;
let totalPages = 0;
let query = '';

async function fetchData() {
    const { data } = await fetchImages(query, page);
    totalPages = Math.ceil(data.totalHits / 40);
    if (data.totalHits === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'center',
      });
      return;
    }
    appendGallery(data.hits);

    if (totalPages > 1) {
      loadButton.style.display = 'block';
      if (page === totalPages) {
        loadButton.style.display = 'none';
        iziToast.error({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'center',
          timeout: 10000,
        });
      }
    }
}

loadButton?.addEventListener('click', () => {
    if (page < totalPages) {
      page += 1;
      fetchData();
    }
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector('.gallery').innerHTML = '';
    query = searchForm.elements.searchQuery?.value.trim();
    page = 1;
    loadButton.style.display = 'none';
    if (query.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Search field is empty',
        position: 'center',
      });
      return;
    }
    fetchData();
});

