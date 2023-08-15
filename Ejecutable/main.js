document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector(".carousel");
    var images = carousel.querySelectorAll("img");
    var arrows = carousel.querySelectorAll(".arrow");

    var index = 0;

    function showImage() {
        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[index].style.display = "block";
    }

    function changeIndex(direction) {
        if (direction === "left") {
            index--;
            if (index < 0) {
                index = images.length - 1;
            }
        } else if (direction === "right") {
            index++;
            if (index > images.length - 1) {
                index = 0;
            }
        }
        showImage();
    }

    for (var i = 0; i < arrows.length; i++) {
        var direction = arrows[i].classList.contains("left") ? "left" : "right";
        arrows[i].addEventListener("click", function () {
            changeIndex(direction);
        });
    }

    showImage();
});
