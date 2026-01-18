const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");
const formulario = document.getElementById("formulario");

function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.className = "valido";
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalido";
        errorNombre.textContent = "Debe tener al menos 3 caracteres";
        return false;
    }
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        correo.className = "valido";
        errorCorreo.textContent = "";
        return true;
    } else {
        correo.className = "invalido";
        errorCorreo.textContent = "Correo electrónico inválido";
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length >= 8 && regex.test(password.value)) {
        password.className = "valido";
        errorPassword.textContent = "";
        return true;
    } else {
        password.className = "invalido";
        errorPassword.textContent = "Mínimo 8 caracteres, un número y un carácter especial";
        return false;
    }
}

function validarConfirmacion() {
    if (password.value === confirmar.value && confirmar.value !== "") {
        confirmar.className = "valido";
        errorConfirmar.textContent = "";
        return true;
    } else {
        confirmar.className = "invalido";
        errorConfirmar.textContent = "Las contraseñas no coinciden";
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valido";
        errorEdad.textContent = "";
        return true;
    } else {
        edad.className = "invalido";
        errorEdad.textContent = "Debe ser mayor o igual a 18 años";
        return false;
    }
}

function validarFormulario() {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
}

nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmar.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente ✅");
    formulario.reset();
    enviar.disabled = true;
});
