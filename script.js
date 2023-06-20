document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    })

document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del carrusel.
    const carousel = document.querySelector("#carouselExampleCaptions");
    const carouselItems = carousel.querySelectorAll(".carousel-item");
    const carouselIndicators = carousel.querySelectorAll(".carousel-indicators button");
    const prevButton = carousel.querySelector(".carousel-control-prev");
    const nextButton = carousel.querySelector(".carousel-control-next");

    // Iniciar carrusel.
    let currentIndex = 0;
    showItem(currentIndex);

    // Añadir Listeners de eventos a los controles de carrusel.
    prevButton.addEventListener("click", function () {
        showItem(currentIndex - 1);
    });

    nextButton.addEventListener("click", function () {
        showItem(currentIndex + 1);
    });

    // Añadir Listeners de eventos a los indicadores del carrusel.
    carouselIndicators.forEach(function (indicator, index) {
        indicator.addEventListener("click", function () {
            showItem(index);
        });
    });

    // Función para mostrar un elemento específico del carrusel.
    function showItem(index) {
        // Ocultar todos los elementos y desactivar los indicadores.
        carouselItems.forEach(function (item, i) {
            item.classList.remove("active");
            carouselIndicators[i].classList.remove("active");
        });

        // Actualizar el índice actual.
        currentIndex = (index + carouselItems.length) % carouselItems.length;

        // Mostrar el elemento con el índice actualizado y activar el indicador correspondiente.
        carouselItems[currentIndex].classList.add("active");
        carouselIndicators[currentIndex].classList.add("active");
    }
});

// Obtener los elementos de botones por su id.
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

// Agregar el evento de teclado para el botón Prev.
prevButton.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    // Lógica para ir a la sección previa.
    // Aquí se puedes llamar a la función o ejecutar el código necesario para navegar a la sección previa.
  }
});

// Agregar el evento de teclado para el botón Next.
nextButton.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    // Lógica para ir a la siguiente sección.
    // Aquí se puede llamar a la función o ejecutar el código necesario para navegar a la siguiente sección.
  }
});