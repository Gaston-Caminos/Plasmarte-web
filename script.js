// --- LÓGICA DE FILTROS Y BOTÓN "VER MÁS" ---
let limiteObras = 9; // Cuántas obras mostrar inicialmente
const obras = document.querySelectorAll('.obra');
const btnVerMas = document.getElementById('btn-ver-mas');

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

    // Ocultar botón si ya no hay más para mostrar de esta categoría
    if (obrasVisiblesContador <= limiteObras) {
        btnVerMas.style.display = 'none';
    } else {
        btnVerMas.style.display = 'inline-block';
    }
}

// Al cargar la web, aplicar lógica
renderizarGaleria();

// Al hacer click en Ver Más
btnVerMas.addEventListener('click', () => {
    limiteObras += 9; // Mostrar 9 más
    renderizarGaleria();
});

// Lógica al clickear los botones de filtros
document.querySelectorAll('.btn-filtro').forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelector('.btn-filtro.active').classList.remove('active');
        boton.classList.add('active');
        limiteObras = 9; // Reseteamos el límite al cambiar de categoría
        renderizarGaleria();
    });
});

// --- LÓGICA DEL LIGHTBOX ---
const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const captionText = document.getElementById('caption-lightbox');
const descText = document.getElementById('desc-lightbox');
const btnCerrar = document.querySelector('.cerrar-lightbox');
const btnComprar = document.getElementById('btn-comprar-lightbox');
const numeroWhatsApp = "5491130114105";

obras.forEach(obra => {
    obra.addEventListener('click', () => {
        const img = obra.querySelector('img');
        const titulo = obra.querySelector('h3').innerText;
        const descripcion = obra.getAttribute('data-descripcion') || ''; 
        
        lightbox.style.display = 'flex'; // Usamos FLEX en vez de block para centrar
        imgAmpliada.src = img.src;
        captionText.innerHTML = titulo;
        descText.innerHTML = descripcion; // Inyectamos la descripción

        const mensaje = `¡Hola Carlos! Estuve viendo tu portfolio y me interesa consultar por la obra: "${titulo}".`;
        btnComprar.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    });
});

btnCerrar.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.style.display = 'none'; });
document.addEventListener('keydown', (e) => { if (e.key === "Escape") lightbox.style.display = 'none'; });