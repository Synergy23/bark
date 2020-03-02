import '../scss/main.scss';
import Header from './header.js';
import Modal from './modal.js';
import Carousel from './carousel.js';
import Form from './form.js';

document.addEventListener("DOMContentLoaded", () => {
    // Handler when the DOM is fully loaded
    let header = new Header();
    let modal = new Modal();
    let carousel = new Carousel();
    let form = new Form();
});

