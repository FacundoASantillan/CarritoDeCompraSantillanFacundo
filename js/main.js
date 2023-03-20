class Producto{
    constructor(id,nombre,precio,editorial,img){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.editorial = editorial
        this.img = img
    }
}

const listaProductos = [
    new Producto(1,"Berserk 36",2200,"PANINI","assets/img/berserk36.jfif"),
    new Producto(2,"Saint Seiya ND 12",3500,"IVREA","assets/img/saintseiyand12.jfif"),
    new Producto(3,"Drifting Dragons 05",2650,"OVNI PRESS","assets/img/drifftingdragons5.jfif"),
    new Producto(4,"Hokuto No Ken 10",2900,"PLANETA CÓMIC","assets/img/puñoestrellanorte10.jfif"),
    new Producto(5,"Shikimori 02",1800,"DISTRITO MANGA","assets/img/shikimori2.jfif"),
    new Producto(6,"The Elusive Samurai",2100,"PANINI","assets/img/theelusivesamurai1.jfif"),
    new Producto(7,"Spy x Family 02",1800,"IVREA","assets/img/sxf2.jfif"),
    new Producto(8,"Golden Kamuy 22",1900,"PANINI","assets/img/goldenkamuy22.jfif"),
    new Producto(9,"Oyasumi punpun 01",2000,"IVREA","assets/img/oyasumipunpun1.jfif"),
]

const listaproductosenformatoJSON = JSON.stringify(listaProductos)
localStorage.setItem("listaProductos",listaproductosenformatoJSON)

const listaCarrito = []

const contenedor_productos = document.getElementById("contenedor_productos")
const contenedor_carrito = document.getElementById("contenedor_carrito")

listaProductos.forEach(Producto =>{
    contenedor_productos.innerHTML +=`
        <div>
            <img src="${Producto.img}" alt="${Producto.nombre}">
                <h5>${Producto.editorial}</h5>
                <h3>${Producto.nombre}</h3>
                <h4>$${Producto.precio}</h4>
                <a href="#" id=Manga$${Producto.id}>Añadir al carrito</a>
        </div>
    `
})

listaProductos.forEach(Producto =>{
    const carritoLoading = document.getElementById(`Manga$${Producto.id}`)
    carritoLoading.addEventListener("click",()=>{
        listaCarrito.push(Producto)
        contenedor_carrito.innerHTML = ""
        listaCarrito.forEach( Producto =>{
            contenedor_carrito.innerHTML +=`
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${Producto.img}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${Producto.nombre}</h5>
                            <p class="card-text">${Producto.editorial}</p>
                            <p class="card-text">$${Producto.precio}</p>
                        </div>
                        </div>
                    </div>
                </div>
            `
        })
    })
})