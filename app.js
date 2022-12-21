fetch('http://localhost:4000/people')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = `<li>${user.name}</li>`;

      document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    });
  })
  .catch((error) => console.log(error));
