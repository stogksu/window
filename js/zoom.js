const photoLink = document.querySelectorAll(".foto-link");
const photoWork = document.querySelectorAll(".foto-work");
const zoomPhoto = document.querySelector(".modal-work");
const fullPhoto = document.querySelector(".full-foto");
const nextPhoto = document.querySelector(".next-photo");
const prevPhoto = document.querySelector(".prev-photo");
const slideClose = document.querySelector(".modal-work-close");

function setPhoto(i) {
  if (i === 0) {
    zoomPhoto.classList.add("modal-work-is-first-slide");
  } else {
    zoomPhoto.classList.remove("modal-work-is-first-slide");
  }

  if (i === slidesCount - 1) {
    zoomPhoto.classList.add("modal-work-is-last-slide");
  } else {
    zoomPhoto.classList.remove("modal-work-is-last-slide");
  }
  fullPhoto.src = photoWork[activeSlideIndex].src;
}

const slidesCount = photoLink.length;
let activeSlideIndex = 0;
setPhoto(activeSlideIndex);

nextPhoto.onclick = function(e) {
  e.preventDefault();
  activeSlideIndex++;
  setPhoto(activeSlideIndex);
}

prevPhoto.onclick = function(e) {
  e.preventDefault();
  activeSlideIndex--;
  setPhoto(activeSlideIndex);
}

slideClose.onclick = function(e){
  e.preventDefault();
  zoomPhoto.classList.remove("modal-work-opened");
}

for (let i = 0; i < slidesCount; i++) {
  photoLink[i].addEventListener('click', function(e) {
    zoomPhoto.classList.add("modal-work-opened");
    e.preventDefault();
    activeSlideIndex = i;
    setPhoto(activeSlideIndex);
  });
}

