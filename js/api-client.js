const nameOfPerson = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

const getData = async () => {
  return await fetch(`/api/profiles/${nameOfPerson}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};
