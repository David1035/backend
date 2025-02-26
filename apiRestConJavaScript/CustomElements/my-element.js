const template = document.createElement('div');
template.innerHTML = `
<style> 
    p {
    color: blue;
    }
</style>
<p> hola mundo 3 </p>

<h1> un titulo </h1>
`

// primera forma - es muy manual
class myElement extends HTMLElement {
    constructor(){
        super();
        
        this.p = document.createElement('p')
    }
    connectedCallback() {
        this.p.textContent = 'Hola Mundo Probando Feliz'
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

//convertir la clase en una etiqueta HTML
customElements.define("my-element", myElement);

