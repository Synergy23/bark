import Glide from '@glidejs/glide';

class Carousel {

    constructor() {
        this.carousel = document.querySelectorAll('.js-carousel');

        this.handleCarousel();
    }

    handleCarousel() {

        const options = {
            type: 'carousel',
            perView: 3,
            gap: 34,
            focusAt: 'center',
            startAt: 0,
            peek: 0,
            breakpoints: {
                1120: {
                    perView: 2
                },
                740: {
                    perView: 1
                }
            }
        }

        new Glide('.glide', options).mount();

    }

}

export default Carousel;