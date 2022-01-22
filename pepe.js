const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
const puntito = document.querySelectorAll('.puntito')

punto.forEach((cadaPunto, i) => {
	cadaPunto.addEventListener('click', () => {
		let posicion = i;
		// posicion es 0 transformX es 0
		// posicion es 0 transformX es -50%
		let operacion = posicion * -50;
		console.log(operacion);

		grande.style.transform = `translateX(${operacion}%)`;

		punto.forEach((cadaPunto, i) => {
			punto[i].classList.remove('activo');
		});
		punto[i].classList.add('activo');
	});
});

// ARROW

puntito.forEach((cadaPunto, i) => {
	cadaPunto.addEventListener('click', () => {
		let posicion = i;
		// posicion es 0 transformX es 0
		// posicion es 0 transformX es -50%
		let operacion = posicion * -50;
		console.log(operacion);

		grande.style.transform = `translateX(${operacion}%)`;

		puntito.forEach((cadaPunto, i) => {
			punto[i].classList.remove('activo');
		});
		punto[i].classList.add('activo');
	});
});