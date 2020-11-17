

let boton1 = document.querySelector('#btn-producto1');
boton1.addEventListener('click', agregar1);


let boton2 = document.querySelector('#btn-producto2');
boton2.addEventListener('click', agregar2);


let boton3 = document.querySelector('#btn-producto3');
boton3.addEventListener('click', agregar3);

let boton4 = document.querySelector('#btn-producto4');
boton4.addEventListener('click', agregar4);


let boton5 = document.querySelector('#btn-producto5');
boton5.addEventListener('click', agregar5);


let boton6 = document.querySelector('#btn-producto6');
boton6.addEventListener('click', agregar6);

let boton7 = document.querySelector('#btn-producto7');
boton7.addEventListener('click', agregar7);


let boton8 = document.querySelector('#btn-producto8');
boton8.addEventListener('click', agregar8);


let boton9 = document.querySelector('#btn-producto9');
boton9.addEventListener('click', agregar9);

let boton10 = document.querySelector('#btn-producto10');
boton10.addEventListener('click', agregar10);


let boton11 = document.querySelector('#btn-producto11');
boton11.addEventListener('click', agregar11);


let boton12 = document.querySelector('#btn-producto12');
boton12.addEventListener('click', agregar12);

let boton13 = document.querySelector('#btn-producto13');
boton13.addEventListener('click', agregar13);


let boton14 = document.querySelector('#btn-producto14');
boton14.addEventListener('click', agregar14);


let boton15 = document.querySelector('#btn-producto15');
boton15.addEventListener('click', agregar15);

function agregar1(){
   
//crear el elemento
const imagenCarrito = document.createElement('img');
imagenCarrito.src = "img/xbox.jpg";
imagenCarrito.classList.add('imagen');

const tituloProducto = document.createElement('h2');
tituloProducto.textContent = "Xbox One";
tituloProducto.classList.add('titulo');

const precioProducto = document.createElement('p');
precioProducto.textContent = "$6500 MXN";
precioProducto.classList.add('precio');

const iconoEliminar = document.createElement('i');
iconoEliminar.classList.add('icono-eliminar');  
iconoEliminar.classList.add('fas');
iconoEliminar.classList.add('fa-trash-alt');
iconoEliminar.title ="eliminar producto";
//seleccionar el elementos donde queremos mostrarlo

const productoCarrito = document.createElement('div');
productoCarrito.classList.add('producto-carrito');
productoCarrito.appendChild(imagenCarrito);
productoCarrito.appendChild(tituloProducto);
productoCarrito.appendChild(precioProducto);
productoCarrito.appendChild(iconoEliminar);
//agregarlos al contenedor principal

const carrito = document.querySelector('.carrito');
carrito.appendChild(productoCarrito);
 
function eliminar(){
   productoCarrito.remove();
}

iconoEliminar.addEventListener('click', eliminar);

}

