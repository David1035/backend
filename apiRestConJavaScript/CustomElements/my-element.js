
// primera forma - es muy manual
class myElement extends HTMLElement {
    constructor(){
        super();

    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>Hola mundo</h2>
            <div>
                <p>Soy un texto de ejemplo</p>
            </div>
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
        this.appendChild(this.getTemplate().content.cloneNode(true)) // el true significa que clona todos los elementos anidados
    }
    connectedCallback() {
        this.render();
    }
}

//convertir la clase en una etiqueta HTML
customElements.define("my-element", myElement);



