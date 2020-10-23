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
require('./../img/cascade.jpg');
require('./../img/beach.jpg');

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
  pictures: [
    {
      url: 'static/white_house.jpg',
      alt: 'white house',
      weight: 1,
    },
    {
      url: 'static/ice.jpg',
      alt: 'ice',
      weight: 2,
    },
    {
      url: 'static/sea_rocks.jpg',
      alt: 'rocks',
      weight: 1,
    },
    {
      url: 'static/salt.png',
      alt: 'salt',
      weight: 2,
    },
    {
      url: 'static/bike.jpg',
      alt: 'bike',
      weight: 2,
    },

    {
      url: 'static/cascade.jpg',
      alt: 'water fall',
      weight: 1,
    },
    {
      url: 'static/tend_camp.jpg',
      alt: 'tend camp',
      weight: 2,
    },
    {
      url: 'static/beach.jpg',
      alt: 'in the beach',
      weight: 1,
    },
  ],
};
const contenido = function (datos) {
  return `<h2 class="city__subtitle">${datos.title}
    </h2>
      <img class="city__picture" src=${datos.image} alt="Bogota" />
      <p class="city__paragraph">${datos.text}</p>`;
};

function pictures(acc, pick) {
  return (
    acc +
    `   <div class="pictures__index--${pick.weight}">
          <img
            src=${pick.url}
            alt=${pick.alt}
            class="pictures__img"
          />
        </div>`
  );
}

const distribution = hobbies.pictures.reduce(pictures, '');

document.addEventListener('DOMContentLoaded', function (event) {
  document
    .querySelector('.city')
    .insertAdjacentHTML('afterbegin', contenido(hobbies.city));
  document
    .querySelector('.pictures__index')
    .insertAdjacentHTML('afterbegin', distribution);
});
