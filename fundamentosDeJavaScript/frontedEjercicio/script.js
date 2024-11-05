document.getElementById('ejercicioForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir que la página se recargue

    // Obtener los datos del formulario
    const hora = document.getElementById('hora').value;
    const fecha = document.getElementById('fecha').value;
    const observacion = document.getElementById('observacion').value;
    const nombre = document.getElementById('nombre').value;

    // Validar los datos antes de enviarlos
    if (!hora || !fecha || !observacion || !nombre) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear el objeto con los datos del ejercicio
    const ejercicio = { hora, fecha, observacion, nombre };

    // Hacer la solicitud POST para agregar un nuevo ejercicio
    fetch('http://localhost:3000/ejercicios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ejercicio)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error al agregar ejercicio:', data.error);
            alert('Hubo un error al agregar el ejercicio.');
        } else {
            alert(data.message);
            cargarEjercicios(); // Recargar la lista de ejercicios después de agregar uno
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('cargarEjercicios').addEventListener('click', cargarEjercicios);

function cargarEjercicios() {
    fetch('http://localhost:3000/ejercicios')
    .then(response => response.json())
    .then(data => {
        const listaEjercicios = document.getElementById('listaEjercicios');
        listaEjercicios.innerHTML = ''; // Limpiar la lista

        if (data.data.length === 0) {
            listaEjercicios.innerHTML = '<p>No hay ejercicios disponibles</p>';
        } else {
            // Iterar sobre cada ejercicio para mostrarlos
            data.data.forEach(ejercicio => {
                const ejercicioDiv = document.createElement('div');
                ejercicioDiv.className = 'ejercicio-item';
                ejercicioDiv.innerHTML = `
                    <p><strong>Hora:</strong> ${ejercicio.hora}</p>
                    <p><strong>Fecha:</strong> ${ejercicio.fecha}</p>
                    <p><strong>Observación:</strong> ${ejercicio.observacion}</p>
                    <p><strong>Nombre:</strong> ${ejercicio.nombre}</p>
                    <button onclick="eliminarEjercicio(${ejercicio.id})">Eliminar</button>
                    <hr>
                `;
                listaEjercicios.appendChild(ejercicioDiv);
            });
        }
    })
    .catch(error => {
        console.error('Error al cargar los ejercicios:', error);
    });
}

function eliminarEjercicio(id) {
    if (!confirm('¿Está seguro de que desea eliminar este ejercicio?')) {
        return; // Confirmación antes de eliminar
    }

    fetch(`http://localhost:3000/ejercicios/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error al eliminar ejercicio:', data.error);
            alert('Hubo un error al eliminar el ejercicio.');
        } else {
            alert(data.message);
            cargarEjercicios(); // Recargar la lista de ejercicios después de eliminar uno
        }
    })
    .catch(error => {
        console.error('Error al eliminar el ejercicio:', error);
    });
}
