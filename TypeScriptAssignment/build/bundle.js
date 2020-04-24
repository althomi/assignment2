(function () {
    'use strict';

    const firstDefaultForm = "First default form successfull";
    class DefaultForm extends HTMLElement {
        constructor() {
            super();
        }
    }

    console.log(firstDefaultForm);
    customElements.define('my-beispiel', DefaultForm);

}());
