function initProductsNavigation() {
  const nav = document.querySelectorAll(".nav-list");
  const productInfo = document.querySelectorAll(".product-item");

  for (let i = 0; i < nav.length; i++) {
    nav[i].onclick = function(e) {
      e.preventDefault();
      let activeProduct = document.querySelector(".selected");
      activeProduct.classList.remove("selected");
      productInfo[i].classList.add("selected");
    }
  }
}


function initCallBlock() {
  const freeCall = document.querySelectorAll(".free-call");
  const popUp = document.querySelector(".popup-call");
  const popUpClose = document.querySelector(".popup-call-close");

  document.addEventListener('keydown',function(e){
      if(e.keyCode === 27){
          popUp.classList.remove("popup-opened");
      }
  })

  popUpClose.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.remove("popup-opened");
  })

  for(let j=0; j<freeCall.length; j++){
      freeCall[j].onclick = function(e){
          e.preventDefault();
          popUp.classList.add("popup-opened");
        }
    }
}


