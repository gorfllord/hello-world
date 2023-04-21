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
        alert("You've got me surrounded! Foiled again!");
        alert("VICTORY");
        losses = losses + 1;
        alert("You've beaten me " + losses + " time(s)")
    } else if (userThrow == "scissors" || userThrow == "Scissors") {
        alert("Your sharp wits have been stymied again!");
        alert("DEFEAT");
        wins = wins + 1;
        alert("You've been defeated " + wins + " time(s)")
    } else {
        alert("I didn't hear you, what was that? Try again");
    }
}
