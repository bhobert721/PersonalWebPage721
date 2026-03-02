function getOceanImage() {
  const image = document.getElementById("oceanImage");

  // Random number prevents caching
  const randomNum = new Date().getTime();

  image.src = "https://source.unsplash.com/400x300/?ocean,beach&" + randomNum;
}

// Load one automatically when page opens
getOceanImage();
