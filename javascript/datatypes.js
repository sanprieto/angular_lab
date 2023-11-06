
function giveMeData(theData){

    //Symbol no se puede convertir a string
    if(typeof theData === 'symbol'&& typeof theData != undefined ){
        console.log(theData.toString() + 'is a symbol'+ '\n') ;
    }else{
        //Comprobamos si el tipo de dato se puede convertir a un string
        let theString = "\"" + theData + "\"";
        console.log('the type ' + typeof theData +' can convert to' + typeof theString + '\n');
    }
    //Comprobamos si es correcto convertir un string a number
    if(typeof theData === 'string'){
        //Utilizamos isNaN() porque NaN es un valor especial y no funciona con == NaN
        if(isNaN(parseInt(theData, 10))){ 
            console.log('Not recomendation conver to number')
        }else{
            console.log( typeof stringToNumber + 'can convert to number'+ '\n');
        }
        
    }
    return theData +' is a '+ typeof theData + '\n';

}

let symbol = Symbol('description');

console.log(
    giveMeData(40),
    giveMeData([]),
    giveMeData({}),
    giveMeData('string'),
    giveMeData(true),
    giveMeData(undefined),
    giveMeData(null),
    giveMeData(214234543654654576n),
    // giveMeData(symbol),
    giveMeData('87987'),
    giveMeData(NaN),
);