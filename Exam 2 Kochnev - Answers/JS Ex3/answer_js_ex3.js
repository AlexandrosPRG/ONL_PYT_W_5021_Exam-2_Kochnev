'use strict';

// films from link
fetch('https://fer-api.coderslab.pl/v1/be-exam/movies')
  .then(response => response.json())
  .then(data => {
    console.log(data);


    const container = document.createElement('div');
    container.classList.add('movies');


    for (const movie of data) {
      const h2 = document.createElement('h2');
      h2.textContent = movie.title;

      const h3 = document.createElement('h3');
      h3.textContent = movie.year;

      container.appendChild(h2);
      container.appendChild(h3);
    }

    // put films to page
    document.body.appendChild(container);
  })
  .catch(err => console.error('Chyba:', err));
