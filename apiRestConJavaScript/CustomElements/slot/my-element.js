
// primera forma - es muy manual
class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ node: "open" }) // se debe tener abierto

    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>
                <slot></slot>
            </h2>
        </section>
        ${this.getStyles()}
        `;

        return template;
    }
    getStyles(){
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)) // el true significa que clona todos los elementos anidados
    }
    connectedCallback() {
        this.render();
    }
}

//convertir la clase en una etiqueta HTML
customElements.define("my-element", myElement);