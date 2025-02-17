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
    twitter: 'davis29w8js'
});

const luz = new Student({
    name: 'Luz',
    userName: 'luzJ',
    email: 'luzj@gmail.com',
    twitter: 'davis29w8js'
})