class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar(){
        console.log(this.studentName + " (" + this.studentRole)
        console.log(`${this.likes} me gustó el curso`)
    }
}

function videoPlay(id) {
    const urlSecreata = 'https://platzi.com' + id
    console.log('se esta reproduciendo desde la url' + urlSecreata)
}
function videoStop(id) {
    const urlSecreata = 'https://platzi.com' + id
    console.log('se esta pausó desde la url' + urlSecreata)
}

class Platziclass {
    constructor({
        name,
        videoID
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID)
    }

    pausar() {
        videoStop(this.videoID)
    }
}

const clasesCursoHTML = new Platziclass({
    name: 'Curso definitivo de HTML',
    listClases: [
        'Fundamentos de programación',
        'Maquetación con HTML',
        'Creando la estructura de un formulario',
        'Principios de CSS',
        'Diseño Response'
    ]
})

const ClasesCursoProgramacionBasica = new Platziclass({
    name: 'Curso de programación básica',
    listClases: [
        'Qué es la programación',
        'Entender que es crear hola mundo'
    ]
})

const clasesCursoJs = new Platziclass({
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
        isFree = false,
        lang = 'spanish'
    }) {
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name
    }

    set name(nuevoNombre) {
        if(nuevoNombre === 'Curso Malito'){
            console.error('No puedes poder ese nombre')
        } else {
            this._name = nuevoNombre;
        }
        
    }
}

const cursoProgBasica = new Course({
    name: 'Curso de programación básica',
    classes: [
        ClasesCursoProgramacionBasica,
    ],
    isFree: true
})

const cursoDefinitivoHTML = new Course({
    name: 'curso definitivo HTML',
    classes: [
        clasesCursoHTML
    ],
    lang: 'english'
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

    publicarComentario(commetContent){
        const comment = new Comment({
            content: commetContent,
            studentName: this.name,
        });
        comment.publicar()
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
        
    }

    approveCourse(newCourse) {
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos abiertos')
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props)
        
    }

    approveCourse(newCourse) {
        if(newCourse.lang !== 'english'){
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos abiertos')
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
        
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props)
        
    }

    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }

    publicarComentario(commetContent){
        const comment = new Comment({
            content: commetContent,
            studentName: this.name,
            studentRole: 'profesor'
        });
        comment.publicar()
    }
}


const david = new FreeStudent({
    name: 'David',
    userName: 'davis1023',
    email: 'davyd2h@gmail.com',
    twitter: 'davis29w8js',
    learningPaths: [
        escuelaData,
        escuelaPython
    ]
});

const luz = new BasicStudent({
    name: 'Luz',
    userName: 'luzJ',
    email: 'luzj@gmail.com',
    twitter: 'davis29w8js',
    learningPaths: [
        escuelaWeb,
        escuelaPython
    ]
})

const juaco = new ExpertStudent({
    name: 'Juaquin',
    userName: 'juaco',
    email: 'juaco@gmail.com',
    twitter: 'juacojs',
    learningPaths: [
        escuelaPython
    ]
})

const fredy = new TeacherStudent({
    name: 'Fredy Vega',
    userName: 'fredysito',
    email: 'fredier@gmail.com',
    twitter: 'fedier',
})