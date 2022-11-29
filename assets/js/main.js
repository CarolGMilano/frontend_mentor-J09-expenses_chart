let barra = document.querySelectorAll('.semana__barra');
let valor = document.querySelectorAll('.semana__gasto');

var sistema = new Date();
var dia = sistema.getDay();

barra[dia].style.background = 'var(--azul_bebe)';

barra.forEach((bar, pos) => {
    bar.addEventListener('mouseover', function () {
        valor[pos].classList.remove('none')
        valor[pos].classList.add('visivel')
    })

    bar.addEventListener('mouseout', function () {
        valor[pos].classList.add('none')
        valor[pos].classList.remove('visivel')
    })
})