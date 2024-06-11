var randomNumber1 = Math.floor(Math.random() * 6)+ 1;
var randomDiceImage = "images/" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImage);
       
var randomNumber2 = Math.floor(Math.random() * 6)+ 1;
var randomDiceImage2 = "images/" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage2);

const refreshButton = document.getElementById("refresh-btn");
refreshButton.addEventListener("click", function() {
    location.reload();
  });
