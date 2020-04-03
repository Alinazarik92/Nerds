(function () {
  ymaps.ready(init);
  function init(){
    var mapCenter = [59.938631, 30.323055];
    if (window.innerWidth > 1280) {
      mapCenter = [59.938631, 30.320168];
    }
    var myMap = new ymaps.Map("map", {
      center: mapCenter,
      zoom: 17
    }, {
      autoFitToViewport: "always"
    }),
    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: "default#image",
      iconImageHref: "../img/map-pin-mobile.png",
      iconImageSize: [55, 53],
      iconImageOffset: [-27, -50]
    });
    myMap.geoObjects.add(myPlacemark);
    window.addEventListener("resize", function() {
      myMap.setCenter([59.938631, 30.323055]);
      if (window.innerWidth > 1280) {
        myMap.setCenter([59.938631, 30.320168]);
      }
    });
  }
})();

(function () {
  var nav = document.querySelector(".main-nav");
  var toggle = nav.querySelector(".main-nav__burger");

  nav.classList.remove("main-nav--nojs");

  var onClickToggle = function (evt) {
    evt.preventDefault();
    nav.classList.toggle("main-nav--opened");
  };

  toggle.addEventListener("click", onClickToggle);
})();

(function () {
  var form = document.querySelector(".form");

  if (!form) {
    return;
  }

  var btn = form.querySelector(".button");
  var inputNameCat = form.querySelector("#name");
  var inputWeight = form.querySelector("#weight");
  var inputName = form.querySelector("#email");
  var inputTel = form.querySelector("#tel");

  var onInputChange = function (evt) {
    if(evt.target.id === "name") {
      inputNameCat.classList.toggle("cat-data__input--error", false);
      inputNameCat.removeEventListener("change", onInputChange);
    }

    if(evt.target.id === "weight") {
      inputWeight.classList.toggle("cat-data__input--error", false);
      inputWeight.removeEventListener("change", onInputChange);
    }

    if(evt.target.id === "email") {
      inputName.classList.toggle("user-data__input--error", false);
      inputName.removeEventListener("change", onInputChange);
    }

    if(evt.target.id === "tel") {
      inputTel.classList.toggle("user-data__input--error", false);
      inputTel.removeEventListener("change", onInputChange);
    }
  };

  var onClickButton = function (evt) {
    if (!inputNameCat.value) {
      evt.preventDefault();
      inputNameCat.classList.add("cat-data__input--error");
      inputNameCat.addEventListener("change", onInputChange);
    }

    if (!inputWeight.value) {
      evt.preventDefault();
      inputWeight.classList.add("cat-data__input--error");
      inputWeight.addEventListener("change", onInputChange);
    }

    if (!inputName.value) {
      evt.preventDefault();
      inputName.classList.add("user-data__input--error");
      inputName.addEventListener("change", onInputChange);
    }

    if (!inputTel.value) {
      evt.preventDefault();
      inputTel.classList.add("user-data__input--error");
      inputTel.addEventListener("change", onInputChange);
    }
  };

  btn.addEventListener("click", onClickButton);
})();
