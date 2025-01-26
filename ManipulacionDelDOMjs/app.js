/**
 * Aplicación de Gestor de Tareas
 * 
 * Esta aplicación permite a los usuarios crear, editar, eliminar y guardar tareas en una lista de tareas utilizando localStorage.
 */

// Elementos del DOM
const taskForm = document.getElementById('task-form'); // Elemento del formulario para la entrada de tareas
const taskList = document.getElementById('task-list'); // Elemento UL para mostrar la lista de tareas

// Cargar tareas desde localStorage cuando la aplicación inicia
loadTask();

// Evento para el envío del formulario
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    const taskInput = document.getElementById('task-input'); // Campo de entrada para la tarea
    const task = taskInput.value; // Obtener el valor del campo de entrada

    console.log(task); // Registrar la tarea para depuración

    if (task) {
        taskList.append(createTaskElement(task)); // Agregar la tarea al DOM
        storeTaskLocalStorage(task); // Guardar la tarea en localStorage
        taskInput.value = ''; // Limpiar el campo de entrada
    }
});

/**
 * Crear un nuevo elemento de tarea.
 * @param {string} task - El texto de la tarea.
 * @returns {HTMLElement} - Un elemento "li" que contiene la tarea y los botones de acción.
 */
function createTaskElement(task) {
    const li = document.createElement('li'); // Crear un elemento de lista
    li.textContent = task; // Asignar el texto de la tarea

    // Agregar los botones de eliminar y editar a la tarea
    li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit-btn'));
    return li;
}

/**
 * Crear un botón.
 * @param {string} text - El texto o icono del botón.
 * @param {string} className - La clase para estilo y identificación de eventos.
 * @returns {HTMLElement} - Un elemento "span" que representa el botón.
 */
function createButton(text, className) {
    const btn = document.createElement('span'); // Crear un elemento span
    btn.textContent = text; // Asignar el texto del botón
    btn.className = className; // Asignar el nombre de la clase
    btn.style.cursor = 'pointer'; // Agregar un cursor de puntero para mejorar la experiencia del usuario
    return btn;
}

// Delegación de eventos para las acciones de las tareas
taskList.addEventListener('click', (event) => {
    console.log(event.target); // Registrar el elemento clicado para depuración

    if (event.target.classList.contains('delete-btn')) {
        deleteTask(event.target.parentElement); // Eliminar la tarea si se clicó en el botón de eliminar
    } else if (event.target.classList.contains('edit-btn')) {
        editTask(event.target.parentElement); // Editar la tarea si se clicó en el botón de editar
    }
});

/**
 * Eliminar una tarea del DOM y de localStorage.
 * @param {HTMLElement} taskItem - El elemento "li" que representa la tarea a eliminar.
 */
function deleteTask(taskItem) {
    if (confirm('Estas seguro que deseas borrar este evento')) {
        taskItem.remove(); // Eliminar la tarea del DOM
        updateLocalStorage(); // Actualizar localStorage después de eliminar
    }
}

/**
 * Editar el texto de una tarea.
 * @param {HTMLElement} taskItem - El elemento "li" que representa la tarea a editar.
 */
function editTask(taskItem) {
    const newTask = prompt('Editar la tarea: ', taskItem.firstChild.textContent); // Pedir nuevo texto de la tarea
    if (newTask !== null) {
        taskItem.firstChild.textContent = newTask; // Actualizar el texto de la tarea
        updateLocalStorage(); // Actualizar localStorage después de editar
    }
}

/**
 * Guardar una tarea en localStorage.
 * @param {string} task - El texto de la tarea a guardar.
 */
function storeTaskLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Obtener las tareas existentes o inicializar un array vacío
    tasks.push(task); // Agregar la nueva tarea al array
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar el array actualizado en localStorage
}

/**
 * Cargar tareas desde localStorage y renderizarlas en la lista de tareas.
 */
function loadTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Obtener las tareas de localStorage o inicializar un array vacío
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task)); // Crear y agregar cada tarea al DOM
    });
}

/**
 * Actualizar localStorage con las tareas actuales en el DOM.
 */
function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll('li')).map((li) => li.firstChild.textContent); // Extraer el texto de las tareas del DOM
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar las tareas en localStorage
}

//LocalStorage para cambiar tema de forma dinámica con JS
const themeToggleButton = document.getElementById('toggle-theme-btn');
const currenTheme = localStorage.getItem('theme')

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
})

if(currenTheme === 'dark') {
    document.body.classList.add('dark-theme')
}