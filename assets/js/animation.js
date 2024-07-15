document.addEventListener("DOMContentLoaded", function() {
    var animatedText = document.getElementById('animatedText');
    var textToAnimate = "SOMOS KAI TRAVEL";
    var currentIndex = 0;
    var isErasing = false;
    var animationTimer;

    function animateText() {
        if (!isErasing && currentIndex < textToAnimate.length) {
            animatedText.textContent += textToAnimate[currentIndex];
            currentIndex++;
            animationTimer = setTimeout(animateText, 100); // Ajusta el tiempo de espera entre letras
        } else if (currentIndex === textToAnimate.length && !isErasing) {
            isErasing = true;
            animationTimer = setTimeout(eraseText, 1500); // Espera 1.5 segundos antes de borrar el texto
        }
    }

    function eraseText() {
        animatedText.textContent = animatedText.textContent.slice(0, -1);
        if (animatedText.textContent !== "HOLA, " && isErasing) {
            animationTimer = setTimeout(eraseText, 50); // Ajusta el tiempo de espera entre letras borradas
        } else {
            currentIndex = 0;
            isErasing = false;
            animationTimer = null;
            setTimeout(animateText, 1000); // Espera 1 segundo antes de iniciar la animación de escritura de nuevo
        }
    }

    animateText();

    // Detener la animación al salir de la página
    window.addEventListener("visibilitychange", function() {
        if (document.visibilityState === "hidden") {
            clearTimeout(animationTimer);
        } else {
            animateText();
        }
    });
});
