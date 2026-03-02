window.onload = function () {
  const image = document.getElementById("oceanImage");

  fetch("https://picsum.photos/400/300")
    .then(response => {
      image.src = response.url;
    })
    .catch(error => {
      console.log("Error:", error);
    });
};
