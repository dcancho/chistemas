const menu = document.querySelector('.spamer');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEntreno = document.querySelector('.preentreno');
const btnCreatina = document.querySelector('.creatina');
const btnPackss = document.querySelector('.packss');
const btnGanadorpeso = document.querySelector('.ganadorpeso');
const contenedorArticulos = document.querySelector('.articulos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    articulos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');

    // while(navegacion.children[5]){
    //     navegacion.removeChild(navegacion.children[5]);
    // }
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});


imagenes.forEach(imagen=>{
   
    observer.observe(imagen);
});

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');  
        boton.remove();
    }
}

const articulos = () =>{
    let articulosArreglo = [];
    const articulos = document.querySelectorAll('.articulo');

    articulos.forEach(articulo=> articulosArreglo = [...articulosArreglo,articulo]);

    const preentrenos = ArticulosArreglo.filter(preentreno=> preentreno.getAttribute('data-articulo') === 'preentreno');
    const creatinas = articulosArreglo.filter(creatina => creatina.getAttribute('data-articulo') === 'creatina');
    const packs = articulosArreglo.filter(pack => pack.getAttribute('data-articulo') === 'packss');
    const ganadores = articulosArreglo.filter(ganador=> ganador.getAttribute('data-articulo') === 'ganadorpeso');

    mostrarArticulos(preentrenos, creatinas, packs, ganadores, articulosArreglo);

}

const mostrarArticulos = (preentrenos, creatinas, packs, ganadores, todos) =>{
    btnEntreno.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        preentrenos.forEach(ensalada=> contenedorArticulos.appendChild(ensalada));
    });

    btnCreatina.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        creatinas.forEach(creatina=> contenedorArticulos.appendChild(creatina));
    });

    btnPackss.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        packs.forEach(pack=> contenedorArticulos.appendChild(pack));
    });
    btnGanadorpeso.addEventListener('click', ()=>{
        limpiarHtml(contenedorArticulos);
        ganadores.forEach(ganador=> contenedorArticulos.appendChild(ganador));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorArticulos);
        todos.forEach(todo=> contenedorArticulos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}