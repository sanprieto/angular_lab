const product = {
    nombre : 'nombre',
    cantidad: 100,
    precio: 600
}

function solicitarProducto(){

    product.name = prompt('Nombre del producto');
    product.amount = prompt('cantidad');
    product.price = prompt('precio');
    console.log(product);
}

solicitarProducto();
