//Create rover and give initial position

var myRover = {
  position: [9,9],
  direction: 'N'
};

// Create the grid

var grid = new Array(10);
for (i = 1; i <= 10; i++) {
  grid[i] = new Array(10);
  for (j = 1; j <= 10; j++) {
    grid[i][j] = '[' + i + ', ' + j + ']';
  }
}

// Ask user for instructions
var userMove = prompt("What is your next move? f,b,r,l")

// Give rover position and direction

function givePosition() {
  console.log("Your rover is in cell " + myRover.position + " and is facing " + myRover.direction)
}


// Check walls

// function checkWalls () {
//   if (myRover.position[0] || myRover.position[1] < 1) {
//     console.log("You hit a wall! Try another move!");
//     givePosition();
//   }
//   else if (myRover.position[0] || myRover.position[1] > 10) {
//     console.log("You hit a wall! Try another move!");
//     givePosition();
//   }
//
// }


// Write the fuctions to move rover

function goForward(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[1]++;
      break;
    case 'E':
      myRover.position[0]--;
      break;
    case 'S':
      myRover.position[1]--;
      break;
    case 'W':
      myRover.position[0]++;
      break;
  }
  console.log("Your rover moved forward");
}

function goBackwards(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[1]--;
      break;
    case 'E':
      myRover.position[0]++;
      break;
    case 'S':
      myRover.position[1]++;
      break;
    case 'W':
      myRover.position[0]--;
      break;
  }
  console.log("Your rover moved backwards");
}

// Change direction of rover
function goLeft(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.direction = 'W';
      break;
    case 'E':
      myRover.direction = 'N';
      break;
    case 'S':
      myRover.direction = 'E';
      break;
    case 'W':
      myRover.direction = 'S';
      break;
  }
  console.log("Your rover pivoted left");
}

function goRight(rover) {
  switch(myRover.direction) {
    case 'N':
      myRover.direction = 'E';
      break;
    case 'E':
      myRover.direction = 'S';
      break;
    case 'S':
      myRover.direction = 'W';
      break;
    case 'W':
      myRover.direction = 'N';
      break;
  }
  console.log("Your rover pivoted right");
}




// Process instructions to move rover



  if (userMove == 'f') {
    // checkWalls();
    goForward();
    givePosition()
  }
  else if (userMove == 'b') {
    goBackwards();
    givePosition()
  }
  else if (userMove == 'l') {
    goLeft();
    givePosition()
  }
  else if (userMove == 'r') {
    goLeft();
    givePosition()
  }
  else if (userMove === null) {
    console.log("User ended the game.");
  }
  else if (userMove == "") {
    console.log("Waiting for instructions!");
    givePosition();
  }
  else {
    console.log("Invalid command. Enter f, b, r or l.");
    givePosition();
  }
