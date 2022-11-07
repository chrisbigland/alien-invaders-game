// class Ship {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
//   shoot() {
//     console.log("hello");
//   }
// }

// Ship.shoot();

class Ship {
  constructor(shipName, shipScore, hitValue) {
    this.shipName = shipName;
    this.shipScore = shipScore;
    this.hitValue = hitValue;
  }
}

const ship1 = new Ship("ship1", 300, 10);

let ship2 = new Ship("ship2", 300, 10);

let ship3 = new Ship("ship3", 300, 10);

let ship4 = new Ship("ship4", 300, 10);

const shipsArr = [ship1, ship2, ship3, ship4];

const shoot = (shipsArr) => {
  const targetShipIndex = Math.floor(Math.random() * shipsArr.length);
  return targetShipIndex;
  // Select random ship (in an array of objects)
  // output - random ship
};

const targetShipIndex = shoot(shipsArr);

const hit = (targetShipIndex) => {
  let targetShip = shipsArr[targetShipIndex]; // don't need to use '.this' here as targetShipIndex already given??
  let newScore = targetShip.shipScore - targetShip.hitValue;
  targetShip.shipScore = newScore;
  return targetShip.shipScore;
};

console.log(hit(targetShipIndex));
