let wins = 0;
let losses = 0;
let userThrow = "";
let userName;
let consent = confirm("Mind if I ask your name?");
if (consent == true) {
    userName = prompt("What's your name, cowboy?");
}
function rPSThrow(){
    if (userName == null) {
        userThrow = prompt("What'll it be, cowboy?");
    } else {
        userThrow = prompt("What'll it be, " + userName + "?");
    }
    if (userThrow == "paper" || userThrow == "Paper") {
        const paperSound = new Audio("https://www.fesliyanstudios.com/play-mp3/1668");
        paperSound.play();
        alert("You've got me surrounded! Foiled again!");
        alert("VICTORY");
        losses++;
        alert("You've beaten me " + losses + " time(s)")
    } else if (userThrow == "scissors" || userThrow == "Scissors") {
        const scissorsSound = new Audio("https://www.myinstants.com/media/sounds/whomp-sound.mp3");
        scissorsSound.play();
        setTimeout(1000);
        alert("Your sharp wits have been stymied again!");
        alert("DEFEAT");
        wins++;
        alert("You've been defeated " + wins + " time(s)")
    } else if (userThrow == "Spock" || "spock" || "Lizard" || "lizard" || "Dynamite" || "dynamite" || "Bomb" || "bomb") {
        alert("Nice try, but that's not a legal throw!")
        const niceTry = new Audio("https://www.myinstants.com/media/sounds/the-price-is-right-losing-horn.mp3");
        niceTry.play();
    } else {
        alert("I didn't hear you, what was that? Try again");
        rPSThrow();
    }
}
