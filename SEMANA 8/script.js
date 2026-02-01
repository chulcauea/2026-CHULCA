// 1. Botón de Alerta Personalizada (Consejos de cuidado)
document.getElementById('btnCuidados').addEventListener('click', function() {
    alert("🌸 Tip de Eterna Flor: ¡No las riegues! Mantén tus flores lejos de la humedad y del sol directo para que duren años.");
});

// 2. Validación del Formulario
const form = document.getElementById('formFlores');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío automático
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validación dinámica
    if (nombre.length < 3) {
        mostrarMensaje("El nombre es demasiado corto", "danger");
        return;
    }

    if (!email.includes("@")) {
        mostrarMensaje("Por favor, ingresa un correo electrónico válido", "danger");
        return;
    }

    if (mensaje.trim() === "") {
        mostrarMensaje("Cuéntanos qué flores te gustarían", "danger");
        return;
    }

    // Si todo está correcto
    mostrarMensaje("¡Gracias " + nombre + "! Hemos recibido tu pedido. Te contactaremos pronto.", "success");
    form.reset();
});

// Función auxiliar para mostrar mensajes
function mostrarMensaje(texto, tipo) {
    feedback.textContent = texto;
    feedback.className = `alert mt-3 alert-${tipo}`;
    feedback.classList.remove('d-none');
}