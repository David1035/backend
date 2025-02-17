/** Un objeto literal en JS, aquí lo podemos ver y su funcionamiento */

// const david = { // objeto literal
//     name: 'David',
//     age: 31,
//     cursoAprobados: [
//         'Curso definitivo HTML',
//         'Curso JS'
//     ],
//     aprobarCurso (nuevoCurso) {
//         this.cursoAprobados.push(nuevoCurso)
//     },
// };

// david.cursoAprobados.push('Curso response Desing ')
// david.name = 'David Hernandez';
// david.aprobarCurso('Definitivo de matematicas')

/**Crear función constructora */
function Student(name, age, cursoAprobados){
    this.name = name;
    this.age = age;
    this.cursoAprobados = cursoAprobados;
    // this.aprobarCurso = function (nuevoCurso) {
    //     this.cursoAprobados.push(nuevoCurso)
    // una forma de trabajar
    // }
}

//con la herramienta prototype se crea por fuera
Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursoAprobados.push(nuevoCurso)
}

const juanita = new Student(
    'David Hernandez',
    31,
    [
        'Curso de HTML',
        'Curso de programacion'
    ]
)
juanita.aprobarCurso('Curso de fisica')

// Ptototipos con la sintaxis de las clases

class Student2 {
    constructor({
        email,
        name, 
        age, 
        cursoAprobados = []
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursoAprobados = cursoAprobados;      
    }

    aprobarCurso(nuevoCurso){
        this.cursoAprobados.push(nuevoCurso)
    }
}

const miguelito = new Student2(
    {
        email: 'david@gamil.com',
        name: 'David H', 
        age: 35,
    }
)

miguelito.aprobarCurso('Desarrollo Web con JS')
miguelito.aprobarCurso('Ciencias de la computación')

/**Ventajas de la POO */
const Juan1 = {
    name: 'JuanDC',
    username: 'juandc',
    points: 100,
    socialMedia: {
        twitter: 'fjuandc',
        instagram: 'juandc',
        facebook: undefined,
    },
    approvedCourses: [
        'Curso de hTML',
        'Curso practico'
    ],
    learningPaths: [
        {
            name: 'Escuela de desarrollo Web',
            courses: [
                'Curso de hTML',
                'Curso practico',
                'curso de maquetacion',
                'curso maquetacion'

            ]
        }
    ]
}