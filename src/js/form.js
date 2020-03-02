class Forms {
    constructor(element) {
        // form
        this.inputs = document.querySelectorAll(".js-input");
        this.email = document.querySelector(".js-validate");
        this.validationMsg = document.querySelector(".c-form__validation-msg");
        this.submit = document.querySelector(".js-submit");
        this.tick =
            '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.06 60"><path d="M78.17 11.35l-44.89 46.7a6.17 6.17 0 01-9 0l-22.4-23.5a6.83 6.83 0 010-9.4 6.16 6.16 0 019 0l18 18.8L69.27 2a6.17 6.17 0 019 0 6.93 6.93 0 01-.1 9.35z" fill="#0f803f" fill-rule="evenodd"/></svg>';
        this.cross =
            '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.53 38.53"><path d="M.88.88a3 3 0 014.24 0L19.26 15 33.41.88a3 3 0 114.24 4.24L23.51 19.26l14.14 14.15a3 3 0 11-4.24 4.24L19.26 23.51 5.12 37.65a3 3 0 11-4.24-4.24L15 19.26.88 5.12a3 3 0 010-4.24z" fill="#d4264a"/></svg>';
        this.bindEvents();
    }

    bindEvents() {
        this.handleState();
        this.testEmail();
        Array.prototype.forEach.call(this.inputs, input => {
            this.email.addEventListener("blur", () => {
                this.validateEmail();
            });
        });
    }

    handleState() {
        Array.prototype.forEach.call(this.inputs, input => {
            input.addEventListener("blur", () => {
                if (input.value === "") {
                    input.classList.remove("has-value");
                } else {
                    input.classList.add("has-value");
                }
            });
        });
    }

    testEmail(email) {
        const regularExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExp.test(email);
    }

    validateEmail() {
        if (this.testEmail(this.email.value)) {
            this.submit.removeAttribute("disabled");
            this.validationMsg.innerHTML = this.tick;
        } else {
            this.submit.setAttribute("disabled", true);
            this.validationMsg.innerHTML = this.cross;
        }
        return false;
    }
}

export default Forms;
