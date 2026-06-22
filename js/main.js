// ============================================
// MENÚ HAMBURGUESA PARA MÓVILES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            
            // Cambiar ícono
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('open')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });

        // Cerrar menú al hacer clic en un enlace (móvil)
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            });
        });
    }

    // ============================================
    // DESTACAR ENLACE ACTIVO EN EL MENÚ
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ============================================
    // SCROLL SUAVE PARA ANCLAS (si las hay)
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // EFECTO DE CARGA (opcional)
    // ============================================
    console.log('EMISAB - CONSULTORES & ASOCIADOS');
    console.log('Sitio web cargado correctamente.');
});

// ============================================
// LIGHTBOX PARA IMÁGENES DE CONVOCATORIAS
// ============================================
function abrirLightbox(imgElement) {
    // Verificar si ya existe el overlay
    let overlay = document.querySelector('.lightbox-overlay');
    
    // Si no existe, crearlo
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        
        // Botón de cerrar
        const closeBtn = document.createElement('button');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Cerrar imagen');
        closeBtn.onclick = function(e) {
            e.stopPropagation();
            cerrarLightbox();
        };
        
        overlay.appendChild(closeBtn);
        document.body.appendChild(overlay);
    }
    
    // Limpiar contenido anterior (excepto el botón cerrar)
    const closeBtn = overlay.querySelector('.lightbox-close');
    overlay.innerHTML = '';
    overlay.appendChild(closeBtn);
    
    // Crear imagen ampliada
    const imgClone = document.createElement('img');
    imgClone.src = imgElement.src;
    imgClone.alt = imgElement.alt;
    overlay.appendChild(imgClone);
    
    // Mostrar overlay
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarLightbox() {
    const overlay = document.querySelector('.lightbox-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Cerrar al hacer clic en el fondo (no en la imagen)
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        const overlay = document.querySelector('.lightbox-overlay');
        if (overlay && overlay.classList.contains('active')) {
            // Verificar si el clic fue en el overlay (fondo) y no en la imagen o el botón
            if (e.target === overlay) {
                cerrarLightbox();
            }
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarLightbox();
        }
    });
});