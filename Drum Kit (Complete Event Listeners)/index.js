var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event) { 
    var drumLetter = this.innerHTML;
    makeSound (drumLetter);
    animationButton(drumLetter);
});
} 

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animationButton(event.key);
});

function makeSound(key){
    switch (key) {
        case "w" : var audio = new Audio('sounds/tom-1.mp3');
          break;
        case "a" : var audio = new Audio('sounds/tom-2.mp3');
          break;
        case "s" : var audio = new Audio('sounds/tom-3.mp3');
          break;
        case "d" : var audio = new Audio('sounds/tom-4.mp3');
          break;
        case "j" : var audio = new Audio('sounds/snare.mp3');
          break;
        case "k" : var audio = new Audio('sounds/crash.mp3');
          break;
        case "l" : var audio = new Audio('sounds/kick-bass.mp3');
          break;
        default : console.log("No sound file available");
          break;
    }
    audio.play();
}

function animationButton(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}