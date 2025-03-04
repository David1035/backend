
// primera forma - es muy manual
class myElement extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ node: "open" }) // se debe tener abierto

    }
    static get observedAttibutes() {
        return ['title', 'parrafo', 'img']
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if(attr === 'title'){
            this.title = newVal; 
        } else if(attr === 'parrafo'){
            this.parrafo = newVal;
        } else if(attr === 'img'){
            this.img = newVal
        }
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section>
            <h2>
                <slot name="title"></slot>
            </h2>
            <div>
                <p>
                    <slot name="parrafo"></slot>
                </p>
            </div>
        </section>
        ${this.getStyles()}
        `;

        return template;
    }
    getStyles(){
        return `
            <style>
                :host {
                    display:inline-block;
                    width: 100%;
                    min-width: 450px;

                }
                h2 {
                    color: red;
                }
            </style>
        `;
    } [``]
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)) // el true significa que clona todos los elementos anidados
    }
    connectedCallback() {
        this.render();
    }
}

//convertir la clase en una etiqueta HTML
customElements.define("my-element", myElement);