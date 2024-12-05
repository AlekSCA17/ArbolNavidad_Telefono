const main = document.querySelector('main');
const numberOfStrands = 12; // Número de cadenas (hileras)
const bulbsPerStrand = 30; // Número de bombillas por cadena

// Generar las cadenas y bombillas
for (let i = 0; i < numberOfStrands; i++) {
    const ul = document.createElement('ul');
    for (let j = 0; j < bulbsPerStrand; j++) {
        const li = document.createElement('li');
        ul.appendChild(li);
    }
    main.appendChild(ul);
}

// Aplicar las transformaciones y animaciones
const strands = document.querySelectorAll('ul');
const duration = 3000;

strands.forEach((strand, i) => {
    strand.style.transform = `rotateY(${(-i / strands.length) + 0.2}turn) rotateX(22deg)`;

    const bulbs = strand.querySelectorAll('li');
    bulbs.forEach((bulb, j) => {
        bulb.style.transform = `scale(${1 + j * 0.02})`;

        bulb.animate(
            [
                { background: "var(--back)" },
                { background: "var(--back)", offset: 0.9 },
                { background: "var(--fore)", offset: 0.95 },
                { background: "var(--fore)" }
            ],
            {
                duration,
                delay: (j * 2.25 * duration) / bulbs.length - 3000,
                iterations: Infinity,
                easing: "cubic-bezier(0, 0.5, 0.5, 1)"
            }
        );
    });
});

//Animación de sonido
document.body.addEventListener('click', function() {
    const audio = document.querySelector('audio');
    audio.play();
});


// Función para crear nieve
const createSnow = (density) => {
    const mainContainer = document.querySelector('main'); // Asegúrate de usar un contenedor válido

    for (let i = 0; i < density; i++) {
        const snowFlake = document.createElement("span");
        const horizontalPosition = `${getRandomValue(100)}%`;
        const fallDelay = `${getRandomValue(10)}s`;
        const fallDuration = `${getRandomValue(20, 3)}s`;
        const flakeSize = `${getRandomValue(7, 1)}px`;
        const flakeOpacity = Math.random().toFixed(2);

        snowFlake.classList.add("snow");
        snowFlake.style.opacity = flakeOpacity;
        snowFlake.style.width = flakeSize;
        snowFlake.style.height = flakeSize;
        snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
        snowFlake.style.right = horizontalPosition;

        mainContainer.appendChild(snowFlake);
    }
};

// Función para obtener valores aleatorios
const getRandomValue = (max, min = 0) => Math.random() * (max - min) + min;

// Crear nieve con densidad de 50 copos
createSnow(50);
