function soma(x, callback){

    return setTimeout(() => {
        return callback(null, x + 5000);
    },3000);
    
    x + 5000;
}

function resolveSoma(err, resultado){
    if(err) throw err;

    console.log(resultado);
}

soma(270, resolveSoma);