// Variables
let statusGame = ["", "", "", "", "", "", "", "", ""];
let player1, player2;
let turnPlayer = "X";
let turnPlayerR = "O";

// Functions
function realValidateGame(cell) {
  runPlayer(cell);
}

function runPlayer(id) {
  if (statusGame[id] === "") {
    if (turnPlayer === "X") {
      turnPlayer = "O";
      turnPlayerR = "X";
      document.getElementById("turnplayer").innerHTML = `&nbsp;${turnPlayer}`;
      document.getElementById(id).innerText = turnPlayerR;
      statusGame[id] = turnPlayerR;
    } else {
      turnPlayer = "X";
      turnPlayerR = "O";
      document.getElementById("turnplayer").innerHTML = `&nbsp;${turnPlayer}`;
      document.getElementById(id).innerText = turnPlayerR;
      statusGame[id] = turnPlayerR;
    }
  }

  checkVictory(turnPlayer);
}
function checkVictory() {
  if (statusGame[0] === turnPlayerR && statusGame[1] === turnPlayerR && statusGame[2] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "4rem", "", "", "",0,1,2);
  } else if (statusGame[3] === turnPlayerR && statusGame[4] === turnPlayerR && statusGame[5] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "7.5rem", "", "", "",3,4,5);
  } else if (statusGame[6] === turnPlayerR && statusGame[7] === turnPlayerR && statusGame[8] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "11rem", "", "", "",6,7,8);
  } else if (statusGame[0] === turnPlayerR && statusGame[3] === turnPlayerR && statusGame[6] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "7.8rem;", "3.4rem", "", "rotate(90deg)",0,3,6);
  } else if (statusGame[1] === turnPlayerR && statusGame[4] === turnPlayerR && statusGame[7] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "7.8rem", "", "", "rotate(90deg)",1,4,7);
  } else if (statusGame[2] === turnPlayerR && statusGame[5] === turnPlayerR && statusGame[8] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "7.8rem", "", "3.4rem", "rotate(90deg)",2,5,8);
  } else if ( statusGame[0] === turnPlayerR && statusGame[4] === turnPlayerR && statusGame[8] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "7.6rem", "", "", "rotate(45deg)",0,4,8);
  } else if ( statusGame[2] === turnPlayerR && statusGame[4] === turnPlayerR && statusGame[6] === turnPlayerR) {
    changeStyle(turnPlayerR, "visible", "7.6rem", "", "", "rotate(135deg)",2,4,6);
  } else if (statusGame[0] !== "" && statusGame[1] !== "" && statusGame[2] !== "" && statusGame[3] !== "" && statusGame[4] !== "" && statusGame[5] !== "" && statusGame[6] !== "" && statusGame[7] !== "" && statusGame[8] !== "") {
    document.getElementById("currentPlayer").innerText = "It's a Draw";
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("turnplayer").innerHTML = ``;
  }
}

function resetGame() {
  for (let index = 0; index < 9; index++) {
    document.getElementById(index).innerText = "";
    document.getElementById(index).style.color = "black";
  }
  statusGame = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("board").style.visibility = "hidden";
  document.getElementById("hr").style.visibility = "hidden";
  document.getElementById("currentPlayer").innerText = "Turn Player :";
  document.getElementById("turnplayer").innerHTML = `&nbsp;${turnPlayer}`;
}

function changeStyle(whoPlayer, boardVisible, hrTop, hrRight, hrLeft, hrTransform,id_1,id_2,id_3) {
    document.getElementById("currentPlayer").innerText = "Winner is :";
    document.getElementById("turnplayer").innerHTML = `&nbsp;${whoPlayer}`;
    document.getElementById("board").style.visibility = boardVisible;
    document.getElementById("hr").style.cssText = `
    visibility: visible;
    position: relative;
    top: ${hrTop};
    right: ${hrRight};
    left: ${hrLeft};
    transform: ${hrTransform};`;
    document.getElementById(id_1).style.color = "red";
    document.getElementById(id_2).style.color = "red";
    document.getElementById(id_3).style.color = "red";
}