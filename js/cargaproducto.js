class Producto{
    constructor(id,nombre,precio,editorial,img,cantidad){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.editorial = editorial
        this.img = img
        this.cantidad = cantidad
    }
}
let listaProductos = [
    new Producto(1,"Berserk 36",2200,"PANINI","assets/img/berserk36.jfif",1),
    new Producto(2,"Saint Seiya ND 12",3500,"IVREA","assets/img/saintseiyand12.jfif",1),
    new Producto(3,"Drifting Dragons 05",2650,"OVNI PRESS","assets/img/drifftingdragons5.jfif",1),
    new Producto(4,"Hokuto No Ken 10",2900,"PLANETA CÓMIC","assets/img/puñoestrellanorte10.jfif",1),
    new Producto(5,"Shikimori 02",1800,"DISTRITO MANGA","assets/img/shikimori2.jfif",1),
    new Producto(6,"The Elusive Samurai",2100,"PANINI","assets/img/theelusivesamurai1.jfif",1),
    new Producto(7,"Spy x Family 02",1800,"IVREA","assets/img/sxf2.jfif",1),
    new Producto(8,"Golden Kamuy 22",1900,"PANINI","assets/img/goldenkamuy22.jfif",1),
    new Producto(9,"Oyasumi punpun 01",2000,"IVREA","assets/img/oyasumipunpun1.jfif",1),
]
const arryEnFormatoJSON = JSON.stringify(listaProductos)
localStorage.setItem("listaProductos",arryEnFormatoJSON)