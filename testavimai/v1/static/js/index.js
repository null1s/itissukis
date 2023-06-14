const images = document.getElementsByTagName("img")
console.log(images)

for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(){
        // NUIMA
        for(let image of images){
            image.classList.remove("toggle")
        }
        // UZDEDA
        this.classList.toggle("toggle")
    })
}