const nameOfPerson = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

fetch(`/api/profiles/${nameOfPerson}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const markup = `<li>${data.name}</li><li>${data.introText}</li><li>${data.age}</li><li>${data.height}</li><li>${data.weight}</li><li>${data.favouriteColour}</li><li>${data.favouriteCousin}</li>`;

    document.querySelector('ul.data').insertAdjacentHTML('beforeend', markup);
  })
  .catch((error) => console.log(error));
