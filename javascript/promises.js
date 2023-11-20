function myPromise(value){
    return new Promise((resolve, reject)=>{
        if(value){
            resolve('petición correcta');
        }else{
            reject('petición incorrecta');
        }      
    })
};

myPromise(true)
    .then(respuesta => { console.log(respuesta)})
    .catch(error => { console.log(error)})
    .finally(() => { console.log('promesa finalizada ')})

myPromise(false)
    .then(respuesta => { console.log(respuesta)})
    .catch(error =>{ console.log(error)})
    .finally(() => { console.log('promesa finalizada')})

//hacer un ejemplo más real con fecth