const currentImage = document.getElementById("current_image");
    const previous = document.getElementById("previous");
    const next = document.getElementById("next");
    let i = 1;

        //udalost kliknuti pro zmenu hlavniho obrazku
        previous.addEventListener("click", function() {
            if (i > 1) {
                i--;
                currentImage.src=`img/airsoft_0${i}.jpg`;
            }
        });

        next.addEventListener("click", function() {
            if (i < 2) {
                i++;
                currentImage.src=`img/airsoft_0${i}.jpg`;
            }
        });