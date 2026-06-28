// --- 1. INYECTAR DATOS DESDE datos.js ---
// Generar la Galería dinámicamente
const contenedorGaleria = document.getElementById('galeria');
let htmlGaleria = '';

datosPlasmarte.obras.forEach(obra => {
    // Si la obra no tiene año o dimensiones, le asignamos un string vacío
    const anoObra = obra.ano ? obra.ano : '';
    const dimObra = obra.dimensiones ? obra.dimensiones : '';

    htmlGaleria += `
        <div class="obra ${obra.formatoVisual}" 
             data-categoria="${obra.categoria}" 
             data-descripcion="${obra.descripcion}"
             data-ano="${anoObra}"
             data-dimensiones="${dimObra}">
            <img src="${obra.imagen}" alt="${obra.titulo}">
            <div class="obra-info"><h3>${obra.titulo}</h3></div>
        </div>
    `;
});

// Inyecto todo el HTML de golpe en el contenedor
contenedorGaleria.innerHTML = htmlGaleria;

// --- LÓGICA DE FILTROS Y BOTONES "VER MÁS" / "VER MENOS" ---
const obras = document.querySelectorAll('.obra');
const cantidadInicial = 9;
let limiteObras = cantidadInicial; 
const btnVerMas = document.getElementById('btn-ver-mas');
const btnVerMenos = document.getElementById('btn-ver-menos'); // Referencia al nuevo botón

function renderizarGaleria() {
    const categoriaActiva = document.querySelector('.btn-filtro.active').getAttribute('data-categoria');
    let obrasVisiblesContador = 0;

    obras.forEach(obra => {
        const coincide = categoriaActiva === 'todos' || obra.getAttribute('data-categoria') === categoriaActiva;
        
        if (coincide) {
            if (obrasVisiblesContador < limiteObras) {
                obra.style.display = 'block';
            } else {
                obra.style.display = 'none';
            }
            obrasVisiblesContador++;
        } else {
            obra.style.display = 'none';
        }
    });

    // Lógica para mostrar/ocultar "Ver más"
    if (obrasVisiblesContador <= limiteObras) {
        btnVerMas.style.display = 'none';
    } else {
        btnVerMas.style.display = 'inline-block';
    }

    // Lógica para mostrar/ocultar "Ver menos" (solo aparece si ampliamos el límite)
    if (limiteObras > cantidadInicial) {
        btnVerMenos.style.display = 'inline-block';
    } else {
        btnVerMenos.style.display = 'none';
    }
}

// Al cargar la web, aplicar lógica
renderizarGaleria();

// Al hacer click en "Ver Más"
btnVerMas.addEventListener('click', () => {
    limiteObras += 9; 
    renderizarGaleria();
});

// Al hacer click en "Ver Menos"
btnVerMenos.addEventListener('click', () => {
    limiteObras = cantidadInicial; // Volvemos al límite original de 9
    renderizarGaleria();
    
    // Desliza la pantalla suavemente hasta el inicio de la galería
    document.getElementById('galeria').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Lógica al clickear los botones de filtros
document.querySelectorAll('.btn-filtro').forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelector('.btn-filtro.active').classList.remove('active');
        boton.classList.add('active');
        limiteObras = cantidadInicial; // Reseteamos al límite inicial al cambiar de filtro
        renderizarGaleria();
    });
});

// --- LÓGICA DEL LIGHTBOX ---
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const captionText = document.getElementById('caption-lightbox');
const descText = document.getElementById('desc-lightbox');
const metaAno = document.getElementById('meta-ano');
const metaDim = document.getElementById('meta-dim');
const btnCerrar = document.querySelector('.cerrar-lightbox');
const btnComprar = document.getElementById('btn-comprar-lightbox');

// Variables para el botón de ocultar panel
const btnToggleInfo = document.getElementById('btn-toggle-info');
const iconoToggle = document.getElementById('icono-toggle');
const lightboxSidebar = document.getElementById('lightbox-sidebar');

const numeroWhatsApp = "5491130114105";

obras.forEach(obra => {
    obra.addEventListener('click', () => {
        const img = obra.querySelector('img');
        const titulo = obra.querySelector('h3').innerText;
        const descripcion = obra.getAttribute('data-descripcion') || ''; 
        const ano = obra.getAttribute('data-ano') || '';
        const dim = obra.getAttribute('data-dimensiones') || '';
        
        lightbox.style.display = 'flex'; 
        imgAmpliada.src = img.src;
        captionText.innerHTML = titulo;
        descText.innerHTML = descripcion; 
        
        // Formatear los metadatos (solo los mostramos si tu papá los cargó en datos.js)
        metaAno.innerHTML = ano ? `Año: ${ano}` : '';
        metaDim.innerHTML = dim ? ` | Dimensiones: ${dim}` : '';
        // Limpiamos el separador " | " si no hay año pero sí hay dimensión
        if (!ano && dim) metaDim.innerHTML = `Dimensiones: ${dim}`;

        // Reseteamos el panel para que siempre aparezca visible al abrir una obra nueva
        lightboxSidebar.classList.remove('oculto');
        iconoToggle.classList.remove('fa-eye');
        iconoToggle.classList.add('fa-eye-slash');

        const mensaje = `¡Hola Carlos! Estuve viendo tu portfolio y me interesa consultar por la obra: "${titulo}".`;
        btnComprar.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    });
});

// Lógica para el botón del ojito (Ocultar/Mostrar Info)
btnToggleInfo.addEventListener('click', () => {
    lightboxSidebar.classList.toggle('oculto');
    
    // Cambiamos el ícono del botón
    if (lightboxSidebar.classList.contains('oculto')) {
        iconoToggle.classList.remove('fa-eye-slash');
        iconoToggle.classList.add('fa-eye'); // Ícono de ojo abierto
    } else {
        iconoToggle.classList.remove('fa-eye');
        iconoToggle.classList.add('fa-eye-slash'); // Ícono de ojo tachado
    }
});

btnCerrar.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => { 
    // Ahora cerramos solo si hace click en el fondo oscuro, no en los paneles blancos
    if (e.target === lightbox) lightbox.style.display = 'none'; 
});
document.addEventListener('keydown', (e) => { if (e.key === "Escape") lightbox.style.display = 'none'; });

// --- LÓGICA DEL BOTÓN VOLVER ARRIBA ---
const btnVolverArriba = document.getElementById('btn-volver-arriba');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnVolverArriba.classList.add('mostrar'); // Agrega la clase con opacity 1
    } else {
        btnVolverArriba.classList.remove('mostrar'); // Saca la clase y vuelve a opacity 0
    }
});

btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// --- PROTECCIÓN DE IMÁGENES ---
// Bloquear el clic derecho en todas las imágenes de la página
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Evita que se abra el menú de "Guardar imagen"
    }
});