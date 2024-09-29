let xRotation = 0;
let yRotation = 0;
let lastTouchX = 0;
let lastTouchY = 0;
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

/* Détection si l'appareil est mobile ou ordinateur */
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

/* Ordinateur : Rotation avec les flèches du clavier */
if (!isMobileDevice()) {
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'ArrowUp':
                xRotation += 90;
                break;
            case 'ArrowDown':
                xRotation -= 90;
                break;
            case 'ArrowLeft':
                yRotation -= 90;
                break;
            case 'ArrowRight':
                yRotation += 90;
                break;
        }
        document.querySelector('.cube').style.transform =
            `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    });
}

/* Mobile : Rotation avec slide */
if (isMobileDevice()) {
    const scene = document.querySelector('.scene');

    scene.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
    });

    scene.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        let deltaX = touch.clientX - lastTouchX;
        let deltaY = touch.clientY - lastTouchY;

        yRotation += deltaX * 0.5;
        xRotation -= deltaY * 0.5;

        document.querySelector('.cube').style.transform =
            `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

        lastTouchX = touch.clientX;
        lastTouchY = touch.clientY;
    });
}
/* Section fléches pour experience pro */

const cards = document.querySelectorAll('.experience-card');
let currentCard = 0;

// Fonction pour afficher la carte actuelle
function showCard(index) {
    cards.forEach((card) => card.classList.remove('active'));
    cards[index].classList.add('active');
}

// Flèche suivante
document.getElementById('nextArrow').addEventListener('click', () => {
    currentCard = (currentCard + 1) % cards.length;
    showCard(currentCard);
});

// Flèche précédente
document.getElementById('prevArrow').addEventListener('click', () => {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    showCard(currentCard);
});

// Initialiser la première carte visible
showCard(currentCard);

/* end  experience pro */

/* event listener for the circle animation */
const bg = document.getElementById('circle1');

document.addEventListener('pointermove', (e) => {
    bg.style.display = 'block';
    bg.animate ({
        top: e.pageY + 'px',
        left: e.pageX + 'px'
    }, {
        duration: 1000,
        fill: 'forwards'
    })
})



