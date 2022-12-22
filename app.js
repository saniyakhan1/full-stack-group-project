const apiRoute = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

fetch(`/api/profiles/${apiRoute}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const markup = `<li>${data.name}</li><li>${data.introText}</li>`;
    document.querySelector('ul.data').insertAdjacentHTML('beforeend', markup);
  })
  .catch((error) => console.log(error));
