document.addEventListener("DOMContentLoaded", function() {
    let mensaje = "Desde el primer momento en que entraste en mi vida la cambiaste por completo, llegaste para complementarnos y ser mejor ambas como un equipo, el mejor de todos. En este San Valentín, quiero preguntarle si usted hermosa señorita quiere ser mi San Valentin";
    let i = 0;
    let speed = 50;
    function escribirTexto() {
        if (i < mensaje.length) {
            document.getElementById("mensaje").innerHTML += mensaje.charAt(i);
            i++;
            setTimeout(escribirTexto, speed);
        }
    }
    escribirTexto();
 let contador = 1; // Contador de "Te amo"

    function crearTeAmo() {
        for (let i = 0; i < contador; i++) {
            let teAmo = document.createElement("div");
            teAmo.classList.add("te-amo");
            teAmo.textContent = "Te amo ❤️";

            // Posición aleatoria en la pantalla
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;

            teAmo.style.left = `${x}px`;
            teAmo.style.top = `${y}px`;

            document.body.appendChild(teAmo);

            // Eliminar después de unos segundos
            setTimeout(() => {
                teAmo.remove();
            }, 3000);
        }
        contador++; // Aumenta la cantidad de "Te amo"
    }

    // Agregar nuevas palabras cada 1.5 segundos
    setInterval(crearTeAmo, 1500);
    
});

document.getElementById("btnSi").addEventListener("click", function() {
    document.getElementById("fireworks-container").style.display = "block";
    lanzarFuegosArtificiales();
    alert("¡Sabía que dirías que sí! 💙 Te amo, Corazon de melon.");
});

document.getElementById("btnNo").addEventListener("click", function() {
    alert("¿Estás segura? 😨Pero si yo te amo mucho y puedo darte mis razones... como por ejemplo que te amo siempre simpre mas 1 💕 y que eres el amor de mi vida💕 ademas a quien quieres de san valentin aparte de mi tu amor de tu vida🙄 por que andas en este boton😲 ");
});

document.getElementById("muteBtn").addEventListener("click", function() {
    let music = document.getElementById("music");
    if (music.paused) {
        music.play();
        this.textContent = "🔊";
    } else {
        music.pause();
        this.textContent = "🔇";
    }
});

function lanzarFuegosArtificiales() {
    let container = document.getElementById("fireworks-container");
    let colors = ["#ff0000", "#ff6600", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
    
    for (let i = 0; i < 50; i++) {
        let firework = document.createElement("div");
        firework.style.position = "absolute";
        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * window.innerHeight + "px";
        firework.style.width = "10px";
        firework.style.height = "10px";
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.borderRadius = "50%";
        firework.style.animation = "explode 1s ease-out";
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

