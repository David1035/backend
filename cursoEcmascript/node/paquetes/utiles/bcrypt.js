const bcrypt = require('bcrypt');

const password = '1234segura!';

bcrypt.hash(password, 5, function(err, hash){
    console.log(hash) // cifrar password

    bcrypt.compare(password, hash, function(err, res){
        //console.log(err)
        console.log(res) // dar verdadero o falso
    })
})

