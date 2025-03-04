class myCustomElement extends HTMLElement {
    constructor(){
        super();
        console.log('hola desde el constructor')
    }
    connectedCallback(){
        console.log('Hola desde el DOM')
    }
    disconnectedCallback(){
        console.log('Adios del DOM')
    }
}

customElements.define("my-custome-element", myCustomElement)

document.querySelector("my-custome-element").remove()