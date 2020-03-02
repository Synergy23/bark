class Modal {
    constructor() {
        // set up the different elements
        this.cardButtons = document.querySelectorAll('.js-modal-open');
        this.modalCloseBtn = document.querySelectorAll('.js-modal-close');
        this.modalOuter = document.querySelector('.js-modal-outer');
        this.modalInner = document.querySelector('.js-modal-inner');
        
        // Call the different events
        this.bindEvents();
        
    }

    bindEvents() {

        // Handle the clicking of the modal open button
        Array.prototype.forEach.call(this.cardButtons, button => {

            button.addEventListener('click', this.handleButtonClick.bind(this));

        });

        // Close modal by clicking outside
        this.modalOuter.addEventListener('click', this.clickOutside.bind(this));

        // Close modal with escape key
        window.addEventListener('keydown', this.escapeModal.bind(this));

        // Close modal with inner X button
        Array.prototype.forEach.call(this.modalCloseBtn, button => {

            button.addEventListener('click', this.closeButton.bind(this));

        });

    }

    handleButtonClick() {

        if(this.modalOuter.classList.contains('is-active')) {

            this.modalOuter.classList.remove('is-active');

        } else {

            this.modalOuter.classList.add('is-active');

        }

    }

    clickOutside() {

        const isOutside = !event.target.closest('.js-modal-inner');

        if(isOutside) {

            this.closeModal();

        }

    }

    escapeModal(event) {

        if(event.key === 'Escape') {

            this.closeModal();

        }

    }

    closeButton() {

        if(this.modalOuter.classList.contains('is-active')) {

            this.closeModal();
        
        }
        
    }

    closeModal() {

        this.modalOuter.classList.remove('is-active');

    }

}

export default Modal;