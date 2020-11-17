let iconoCarrito = document.querySelector('.icono-carrito');
iconoCarrito.addEventListener('click', mostrarProductos);

function mostrarProductos(){
    
    let carrito = document.querySelector('.carrito');
    if(carrito.classList.contains('carrito-activo')){
        carrito.classList.remove('carrito-activo');
    }else{
    carrito.classList.add('carrito-activo');
    }
}