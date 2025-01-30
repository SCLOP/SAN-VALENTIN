 seas mi San Valentindocument.addEventListener("DOMContentLoaded", function() {
    let mensaje = "Corazon de mi vida, desde el primer momento en que entraste en mi vida, loa cambiaste para super mejor. En este San Valentín, quiero preguntarte algo especial... quieres ser mi San Valentin";
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
});

document.getElementById("btnSi").addEventListener("click", function() {
    document.getElementById("fireworks-container").style.display = "block";
    lanzarFuegosArtificiales();
    alert("¡Sabía que dirías que sí! 💙 Te amo miCorazon de melon.");
});

document.getElementById("btnNo").addEventListener("click", function() {
    alert("¿Estás segura? 🤔 Puedo darte más razones... como por ejemplo que yo te amo mucho mucho siempre mas 1 💕");
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
