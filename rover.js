//Create rover and give initial position

var myRover = {
  position: [5,5],
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
}




// Process instructions to move rover

var move = prompt("What is your next move? f,b,r,l")


  if (move == 'f') {
    goForward();
    console.log("Your rover moved forward");
    givePosition()
  }
  else if (move == 'b') {
    goBackwards();
    console.log("Your rover moved backwards");
    givePosition()
  }
  else if (move == 'l') {
    goLeft();
    console.log("Your rover pivoted left");
    givePosition()
  }
  else if (move == 'r') {
    goLeft();
    console.log("Your rover pivoted right");
    givePosition()
  }
  else {
    givePosition();
    console.log("Waiting for instructions!");
  }


// Loop the instructions

// While the rover position is >=1 and <=10, prompt the user to ask the next move.


//   console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
//
//
// goForward(myRover);
