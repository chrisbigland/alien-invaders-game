export class Ship {
  constructor(shipName, shipType, hitValue, shipScore) {
    this.shipName = shipName;
    this.shipType = shipType;
    this.hitValue = hitValue;
    this.shipScore = shipScore;
  }
  shoot(shipsArr) {
    const targetShipIndex = Math.floor(Math.random() * shipsArr.length);
    return targetShipIndex;
    // Select random ship (in an array of objects)
    // output - random ship
  }
  hit(targetShipIndex) { // accepts a number input
    const targetShip = shipsArr[targetShipIndex]; // don't need to use '.this' here as targetShipIndex already given??
    const newScore = targetShip.shipScore - targetShip.hitValue;
    targetShip.shipScore = newScore;
    return targetShip.shipScore;        //returns a reduced score
  } // (alien ship scores reduce)
  //   updatePlayerScore() {

  //   }
  //   destroyShip() {

  //   } //(ship removed from array)
}

const motherShip = new Ship("Mother Ship", "Mother Ship", 9, 100);

const defenceShip1 = new Ship("Defence Ship 1", "Defence Ship", 10, 80);

const defenceShip2 = new Ship("Defence Ship 2", "Defence Ship", 10, 80);
const defenceShip3 = new Ship("Defence Ship 3", "Defence Ship", 10, 80);
const defenceShip4 = new Ship("Defence Ship 4", "Defence Ship", 10, 80);
const defenceShip5 = new Ship("Defence Ship 5", "Defence Ship", 10, 80);

const attackShip1 = new Ship("Attack Ship 1", "Attack Ship", 12, 45);
const attackShip2 = new Ship("Attack Ship 2", "Attack Ship", 12, 45);
const attackShip3 = new Ship("Attack Ship 3", "Attack Ship", 12, 45);
const attackShip4 = new Ship("Attack Ship 4", "Attack Ship", 12, 45);
const attackShip5 = new Ship("Attack Ship 5", "Attack Ship", 12, 45);
const attackShip6 = new Ship("Attack Ship 6", "Attack Ship", 12, 45);
const attackShip7 = new Ship("Attack Ship 7", "Attack Ship", 12, 45);
const attackShip8 = new Ship("Attack Ship 8", "Attack Ship", 12, 45);

const shipsArr = [
  motherShip,
  defenceShip1,
  defenceShip2,
  defenceShip3,
  defenceShip4,
  defenceShip5,
  attackShip1,
  attackShip2,
  attackShip3,
  attackShip4,
  attackShip5,
  attackShip6,
  attackShip7,
  attackShip8,
];

// methods - shoot(chooses random ship), hit (alien ship scores reduce), update player score, startNewGame

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS  - keep them pure. Can adapt to class methods later if reqd.

// SHOOT - random ship selected, run hit function
// runs when player clicks button

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

// methods - shoot(chooses random ship), hit (alien ship scores reduce), update player score, destroy ship (ship removed from array)
// data - score, (timer?), number of ships left, ships' health, number of ships left, ships starting scores, amount score gets lowered each time hit.
