//PRODUCTOS
const productos = [
    //REMERAS
    {
        id: "remeras-01",
        titulo: "remeras 01",
        imagen: "./Remeras/remera.01.jpg",
        categoria: {
            nombre:"Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remeras-02",
        titulo: "remeras 02",
        imagen: "./Remeras/remera.02.jpg",
        categoria: {
            nombre:"remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remeras-03",
        titulo: "remeras 03",
        imagen: "./Remeras/remera.03.jpg",
        categoria: {
            nombre:"Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remeras-04",
        titulo: "remeras 03",
        imagen: "./Remeras/remera.04.jpg",
        categoria: {
            nombre:"Remeras",
            id: "remeras"
        },
        precio: 1000
    },
    {
        id: "remeras-05",
        titulo: "remeras 03",
        imagen: "./Remeras/remera.05.jpg",
        categoria: {
            nombre:"Remeras",
            id: "remeras"
        },
        precio: 1000
    },

    //BUZOS
    {
        id: "buzos-01",
        titulo: "buzos 01",
        imagen: "./Buzos/Buzo.01.jpg",
        categoria: {
            nombre:"buzos",
            id: "buzos"
        },
        precio: 2000
    },
    {
        id: "buzos-02",
        titulo: "buzos 02",
        imagen: "./Buzos/Buzo.02.jpg",
        categoria: {
            nombre:"buzos",
            id: "buzos"
        },
        precio: 2000
    },
    {
        id: "buzos-03",
        titulo: "buzos 03",
        imagen: "./Buzos/Buzo.03.jpg",
        categoria: {
            nombre:"buzos",
            id: "buzos"
        },
        precio: 2000
    },
    {
        id: "buzos-04",
        titulo: "buzos 04",
        imagen: "./Buzos/Buzo.04.jpg",
        categoria: {
            nombre:"buzos",
            id: "buzos"
        },
        precio: 2000
    },
    {
        id: "buzos-05",
        titulo: "buzos 05",
        imagen: "./Buzos/Buzo.05.jpg",
        categoria: {
            nombre:"buzos",
            id: "buzos"
        },
        precio: 2000
    },

    //PANTALONES
    {
        id: "pantalones-01",
        titulo: "pantalones 01",
        imagen: "./Pantalones/pantalon.01.jpg",
        categoria: {
            nombre:"pantalones",
            id: "pantalones"
        },
        precio: 3000
    },
    {
        id: "pantalones-02",
        titulo: "pantalones 02",
        imagen: "./Pantalones/pantalon.02.jpg",
        categoria: {
            nombre:"pantalones",
            id: "pantalones"
        },
        precio: 3000
    },
    {
        id: "pantalones-03",
        titulo: "pantalones 03",
        imagen: "./Pantalones/pantalon.03.jpg",
        categoria: {
            nombre:"pantalones",
            id: "pantalones"
        },
        precio: 3000
    },
    {
        id: "pantalones-04",
        titulo: "pantalones 04",
        imagen: "./Pantalones/pantalon.04.jpg",
        categoria: {
            nombre:"pantalones",
            id: "pantalones"
        },
        precio: 3000
    },
    {
        id: "pantalones-05",
        titulo: "pantalones 05",
        imagen: "./Pantalones/pantalon.05.jpg",
        categoria: {
            nombre:"pantalones",
            id: "pantalones"
        },
        precio: 3000
    }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""; 

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="">
        <div class="producto-detalles">
        <h3 class="producto-titulo">${producto.titulo}</h3>
         <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
     </div>
     `;
        

      contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
    console.log(botonesAgregar);
        
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre


            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);  

        }

    })


});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito =   [ ];

function agregarAlCarrito() {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
       productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

}

function actualizarNumerito() {
    let numerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
    
}

