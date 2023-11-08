function convertData(theData){
    if(theData === null){
        console.log( 'the value is ' + String(theData));
        console.log( 'with typeof return ' + typeof theData);
        console.log( 'is a ' + String(theData),'with Number() return', Number(theData));
        console.log( 'is a ' + String(theData),'with Boolean() return', Boolean(theData));
        return;
    }
    switch(typeof theData){
        case 'number':
                console.log('is a ', typeof theData);
                console.log('can convert to :', typeof String(theData));
                console.log('can convert to :', typeof theData.toString());
                console.log('can convert to :', typeof Boolean(theData), Boolean(theData));
                console.log('can convert to :', typeof new Number(theData));
                try{
                    console.log('can convert to :', typeof BigInt(theData));
                }catch(error){
                    console.log('cannnot convert to BigIng', error.message);
                }
        break;
        case 'string':
                console.log('is a ', typeof theData);
                console.log('can convert to :', typeof Number(theData));
                console.log('can convert to :', typeof parseFloat(theData), parseFloat(theData));
                console.log('can convert to :', typeof Boolean(theData), Boolean(theData));
                console.log('can convert to :', typeof new Number(theData));

        break;
        case 'object':
            console.log('is a ', typeof theData);
            console.log('can convert to :', typeof theData.toString());
            console.log('can convert to :', typeof Number(theData));
            console.log('can convert to :', typeof Boolean(theData), Boolean(theData));

        break;
        case 'undefined':
            console.log('is a ', typeof theData);
            console.log('with String() return :', String(theData));
            console.log('with Number() return :', Number(theData));
            console.log('with Boolean() return :', Boolean(theData));
        break;
        default:
        break;
    }
    return typeof theData;

}
console.log(convertData(undefined));// undefined
console.log(convertData(null)); // null es un error histórico devuelve object
console.log(convertData({})); // object
console.log(convertData('111'))// string with numbers
console.log(convertData('pep'))// string
console.log(convertData(''))// empty string
console.log(convertData(1))// number
console.log(convertData(0))// number
console.log(convertData(1.02))// number with decimal

