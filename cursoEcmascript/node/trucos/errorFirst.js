function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            cancelIdleCallback(null, a)
        } catch (e) {
            callback(e)
        }
    }, 1000)
}

asincrona(function(err, dato) {
    if(err) {
        console.error('tenemos un error', err)
        return false;
    }
})