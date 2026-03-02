window.onload = function () {
  const image = document.getElementById("oceanImage");

  const randomNum = new Date().getTime();

  image.src = "https://source.unsplash.com/400x300/?ocean,beach&" + randomNum;
};
