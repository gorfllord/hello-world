let wins = 0;
let losses = 0;
let ties = 0;
let userThrow = "";
let userName;
let throwResults = "";
let rockResults = "";
const paperSound = new Audio("https://www.fesliyanstudios.com/play-mp3/1667");
const scissorsSound = new Audio("https://www.myinstants.com/media/sounds/whomp-sound.mp3");
const rockSound = new Audio("all-right-we'll-call-it-a-draw.mp3");
const niceTry = new Audio("https://www.myinstants.com/media/sounds/the-price-is-right-losing-horn.mp3");
let consent = confirm("Mind if I ask your name?");
if (consent == true) {
    userName = prompt("What's your name, cowboy?");
} else {
    consent = confirm("Please?");
}
while (consent == false) {
    consent = confirm("Pretty please? I'd love to know your name!");
    if (consent == true) {
        userName = prompt("What's your name then, buckaroo?");
    }
}
function rockResultBuilder(){
    rockResults += "<img src='rock.svg'>";
}
function rPSThrow(){
    let howMany = prompt("How many times do you want to throw down?");
    for (let i = 0; i < howMany; i++) {
        if (userName == null || userName == "") {
            userThrow = prompt("What'll it be, cowboy?");
        } else {
            userThrow = prompt("What'll it be, " + userName + "?");
        }
        if (userThrow == "paper" || userThrow == "Paper") {
            alert("You've got me surrounded! Foiled again!");
            alert("VICTORY");
            losses++;
            alert("You've beaten me " + losses + " time(s)");
            throwResults += "<img src='paper.svg' onclick='paperSound.play();'>";
            rockResultBuilder();
        } else if (userThrow == "scissors" || userThrow == "Scissors") {
            alert("Your sharp wits have been stymied again!");
            alert("DEFEAT");
            wins++;
            alert("You've been defeated " + wins + " time(s)");
            throwResults += "<img src='scissors.svg' onclick='scissorsSound.play();'>";
            rockResultBuilder();
        } else if (userThrow == "Rock" || userThrow == "rock") {
            alert("Looks like we're stuck between a rock and a hard place!");
            alert("DRAW");
            ties++;
            alert("We've tied " + ties + " time(s)");
            throwResults += "<img src='rock.svg' onclick='rockSound.play();'>";
            rockResultBuilder();
        } else if (userThrow == "Spock" || userThrow == "spock" || userThrow == "Lizard" || userThrow == "lizard" || userThrow == "Dynamite" || userThrow == "dynamite" || userThrow == "Bomb" || userThrow == "bomb") {
            alert("Nice try, but that's not a legal throw!")
            throwResults += "<img src='wrong.svg' onclick='niceTry.play();'>";
            rockResultBuilder();
        } else {
            alert("I didn't hear you, what was that? Try again");
            i--;
        }
    }
    document.getElementById("rockThrows").innerHTML = "<h3>My Throws:</h3></p><p>" + rockResults;
    document.getElementById("results").innerHTML = "<h3>Your Throws:</h3></p><p>" + throwResults;
    
    
}
