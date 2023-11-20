function hanged(result){
    let response = prompt('elige una letra del abecedario');
    let failCont = 0;
    let position = []

    
    if(typeof String(response)){
        if(/^[A-Za-z]+$/.test(response)){
            
            position = result.indexOf(response)

        }else{
            response = prompt('Introduzca solo letras')
        }
    
    }


}
console.log(hanged('promesa'));