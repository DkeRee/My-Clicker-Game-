var startButton = document.getElementById("button");
var secondButton = document.getElementById("second-button");
var thirdButton = document.getElementById("best-button");
startButton.addEventListener("click", start);
var text = document.getElementById("text");
var number = 30;
var score = 0;

function start(){
  var loop = setInterval(function(){
  var music = document.getElementById("audio");
  music.play();
    text.innerText = number-- + " Seconds";
  }, 1000);
    setTimeout(function(){
      setTimeout(function(){
        clearInterval(loop);
        startButton.style.display = 'block';
        secondButton.style.display = 'none';
        text.innerText = "30 Seconds";
        var updateScore = document.getElementById("score");
        updateScore.innerText = "Score: 0";
        alert("Thanks for playing! You score a whopping " + score + " clicks! Press 'Click To Start' to trying again!");
        number = 30;
        score = 0;
    }, 30000);
  }, 1900);
  
  startButton.style.display = 'none';
  secondButton.style.display = 'block';
}

function count(){
  var secondButton = document.getElementById("second-button");
  secondButton.style.transform = `translate(${Math.floor(Math.random() * 850)}px, ${Math.floor(Math.random() * 650)}px)`;
  score++;
}

setInterval(function(){
  var updateScore = document.getElementById("score");
  updateScore.innerText = "Score: " + score;
})

function kill(){
  var score = document.getElementById("score");
  var yes = document.getElementById("yes");
  thirdButton.style.display = 'none';
  var music = document.getElementById("better-audio");
  music.play();
  startButton.style.display = 'none';
  secondButton.style.display = 'none';
  text.style.display = 'none';
  score.style.display = 'none';
  yes.style.display = 'block';
}