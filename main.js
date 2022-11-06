// class Ship {

// }
//-
// starting points
// // hit points lost

// Arr of objects
// const shipsArr = [
//   motherShip,
//   defenceShip1,
//   defenceShip2,
//   defenceShip3,
//   defenceShip4,
//   defenceShip5,
//   attackShip1,
//   attackShip2,
//   attackShip3,
//   attackShip4,
//   attackShip5,
//   attackShip6,
//   attackShip7,
//   attackShip8,
// ];

// const motherShip = new Ship()
// const defenceShip1 = new Ship()
// const defenceShip2 = new Ship()
// const defenceShip3 = new Ship()
// const defenceShip4 = new Ship()
// const defenceShip5 = new Ship()
// const attackShip1 = new Ship()
// const attackShip2 = new Ship()
// const attackShip3 = new Ship()
// const attackShip4 = new Ship()
// const attackShip5 = new Ship()
// const attackShip6 = new Ship()
// const attackShip7 = new Ship()
// const attackShip8 = new Ship()

// methods - shoot(chooses random ship), hit (alien ship scores reduce), update player score, startNewGame

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS  - keep them pure. Can adapt to class methods later if reqd.




// SHOOT - random ship selected, run hit function
// runs when player clicks button

const testShipsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// to make pure, simply include input and a return then hit can also be run when user clicks and use the returned data from this function i.e. which ship.
const shoot = (testShipsArr) => {
  //   console.log(testShipsArr);
  //   const lengthOfArr = testShipsArr.length;
  //   console.log(lengthOfArr);
  const targetShipIndex = Math.floor(Math.random() * testShipsArr.length);
  console.log(targetShipIndex);
  return targetShipIndex;
  // Select random ship (in an array of objects - for the test, use dummy data)
  // output - random ship
};

shoot(testShipsArr);

// HIT - to run on click of shoot button. Uses return from shoot function (use dummy data in test) to select ship and reduce score accordingly. If ship score is 0, removes item from shipsArray.
// const hit = (casualtyShip) => {
// input - casualtyShip
// reduces score
// outputs reduced score
// }

// UPDATE PLAYER SCORE
// const updatePlayerScore = () => {

// }

//  START NEW GAME

// Sun 6th Nov
// get tests linked up, decide on tests and start writing functions/classes
// could start on UI

// ACTIONS
// USE TDD approach - write tests FIRST. Decide what tests we need.
// design UI on figma
// Create something that represents ship in html e.g. ship 1 - 50 health left, ship 2 destroyed etc.
// firing - button that, when clicked, randomly "hits" one of the ships, and you would see that reflected in the UI.
// later could include timer or movement - if not done in time, player loses - first get the rest of the game working

// BRIEF
// based on space invaders
// use skills learnt in this module - pure functions, oop, tdd
// Use OOP mindset (although some functions may be required.) Think about what data and what methods I'll need
// Simple, text only game with a single button that hits a random alien ship in the fleet.
// Each time the button is pressed, a random alien ship is hit and its hit points are reduced.
// Once an alien ships points have hit zero the ship is destroyed and can’t be hit again.
// The game is over once all alien ships have been destroyed.
// should be completed in under 150 lines inc comments (exc tests)
// need to be able to start new game once game is over

//1 x Mother ship-
//▪ 100 Hit Points -
//▪ Loses 9 hit points every time it is hit -
//▪ All ships are destroyed if the Mother ship is destroyed
//o 5 x Defence ship -
//▪ Each one starts with 80 hit points -
//▪ Each one Loses 10 hit points each time it is hit
//o 8 x Attack ship
//▪ Each starts with 45 hit points
//▪ Each loses 12 hit points each time it is hit.

// methods - shoot(chooses random ship), hit (alien ship scores reduce), update player score
// data - score, (timer?), number of ships left, ships' health, number of ships left, ships starting scores, amount score gets lowered each time hit.
