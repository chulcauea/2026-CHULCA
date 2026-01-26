// 1. Arreglo inicial con el nuevo campo "contenido"
const arreglos = [
    {
        nombre: "Eternidad de Seda",
        precio: 35.00,
        descripcion: "Artificial",
        contenido: "Rosas de tela premium, follaje sintético y lazo decorativo.", // Nuevo campo
        detalles: "Dura para siempre.",
        url: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=200"
    },
    {
        nombre: "Brisa de Primavera",
        precio: 50.00,
        descripcion: "Natural",
        contenido: "10 Tulipanes frescos, eucalipto y papel coreano.", // Nuevo campo
        detalles: "Fragancia intensa.",
        url: "https://floryencanto.cl/wp-content/uploads/2024/10/RAMO-DE-10-TULIPANES-CON-EUCALIPTO-2.png"
    }
];

const listaUl = document.getElementById('lista-productos');
const btnAgregar = document.getElementById('btn-agregar');

// 2. Función de Renderizado Actualizada
function renderizarCatalogo() {
    listaUl.innerHTML = "";

    arreglos.forEach((item) => {
        const li = document.createElement('li');
        
        const esNatural = item.descripcion.toLowerCase().includes('natural');
        const colorPrincipal = esNatural ? '#4CAF50' : '#E91E63'; 
        const fondoSuave = esNatural ? 'rgba(232, 245, 233, 0.9)' : 'rgba(252, 228, 236, 0.9)';

        li.style.backgroundColor = fondoSuave;
        li.style.borderLeft = `8px solid ${colorPrincipal}`;
        li.style.borderRadius = "15px";
        li.style.padding = "20px";
        li.style.margin = "15px 0";
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        li.style.transition = "transform 0.3s ease";
        li.style.listStyle = "none";
        li.style.backdropFilter = "blur(5px)";

        // En el innerHTML agregamos la parte de "Contenido"
        li.innerHTML = `
            <img src="${item.url}" alt="${item.nombre}" 
                 style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <div style="margin-left: 20px;">
                <h2 style="margin: 0; color: #333; font-family: 'Playfair Display', serif;">${item.nombre}</h2>
                <span style="background: ${colorPrincipal}; color: white; padding: 3px 10px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase; display: inline-block; margin-top: 5px;">
                    ${item.descripcion}
                </span>
                <p style="color: #444; margin: 10px 0; font-size: 0.9rem; line-height: 1.4;">
                    <strong>Incluye:</strong> ${item.contenido}
                </p>
                <p style="font-weight: bold; font-size: 1.2rem; color: #2d1a42; margin: 0;">$${item.precio.toFixed(2)}</p>
            </div>
        `;

        li.onmouseover = () => li.style.transform = "scale(1.02)";
        li.onmouseout = () => li.style.transform = "scale(1)";
        
        listaUl.appendChild(li);
    });
}

// 3. Captura del formulario (Actualizada con inputContenido)
btnAgregar.addEventListener('click', () => {
    const nombre = document.getElementById('inputNombre').value;
    const precio = document.getElementById('inputPrecio').value;
    const desc = document.getElementById('inputDesc').value;
    const contenido = document.getElementById('inputContenido').value; // Capturamos el contenido
    const url = document.getElementById('inputUrl').value;

    if (nombre && precio && url && contenido) {
        arreglos.push({
            nombre: nombre,
            precio: parseFloat(precio),
            descripcion: desc,
            contenido: contenido, // Guardamos el contenido en el objeto
            url: url
        });
        renderizarCatalogo();
        limpiarCampos();
    } else {
        alert("¡Por favor, completa todos los campos, incluyendo qué incluye el arreglo!");
    }
});

// Función para limpiar campos (incluyendo el textarea)
function limpiarCampos() {
    document.getElementById('inputNombre').value = "";
    document.getElementById('inputPrecio').value = "";
    document.getElementById('inputDesc').value = "";
    document.getElementById('inputContenido').value = "";
    document.getElementById('inputUrl').value = "";
}

// Inicializar
renderizarCatalogo();