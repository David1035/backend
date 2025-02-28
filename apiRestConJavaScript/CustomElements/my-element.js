// const template = document.createElement('div');
// template.innerHTML = `
// <style> 
//     p {
//     color: blue;
//     }
// </style>
// <p> hola mundo 3 </p>

// <h1> un titulo </h1>
// `

// // primera forma - es muy manual
// class myElement extends HTMLElement {
//     constructor(){
//         super();
        
//         this.p = document.createElement('p')
//     }
//     connectedCallback() {
//         this.p.textContent = 'Hola Mundo Probando Feliz'
//         this.appendChild(this.p)
//         this.appendChild(template)
//     }
// }

// //convertir la clase en una etiqueta HTML
// customElements.define("my-element", myElement);



const productos = [
    { name: "Laptop Gamer", price: 1200 },
    { name: "Mouse Inalámbrico", price: 25 },
    { name: "Monitor 24''", price: 199 },
    { name: "Teclado Mecánico", price: 75 },
    { name: "Auriculares Bluetooth", price: 50 }
];

class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        const template = document.createElement("template");
        template.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 5px;
                    text-align: center;
                    font-family: Arial, sans-serif;
                    width: 200px;
                    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
                    margin: 10px;
                }
                .card h2 {
                    font-size: 18px;
                    color: darkblue;
                }
                .card p {
                    font-size: 16px;
                    font-weight: bold;
                }
                .card button {
                    background: green;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    cursor: pointer;
                    border-radius: 5px;
                }
                .card button:hover {
                    background: darkgreen;
                }
            </style>
            <div class="card">
                <h2></h2>
                <p></p>
                <button>Comprar</button>
            </div>
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector("h2").textContent = this.getAttribute("name");
        this.shadowRoot.querySelector("p").textContent = `Precio: $${this.getAttribute("price")}`;
        
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            alert(`¡Has comprado ${this.getAttribute("name")} por $${this.getAttribute("price")}!`);
        });
    }
}

// Registrar el componente
customElements.define("product-card", ProductCard);


document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.createElement("div");
    contenedor.style.display = "flex";
    contenedor.style.flexWrap = "wrap";
    contenedor.style.justifyContent = "center";

    productos.forEach(producto => {
        const card = document.createElement("product-card");
        card.setAttribute("name", producto.name);
        card.setAttribute("price", producto.price);
        contenedor.appendChild(card);
    });

    document.body.appendChild(contenedor);
});
