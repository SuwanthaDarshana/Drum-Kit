//Detectingg button press
var NumberOfDrumButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < NumberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML; //when clicked this inner html button

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key); //when key pressed

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed"); //pressed is a css claas

  //time out function

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
