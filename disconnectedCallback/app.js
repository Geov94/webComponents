class MyCustomElement extends HTMLElement {

    constructor(){
        super();
        console.log("hola de parte del constructor-memoria");

    }
    connectedCallback(){
        console.log("hola desde el DOM");
    }

    disconnectedCallback(){
        console.log("adios del DOM");
    }

}

customElements.define("my-custom-element",MyCustomElement);

document.querySelector("my-custom-element").remove()