function agregar2(){
  
   //crear el elemento
   const imagenCarrito = document.createElement('img');
   imagenCarrito.src = "img/ps4.jpg";
   imagenCarrito.classList.add('imagen');
   
   const tituloProducto = document.createElement('h2');
   tituloProducto.textContent = "Play 4";
   tituloProducto.classList.add('titulo');
   
   const precioProducto = document.createElement('p');
   precioProducto.textContent = "$8500 MXN";
   precioProducto.classList.add('precio');
   
   const iconoEliminar = document.createElement('i');
   iconoEliminar.classList.add('icono-eliminar');  
   iconoEliminar.classList.add('fas');
   iconoEliminar.classList.add('fa-trash-alt');
   iconoEliminar.title ="eliminar producto";
   //seleccionar el elementos donde queremos mostrarlo
   
   const productoCarrito = document.createElement('div');
   productoCarrito.classList.add('producto-carrito');
   productoCarrito.appendChild(imagenCarrito);
   productoCarrito.appendChild(tituloProducto);
   productoCarrito.appendChild(precioProducto);
   productoCarrito.appendChild(iconoEliminar);
   //agregarlos al contenedor principal
   
   const carrito = document.querySelector('.carrito');
   carrito.appendChild(productoCarrito);
    
   function eliminar(){
      productoCarrito.remove();
   }
   
   iconoEliminar.addEventListener('click', eliminar);
   
   }

   function agregar3(){
      
      //crear el elemento
      const imagenCarrito = document.createElement('img');
      imagenCarrito.src = "img/nintendo.jpg";
      imagenCarrito.classList.add('imagen');
      
      const tituloProducto = document.createElement('h2');
      tituloProducto.textContent = "Nintendo";
      tituloProducto.classList.add('titulo');
      
      const precioProducto = document.createElement('p');
      precioProducto.textContent = "$2500 MXN";
      precioProducto.classList.add('precio');
      
      const iconoEliminar = document.createElement('i');
      iconoEliminar.classList.add('icono-eliminar');  
      iconoEliminar.classList.add('fas');
      iconoEliminar.classList.add('fa-trash-alt');
      iconoEliminar.title ="eliminar producto";
      //seleccionar el elementos donde queremos mostrarlo
      
      const productoCarrito = document.createElement('div');
      productoCarrito.classList.add('producto-carrito');
      productoCarrito.appendChild(imagenCarrito);
      productoCarrito.appendChild(tituloProducto);
      productoCarrito.appendChild(precioProducto);
      productoCarrito.appendChild(iconoEliminar);
      //agregarlos al contenedor principal
      
      const carrito = document.querySelector('.carrito');
      carrito.appendChild(productoCarrito);
       
      function eliminar(){
         productoCarrito.remove();
      }
      
      iconoEliminar.addEventListener('click', eliminar);
      
      } 

      function agregar4(){
         
         //crear el elemento
         const imagenCarrito = document.createElement('img');
         imagenCarrito.src = "img/laptop.webp";
         imagenCarrito.classList.add('imagen');
         
         const tituloProducto = document.createElement('h2');
         tituloProducto.textContent = "Laptop HP";
         tituloProducto.classList.add('titulo');
         
         const precioProducto = document.createElement('p');
         precioProducto.textContent = "$5500 MXN";
         precioProducto.classList.add('precio');
         
         const iconoEliminar = document.createElement('i');
         iconoEliminar.classList.add('icono-eliminar');  
         iconoEliminar.classList.add('fas');
         iconoEliminar.classList.add('fa-trash-alt');
         iconoEliminar.title ="eliminar producto";
         //seleccionar el elementos donde queremos mostrarlo
         
         const productoCarrito = document.createElement('div');
         productoCarrito.classList.add('producto-carrito');
         productoCarrito.appendChild(imagenCarrito);
         productoCarrito.appendChild(tituloProducto);
         productoCarrito.appendChild(precioProducto);
         productoCarrito.appendChild(iconoEliminar);
         //agregarlos al contenedor principal
         
         const carrito = document.querySelector('.carrito');
         carrito.appendChild(productoCarrito);
          
         function eliminar(){
            productoCarrito.remove();
         }
         
         iconoEliminar.addEventListener('click', eliminar);
         
         }

         function agregar5(){
          
            //crear el elemento
            const imagenCarrito = document.createElement('img');
            imagenCarrito.src = "img/iphonexs.webp";
            imagenCarrito.classList.add('imagen');
            
            const tituloProducto = document.createElement('h2');
            tituloProducto.textContent = "Iphone Xs";
            tituloProducto.classList.add('titulo');
            
            const precioProducto = document.createElement('p');
            precioProducto.textContent = "$8500 MXN";
            precioProducto.classList.add('precio');
            
            const iconoEliminar = document.createElement('i');
            iconoEliminar.classList.add('icono-eliminar');  
            iconoEliminar.classList.add('fas');
            iconoEliminar.classList.add('fa-trash-alt');
            iconoEliminar.title ="eliminar producto";
            //seleccionar el elementos donde queremos mostrarlo
            
            const productoCarrito = document.createElement('div');
            productoCarrito.classList.add('producto-carrito');
            productoCarrito.appendChild(imagenCarrito);
            productoCarrito.appendChild(tituloProducto);
            productoCarrito.appendChild(precioProducto);
            productoCarrito.appendChild(iconoEliminar);
            //agregarlos al contenedor principal
            
            const carrito = document.querySelector('.carrito');
            carrito.appendChild(productoCarrito);
             
            function eliminar(){
               productoCarrito.remove();
            }
            
            iconoEliminar.addEventListener('click', eliminar);
            
            }

            function agregar6(){
               
               //crear el elemento
               const imagenCarrito = document.createElement('img');
               imagenCarrito.src = "img/pantalla.jpg";
               imagenCarrito.classList.add('imagen');
               
               const tituloProducto = document.createElement('h2');
               tituloProducto.textContent = "Pantalla 55p 4K";
               tituloProducto.classList.add('titulo');
               
               const precioProducto = document.createElement('p');
               precioProducto.textContent = "$25000 MXN";
               precioProducto.classList.add('precio');
               
               const iconoEliminar = document.createElement('i');
               iconoEliminar.classList.add('icono-eliminar');  
               iconoEliminar.classList.add('fas');
               iconoEliminar.classList.add('fa-trash-alt');
               iconoEliminar.title ="eliminar producto";
               //seleccionar el elementos donde queremos mostrarlo
               
               const productoCarrito = document.createElement('div');
               productoCarrito.classList.add('producto-carrito');
               productoCarrito.appendChild(imagenCarrito);
               productoCarrito.appendChild(tituloProducto);
               productoCarrito.appendChild(precioProducto);
               productoCarrito.appendChild(iconoEliminar);
               //agregarlos al contenedor principal
               
               const carrito = document.querySelector('.carrito');
               carrito.appendChild(productoCarrito);
                
               function eliminar(){
                  productoCarrito.remove();
               }
               
               iconoEliminar.addEventListener('click', eliminar);
               
               }

               function agregar7(){
                 
                  //crear el elemento
                  const imagenCarrito = document.createElement('img');
                  imagenCarrito.src = "img/tenis.jpg";
                  imagenCarrito.classList.add('imagen');
                  
                  const tituloProducto = document.createElement('h2');
                  tituloProducto.textContent = "Tenis Nike Hombre";
                  tituloProducto.classList.add('titulo');
                  
                  const precioProducto = document.createElement('p');
                  precioProducto.textContent = "$1500 MXN";
                  precioProducto.classList.add('precio');
                  
                  const iconoEliminar = document.createElement('i');
                  iconoEliminar.classList.add('icono-eliminar');  
                  iconoEliminar.classList.add('fas');
                  iconoEliminar.classList.add('fa-trash-alt');
                  iconoEliminar.title ="eliminar producto";
                  //seleccionar el elementos donde queremos mostrarlo
                  
                  const productoCarrito = document.createElement('div');
                  productoCarrito.classList.add('producto-carrito');
                  productoCarrito.appendChild(imagenCarrito);
                  productoCarrito.appendChild(tituloProducto);
                  productoCarrito.appendChild(precioProducto);
                  productoCarrito.appendChild(iconoEliminar);
                  //agregarlos al contenedor principal
                  
                  const carrito = document.querySelector('.carrito');
                  carrito.appendChild(productoCarrito);
                   
                  function eliminar(){
                     productoCarrito.remove();
                  }
                  
                  iconoEliminar.addEventListener('click', eliminar);
                  
                  }

                  function agregar8(){
                   
                     //crear el elemento
                     const imagenCarrito = document.createElement('img');
                     imagenCarrito.src = "img/reloj.jpg";
                     imagenCarrito.classList.add('imagen');
                     
                     const tituloProducto = document.createElement('h2');
                     tituloProducto.textContent = "Reloj";
                     tituloProducto.classList.add('titulo');
                     
                     const precioProducto = document.createElement('p');
                     precioProducto.textContent = "$2500 MXN";
                     precioProducto.classList.add('precio');
                     
                     const iconoEliminar = document.createElement('i');
                     iconoEliminar.classList.add('icono-eliminar');  
                     iconoEliminar.classList.add('fas');
                     iconoEliminar.classList.add('fa-trash-alt');
                     iconoEliminar.title ="eliminar producto";
                     //seleccionar el elementos donde queremos mostrarlo
                     
                     const productoCarrito = document.createElement('div');
                     productoCarrito.classList.add('producto-carrito');
                     productoCarrito.appendChild(imagenCarrito);
                     productoCarrito.appendChild(tituloProducto);
                     productoCarrito.appendChild(precioProducto);
                     productoCarrito.appendChild(iconoEliminar);
                     //agregarlos al contenedor principal
                     
                     const carrito = document.querySelector('.carrito');
                     carrito.appendChild(productoCarrito);
                      
                     function eliminar(){
                        productoCarrito.remove();
                     }
                     
                     iconoEliminar.addEventListener('click', eliminar);
                     
                     }

                     function agregar9(){
                        
                        //crear el elemento
                        const imagenCarrito = document.createElement('img');
                        imagenCarrito.src = "img/x360.jpg";
                        imagenCarrito.classList.add('imagen');
                        
                        const tituloProducto = document.createElement('h2');
                        tituloProducto.textContent = "Xbox 360";
                        tituloProducto.classList.add('titulo');
                        
                        const precioProducto = document.createElement('p');
                        precioProducto.textContent = "$4500 MXN";
                        precioProducto.classList.add('precio');
                        
                        const iconoEliminar = document.createElement('i');
                        iconoEliminar.classList.add('icono-eliminar');  
                        iconoEliminar.classList.add('fas');
                        iconoEliminar.classList.add('fa-trash-alt');
                        iconoEliminar.title ="eliminar producto";
                        //seleccionar el elementos donde queremos mostrarlo
                        
                        const productoCarrito = document.createElement('div');
                        productoCarrito.classList.add('producto-carrito');
                        productoCarrito.appendChild(imagenCarrito);
                        productoCarrito.appendChild(tituloProducto);
                        productoCarrito.appendChild(precioProducto);
                        productoCarrito.appendChild(iconoEliminar);
                        //agregarlos al contenedor principal
                        
                        const carrito = document.querySelector('.carrito');
                        carrito.appendChild(productoCarrito);
                         
                        function eliminar(){
                           productoCarrito.remove();
                        }
                        
                        iconoEliminar.addEventListener('click', eliminar);
                        
                        }

                        function agregar10(){
                          
                           //crear el elemento
                           const imagenCarrito = document.createElement('img');
                           imagenCarrito.src = "img/disco.jpg";
                           imagenCarrito.classList.add('imagen');
                           
                           const tituloProducto = document.createElement('h2');
                           tituloProducto.textContent = "Disco duro";
                           tituloProducto.classList.add('titulo');
                           
                           const precioProducto = document.createElement('p');
                           precioProducto.textContent = "$800 MXN";
                           precioProducto.classList.add('precio');
                           
                           const iconoEliminar = document.createElement('i');
                           iconoEliminar.classList.add('icono-eliminar');  
                           iconoEliminar.classList.add('fas');
                           iconoEliminar.classList.add('fa-trash-alt');
                           iconoEliminar.title ="eliminar producto";
                           //seleccionar el elementos donde queremos mostrarlo
                           
                           const productoCarrito = document.createElement('div');
                           productoCarrito.classList.add('producto-carrito');
                           productoCarrito.appendChild(imagenCarrito);
                           productoCarrito.appendChild(tituloProducto);
                           productoCarrito.appendChild(precioProducto);
                           productoCarrito.appendChild(iconoEliminar);
                           //agregarlos al contenedor principal
                           
                           const carrito = document.querySelector('.carrito');
                           carrito.appendChild(productoCarrito);
                            
                           function eliminar(){
                              productoCarrito.remove();
                           }
                           
                           iconoEliminar.addEventListener('click', eliminar);
                           
                           }

                           function agregar11(){
                              
                              //crear el elemento
                              const imagenCarrito = document.createElement('img');
                              imagenCarrito.src = "img/ps5.jpg";
                              imagenCarrito.classList.add('imagen');
                              
                              const tituloProducto = document.createElement('h2');
                              tituloProducto.textContent = "Play 5";
                              tituloProducto.classList.add('titulo');
                              
                              const precioProducto = document.createElement('p');
                              precioProducto.textContent = "$13500 MXN";
                              precioProducto.classList.add('precio');
                              
                              const iconoEliminar = document.createElement('i');
                              iconoEliminar.classList.add('icono-eliminar');  
                              iconoEliminar.classList.add('fas');
                              iconoEliminar.classList.add('fa-trash-alt');
                              iconoEliminar.title ="eliminar producto";
                              //seleccionar el elementos donde queremos mostrarlo
                              
                              const productoCarrito = document.createElement('div');
                              productoCarrito.classList.add('producto-carrito');
                              productoCarrito.appendChild(imagenCarrito);
                              productoCarrito.appendChild(tituloProducto);
                              productoCarrito.appendChild(precioProducto);
                              productoCarrito.appendChild(iconoEliminar);
                              //agregarlos al contenedor principal
                              
                              const carrito = document.querySelector('.carrito');
                              carrito.appendChild(productoCarrito);
                               
                              function eliminar(){
                                 productoCarrito.remove();
                              }
                              
                              iconoEliminar.addEventListener('click', eliminar);
                              
                              }

                              function agregar12(){
                                 
                                 //crear el elemento
                                 const imagenCarrito = document.createElement('img');
                                 imagenCarrito.src = "img/xboxseriex.jpg";
                                 imagenCarrito.classList.add('imagen');
                                 
                                 const tituloProducto = document.createElement('h2');
                                 tituloProducto.textContent = "Xbox serie X";
                                 tituloProducto.classList.add('titulo');
                                 
                                 const precioProducto = document.createElement('p');
                                 precioProducto.textContent = "$13,500 MXN";
                                 precioProducto.classList.add('precio');
                                 
                                 const iconoEliminar = document.createElement('i');
                                 iconoEliminar.classList.add('icono-eliminar');  
                                 iconoEliminar.classList.add('fas');
                                 iconoEliminar.classList.add('fa-trash-alt');
                                 iconoEliminar.title ="eliminar producto";
                                 //seleccionar el elementos donde queremos mostrarlo
                                 
                                 const productoCarrito = document.createElement('div');
                                 productoCarrito.classList.add('producto-carrito');
                                 productoCarrito.appendChild(imagenCarrito);
                                 productoCarrito.appendChild(tituloProducto);
                                 productoCarrito.appendChild(precioProducto);
                                 productoCarrito.appendChild(iconoEliminar);
                                 //agregarlos al contenedor principal
                                 
                                 const carrito = document.querySelector('.carrito');
                                 carrito.appendChild(productoCarrito);
                                  
                                 function eliminar(){
                                    productoCarrito.remove();
                                 }
                                 
                                 iconoEliminar.addEventListener('click', eliminar);
                                 
                                 }

                                 function agregar13(){
                                    
                                    //crear el elemento
                                    const imagenCarrito = document.createElement('img');
                                    imagenCarrito.src = "img/xaomi.jpg";
                                    imagenCarrito.classList.add('imagen');
                                    
                                    const tituloProducto = document.createElement('h2');
                                    tituloProducto.textContent = "Xaomi MI A2";
                                    tituloProducto.classList.add('titulo');
                                    
                                    const precioProducto = document.createElement('p');
                                    precioProducto.textContent = "$3500 MXN";
                                    precioProducto.classList.add('precio');
                                    
                                    const iconoEliminar = document.createElement('i');
                                    iconoEliminar.classList.add('icono-eliminar');  
                                    iconoEliminar.classList.add('fas');
                                    iconoEliminar.classList.add('fa-trash-alt');
                                    iconoEliminar.title ="eliminar producto";
                                    //seleccionar el elementos donde queremos mostrarlo
                                    
                                    const productoCarrito = document.createElement('div');
                                    productoCarrito.classList.add('producto-carrito');
                                    productoCarrito.appendChild(imagenCarrito);
                                    productoCarrito.appendChild(tituloProducto);
                                    productoCarrito.appendChild(precioProducto);
                                    productoCarrito.appendChild(iconoEliminar);
                                    //agregarlos al contenedor principal
                                    
                                    const carrito = document.querySelector('.carrito');
                                    carrito.appendChild(productoCarrito);
                                     
                                    function eliminar(){
                                       productoCarrito.remove();
                                    }
                                    
                                    iconoEliminar.addEventListener('click', eliminar);
                                    
                                    }

                                    function agregar14(){
                                       
                                       //crear el elemento
                                       const imagenCarrito = document.createElement('img');
                                       imagenCarrito.src = "img/audifonos.webp";
                                       imagenCarrito.classList.add('imagen');
                                       
                                       const tituloProducto = document.createElement('h2');
                                       tituloProducto.textContent = "Audifonos";
                                       tituloProducto.classList.add('titulo');
                                       
                                       const precioProducto = document.createElement('p');
                                       precioProducto.textContent = "$500 MXN";
                                       precioProducto.classList.add('precio');
                                       
                                       const iconoEliminar = document.createElement('i');
                                       iconoEliminar.classList.add('icono-eliminar');  
                                       iconoEliminar.classList.add('fas');
                                       iconoEliminar.classList.add('fa-trash-alt');
                                       iconoEliminar.title ="eliminar producto";
                                       //seleccionar el elementos donde queremos mostrarlo
                                       
                                       const productoCarrito = document.createElement('div');
                                       productoCarrito.classList.add('producto-carrito');
                                       productoCarrito.appendChild(imagenCarrito);
                                       productoCarrito.appendChild(tituloProducto);
                                       productoCarrito.appendChild(precioProducto);
                                       productoCarrito.appendChild(iconoEliminar);
                                       //agregarlos al contenedor principal
                                       
                                       const carrito = document.querySelector('.carrito');
                                       carrito.appendChild(productoCarrito);
                                        
                                       function eliminar(){
                                          productoCarrito.remove();
                                       }
                                       
                                       iconoEliminar.addEventListener('click', eliminar);
                                       
                                       }

                                       function agregar15(){
                                         
                                          //crear el elemento
                                          const imagenCarrito = document.createElement('img');
                                          imagenCarrito.src = "img/tablet.jpg";
                                          imagenCarrito.classList.add('imagen');
                                          
                                          const tituloProducto = document.createElement('h2');
                                          tituloProducto.textContent = "Tablet";
                                          tituloProducto.classList.add('titulo');
                                          
                                          const precioProducto = document.createElement('p');
                                          precioProducto.textContent = "$2500 MXN";
                                          precioProducto.classList.add('precio');
                                          
                                          const iconoEliminar = document.createElement('i');
                                          iconoEliminar.classList.add('icono-eliminar');  
                                          iconoEliminar.classList.add('fas');
                                          iconoEliminar.classList.add('fa-trash-alt');
                                          iconoEliminar.title ="eliminar producto";
                                          //seleccionar el elementos donde queremos mostrarlo
                                          
                                          const productoCarrito = document.createElement('div');
                                          productoCarrito.classList.add('producto-carrito');
                                          productoCarrito.appendChild(imagenCarrito);
                                          productoCarrito.appendChild(tituloProducto);
                                          productoCarrito.appendChild(precioProducto);
                                          productoCarrito.appendChild(iconoEliminar);
                                          //agregarlos al contenedor principal
                                          
                                          const carrito = document.querySelector('.carrito');
                                          carrito.appendChild(productoCarrito);
                                           
                                          function eliminar(){
                                             productoCarrito.remove();
                                          }
                                          
                                          iconoEliminar.addEventListener('click', eliminar);
                                          
                                          }

