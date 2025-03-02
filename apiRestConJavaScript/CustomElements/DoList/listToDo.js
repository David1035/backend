const listTienda = ["uvas", "Leche", "Pan"]
console.log(listTienda)

class toDo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow( {mode: "open"} )
    }
    getDoList(){
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <h1>List To-Do</h1>
                <input id="taskInput"></input>
                <button id="addTaskButton">Agregar</button>
                
                <div>
                    <ul id="taskList">
                        <li>Mi lista Aqui</li>
                    </ul>
                </div>
            </section>
        `;
        return template;
    }
    render() {
        this.shadowRoot.appendChild(this.getDoList().content.cloneNode(true))
        const taskList = this.shadowRoot.querySelector("#taskList")
        const addTaskButton = this.shadowRoot.querySelector("#addTaskButton")
        const input = this.shadowRoot.querySelector("#taskInput")
        
        addTaskButton.addEventListener('click', ()=> {
            if(input.value.trim() !== ""){
                listTienda.push(input.value)
            }
        })
        
        listTienda.forEach(element => {
            const newElement = document.createElement('li') 
            newElement.textContent = element
            taskList.appendChild(newElement)
        })
    }
    connectedCallback(){
        this.render()
    }
}

//convertir la clase en una etiqueta html
customElements.define("to-do", toDo);