import '../scss/styles.scss';
import * as bootstrap from 'bootstrap'
import { initNavbar } from './navbar';
import { fetchDataFromAPI, fetchDataFromUserInput, stories } from './dataSource';
import { renderStories } from './stories';

// activate tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// activate toast
const toastLiveExample = document.getElementById('newPostToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
setTimeout(() => {
  toastBootstrap.show()
}, 1000);

function fetchData() {
  fetchDataFromAPI()
    .then(() => {
      initialize();
    })
}

function initialize() {
  initNavbar();
  renderStories();
}

fetchData();