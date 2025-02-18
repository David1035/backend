class classes {
    constructor({
        name,
        listClases = []
    }) {
        this.name = name;
        this.listClases = listClases;
    }
}

const clasesCursoHTML = new classes({
    name: 'Curso definitivo de HTML',
    listClases: [
        'Fundamentos de programación',
        'Maquetación con HTML',
        'Creando la estructura de un formulario',
        'Principios de CSS',
        'Diseño Response'
    ]
})

const ClasesCursoProgramacionBasica = new classes({
    name: 'Curso de programación básica',
    listClases: [
        'Qué es la programación',
        'Entender que es crear hola mundo'
    ]
})

const clasesCursoJs = new classes({
    name: 'Curso de JavaScript',
    listClases: [
        'Fundamentos de JavaScript',
        'Manejo de Arrays',
        'Funciones y scope'
    ]
})

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this.name = name;
        this.classes = classes;
    }
}

const cursoProgBasica = new Course({
    name: 'Curso de programación básica',
    classes: [
        ClasesCursoProgramacionBasica
    ]
})

const cursoDefinitivoHTML = new Course({
    name: 'curso definitivo HTML',
    classes: [
        clasesCursoHTML
    ]
})

const cursoJs = new Course({
    name: 'Curso de JavaScript',
    classes: [
        clasesCursoJs
    ]
})


class LearningPath {
    constructor({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: 'Escuela de Data Sciencia',
    courses: [
        cursoProgBasica, 
        cursoJs,
    ]
})

const escuelaPython = new LearningPath({
    name: 'Python desde cero',
    courses: [
        cursoProgBasica, 
        cursoJs,
        cursoDefinitivoHTML
    ]
})

const escuelaData = new LearningPath({
    name: 'Datos e inteligencia Artificial',
    courses: [
        cursoDefinitivoHTML, 
        cursoJs,
    ]
})

class Student {
    constructor({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.sosialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const david = new Student({
    name: 'David',
    userName: 'davis1023',
    email: 'davyd2h@gmail.com',
    twitter: 'davis29w8js',
    learningPaths: [
        escuelaData,
        escuelaPython
    ]
});

const luz = new Student({
    name: 'Luz',
    userName: 'luzJ',
    email: 'luzj@gmail.com',
    twitter: 'davis29w8js',
    learningPaths: [
        escuelaWeb,
        escuelaPython
    ]
})

const juaco = new Student({
    name: 'Juaquin',
    userName: 'juaco',
    email: 'juaco@gmail.com',
    twitter: 'juacojs',
    learningPaths: [
        escuelaPython
    ]
})