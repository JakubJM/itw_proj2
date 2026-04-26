const currentImage = document.getElementById("current_image");
    const imageThumbs = document.getElementById("image_thumbs");

    //smycka pro generovani nahledu
    for (let i = 1; i <= 2; i++) {
        const thumb = document.createElement("img");
        thumb.src = `img/airsoft_0${i}.jpg`;
        thumb.alt = `image ${i}`;
        thumb.classList.add("thumb");
        
        //udalost kliknuti pro zmenu hlavniho obrazku
        thumb.addEventListener("click", function() {
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        });
        
        imageThumbs.appendChild(thumb);
    }