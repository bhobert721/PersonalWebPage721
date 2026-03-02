window.onload = function () {
  const image = document.getElementById("oceanImage");

  fetch("https://api.seapics.com/v1/random?query=ocean")
    .then(response => response.json())
    .then(data => {
      image.src = data.image;
    })
    .catch(error => {
      console.log("Error loading image:", error);
    });
};
