window.onload = function () {
  alert("JS is working");

  const image = document.getElementById("oceanImage");

  if (image) {
    image.src = "https://picsum.photos/400/300";
  } else {
    alert("Image not found");
  }
};
