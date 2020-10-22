export default 600;
require('./../img/eniac.png');
require('./../img/pc.png');
require('./../img/mycity.jpg');
require('./../img/white_house.jpg');
require('./../img/ice.jpg');
require('./../img/sea_rocks.jpg');
require('./../img/salt.png');
require('./../img/bike.jpg');
require('./../img/tend_camp.jpg');
require('./../img/cascade.jpeg');

/* const content = `
<h2 class="city__subtitle">
        Bogotá mi ciudad
      </h2>
      <img class="city__picture" src="static/mycity.jpg" alt="Bogota" />
      <p class="city__paragraph">
        Nací en la capital de Colombia, desde entonces he vivido en esta caótica
        pero linda ciudad, aunque la bandeja paisa es de otra región del país es
        mi comida preferida, me gusta viajar en moto y cuando quiero tener un
        reto en la casa armo un rompecabezas. El año 2020 es el año de la
        reinvención gracias a esta oportunidad de la vida ahora me dedico al
        desarrollo web.
      </p>
`;
document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('.pictures__index')
    .insertAdjacentHTML('afterbegin', content);
}); */

const hobbies = {
  city: {
    title: 'Bogotá mi ciudad',
    image: 'static/mycity.jpg',
    text:
      ' Nací en la capital de Colombia, desde entonces he vivido en esta caótica pero linda ciudad, aunque la bandeja paisa es de otra región del país es mi comida preferida, me gusta viajar en moto y cuando quiero tener un reto armo un rompecabezas. El año 2020 es el año de la reeinvención gracias a esta oportunidad de la vida ahora me dedico al desarrollo web.',
  },
};
var contenido = function (datos) {
  return `<h2 class="city__subtitle">${datos.title}</h2>
      <img class="city__picture" src=${datos.image} alt="Bogota" />
      <p class="city__paragraph">${datos.text}</p>`;
};

document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('.city')
    .insertAdjacentHTML('afterbegin', contenido(hobbies.city));
});
