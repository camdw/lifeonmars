//Create rover and give initial position

var myRover = {
  position: [3,2],
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


// Make the grid a sphere

function checkWalls() {
  if (myRover.position[0] < 1) {
    myRover.position[0] = 10;
  }
  if (myRover.position[0] > 10) {
    myRover.position[0] = 1;
  }
  if (myRover.position[1] < 1) {
    myRover.position[1] = 10;
  }
  if (myRover.position[1] > 10) {
    myRover.position[1] = 1;
  }
}

// Store previous position
var previousMove0 = myRover.position[0]
var previousMove1 = myRover.position[1]
var previousMove = [previousMove0,previousMove1]

// Create obstacles

var obstacle1 = [3,3];

// Check obstacles

function checkObstacles() {
  if (myRover.position[0] === obstacle1[0] && myRover.position[1] === obstacle1[1]) {
    console.log("You hit an obstacle! Your rover stays where it is. Try to go around it." );
    myRover.position[0] = previousMove0
    myRover.position[1] = previousMove1
  }
}


// Ask user for instructions
var userMove = prompt("What is your next move? f,b,r,l")

// Give rover position and direction

function givePosition() {
  console.log("Your rover is in cell " + myRover.position + " and is facing " + myRover.direction)
}
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


// Process instructions

  for (i=0; i<userMove.length; i++) {
    switch(userMove[i]) {
      case 'f':
        goForward();
        checkObstacles();
        checkWalls();
        givePosition();
        break;
        case 'b':
        goBackwards();
        checkWalls();
        givePosition();
        break;
        case 'l':
        goLeft();
        checkWalls();
        givePosition();
        break;
        case 'r':
        goRight();
        checkWalls();
        givePosition();
        break;
        // case '""':
        // console.log("Waiting for instructions!");
        // givePosition();
        // break;
        default:
        console.log("Invalid command. Enter f, b, r or l.");
        givePosition();
      }
    }
