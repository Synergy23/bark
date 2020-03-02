class Header {
    constructor() {
        this.header = document.querySelector('.js-header');
        this.nav = document.querySelector('.js-nav');
        this.toggle = document.querySelectorAll('.js-toggle');
        this.body = document.querySelector('body');
        this.bindEvents();
    }

    bindEvents() {

        // Handle the clicking of the toggle button
        Array.prototype.forEach.call(this.toggle, toggle => {

            toggle.addEventListener('click', this.handleToggleClick.bind(this));

        });

    }

    handleToggleClick(event) {

        if(this.nav.classList.contains('is-active')) {

            this.nav.classList.remove('is-active');
            event.target.classList.remove('is-active');
            this.body.classList.remove('is-active');

        } else {

            this.nav.classList.add('is-active');
            event.target.classList.add('is-active');
            this.body.classList.add('is-active');

        }

    }

}

export default Header;