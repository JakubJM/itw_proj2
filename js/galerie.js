const currentImage = document.getElementById("current-image");
    const imageThumbs = document.getElementById("image-thumbs");

    //smycka pro generovani nahledu
    for (let i = 1; i <= 10; i++) {
        const thumb = document.createElement("img");
        thumb.src = `images/image${i}.jpg`;
        thumb.alt = `Image ${i}`;
        thumb.classList.add("thumb");
        
        //udalost kliknuti pro zmenu hlavniho obrazku
        thumb.addEventListener("click", function() {
            currentImage.src = this.src;
            currentImage.alt = this.alt;
        });
        
        imageThumbs.appendChild(thumb);
    }