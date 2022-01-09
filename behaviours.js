/** navibar function **/

var naviBar = document.querySelector("#navibar");
naviBar.addEventListener("click", () => {
  console.log(111);
  var element = document.getElementById("navibar-content");
  if (element.className.indexOf("shown") == -1) {
    element.className += "shown";
  } else {
    element.className = element.className.replace("shown", "");
  }
});

/* portofolio */
var slideIndex = 1;
var isImages = 1;

var imagesButton = document.querySelector(".portofolio__buttons--images");
var videosButton = document.querySelector(".portofolio__buttons--videos");

imagesButton.addEventListener("click", () => {
  isImages = 1;

  var videos = document.getElementsByClassName("portofolio-video-block");
  for (i = 0; i < videos.length; i++) {
    //videos[i].attr("src", $("iframe").attr("src"));

    videos[i].src = videos[i].src;
  }

  if (imagesButton.className.indexOf("portofolio__buttons--active") == -1) {
    imagesButton.className += " portofolio__buttons--active";
    videosButton.className = videosButton.className.replace(
      "portofolio__buttons--active",
      ""
    );
    var imagesContainer = document.querySelector(
      ".portofolio__container__images"
    );
    var videosContainer = document.querySelector(
      ".portofolio__container__videos"
    );
    imagesContainer.className += " portofolio__container--shown";
    videosContainer.className = "portofolio__container__videos";
  }
});

videosButton.addEventListener("click", () => {
  isImages = 0;
  showSlides(slideIndex);
  if (videosButton.className.indexOf("portofolio__buttons--active") == -1) {
    videosButton.className += " portofolio__buttons--active";
    imagesButton.className = imagesButton.className.replace(
      "portofolio__buttons--active",
      ""
    );
    var imagesContainer = document.querySelector(
      ".portofolio__container__images"
    );
    var videosContainer = document.querySelector(
      ".portofolio__container__videos"
    );
    videosContainer.className += " portofolio__container--shown";

    imagesContainer.className = "portofolio__container__images";
  }
});
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slideName = isImages
    ? "portofolio-image-block"
    : "portofolio-video-block";
  var slides = document.getElementsByClassName(slideName);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
