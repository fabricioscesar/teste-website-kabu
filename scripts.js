document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;

    function changeSlide(direction) {
        const slides = document.querySelectorAll('.carousel-slide');
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        const translateValue = -100 * currentIndex + '%';
        document.querySelector('.carousel-container').style.transform = 'translateX(' + translateValue + ')';
    }

    document.querySelector('.next-button').addEventListener('click', function () {
        changeSlide(1);
    });

    document.querySelector('.prev-button').addEventListener('click', function () {
        changeSlide(-1);
    });

    setInterval(function () {
        changeSlide(1);
    }, 10000); // Troca de slide a cada 5 segundos (ajuste conforme necessário)
});
//fim do codigo carrossel

//menu togglenav

function toggleNav() {
    var nav = document.querySelector(".navbar");
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

