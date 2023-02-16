function loadPage() {
  document.getElementById("img1").setAttribute("src", "images/dice1.png");
  document.getElementById("img2").setAttribute("src", "images/dice1.png");
}

const img = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let diceImg1 = "";
  let diceImg2 = "";

  diceImg1 = img[getRandomNuber()];
  diceImg2 = img[getRandomNuber()];

  if (diceImg1 > diceImg2) {
    document.getElementById("text-win").innerHTML = "Player 1 won!";
  } else if (diceImg2 > diceImg1) {
    document.getElementById("text-win").innerHTML = "Player 2 won!";
  } else {
    document.getElementById("text-win").innerHTML = "This is a draw!";
  }

  document.getElementById("img1").setAttribute("src", diceImg1);
  document.getElementById("img2").setAttribute("src", diceImg2);
});

function getRandomNuber() {
  return Math.floor(Math.random() * img.length);
}
