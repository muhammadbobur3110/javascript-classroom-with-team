var elForm = document.querySelector(`.temperature-form`);
var elInput = elForm.querySelector(`.temperature-input`);
var elResult = elForm.querySelector(`.temperature-result`);

elForm.addEventListener(`submit`, function (evt){
  evt.preventDefault();

  elResult.textContent = Math.round((elInput.value * 9 / 5) + 32);

  if (elInput.value === ``){
    elResult.textContent = `Raqam kiriting`;
  }

  else if (isNaN(elInput.value)){
    elResult.textContent = `error 404 not found`
  }
});


var elFormCounter = document.querySelector(`.js-form`);
var elInputCounter = document.querySelector(`.js-input`);
var elResultOnFoot = document.querySelector(`.js-result__onfoot`);
var elResultBicycle = document.querySelector(`.js-result__bicycle`);
var elResultCar = document.querySelector(`.js-result__car`);
var elResultPlane = document.querySelector(`.js-result__plane`);

var elOnFoot = 3.6;
var elBicycle = 20.1;
var elCar = 70;
var elPlane = 800;

elFormCounter.addEventListener(`submit`, function(evt){
  evt.preventDefault();
  var DistanceOnFoot = Math.round(elInputCounter.value / elOnFoot);
  elResultOnFoot.textContent = DistanceOnFoot

  var DistanceOnBicycle = Math.round(elInputCounter.value / elBicycle);
  elResultBicycle.textContent = DistanceOnBicycle

  var DistanceOnCar = Math.round(elInputCounter.value / elCar);
  elResultCar.textContent = DistanceOnCar

  var DistanceOnPlane = Math.round(elInputCounter.value / elPlane);
  elResultPlane.textContent = DistanceOnPlane;
})