class Logo{
    constructor(id,nombre,link,img){
        this.id = id
        this.nombre = nombre
        this.link = link
        this.img = img
    }
}
let listaLogos = [
    new Logo(1,"Instagram","https://www.instagram.com/morioh.manga.castelar/?hl=es","assets/img/instagram.png"),
    new Logo(2,"Facebook","https://www.facebook.com/profile.php?id=100072437049160","assets/img/facebook.png"),
    new Logo(3,"GoogleMaps","https://www.google.com/maps/place/Morioh+-+Manga/@-34.6538122,-58.6422249,15z/data=!4m5!3m4!1s0x0:0x4b34f93cf4a0e4f4!8m2!3d-34.6538121!4d-58.6422249","assets/img/drifftingdragons5.jfif"),
]
const LogosEnFormatoJSON = JSON.stringify(listaLogos)
localStorage.setItem("listaLogos",LogosEnFormatoJSON)