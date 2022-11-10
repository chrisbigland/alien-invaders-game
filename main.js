// When coming back to this...
// look at tests - need to finish writing these
// Implement newly learned React knowledge to resolve issues with amending innerHTML (when starting new game - currently working by reloading window but find another way so I can learn from this)
// check css to see if there's a more brief way to do it (many fractions in grid)
// test suite failing to run issues
// export key word stopping webpage from running - look into reasons for this.

// export
class Ship {
  constructor(shipName, shipType, hitValue, shipScore, id) {
    this.shipName = shipName;
    this.shipType = shipType;
    this.hitValue = hitValue;
    this.shipScore = shipScore;
    this.id = id;
  }

  hit(targetShip) {
    const newScore = targetShip.shipScore - targetShip.hitValue;
    targetShip.shipScore = newScore;
    return targetShip.shipScore;
  }
}

const motherShip = new Ship("Mother Ship", "Mother Ship", 9, 100, 1);
const defenceShip1 = new Ship("Defence Ship 1", "Defence Ship", 10, 80, 2);
const defenceShip2 = new Ship("Defence Ship 2", "Defence Ship", 10, 80, 3);
const defenceShip3 = new Ship("Defence Ship 3", "Defence Ship", 10, 80, 4);
const defenceShip4 = new Ship("Defence Ship 4", "Defence Ship", 10, 80, 5);
const defenceShip5 = new Ship("Defence Ship 5", "Defence Ship", 10, 80, 6);
const attackShip1 = new Ship("Attack Ship 1", "Attack Ship", 12, 45, 7);
const attackShip2 = new Ship("Attack Ship 2", "Attack Ship", 12, 45, 8);
const attackShip3 = new Ship("Attack Ship 3", "Attack Ship", 12, 45, 9);
const attackShip4 = new Ship("Attack Ship 4", "Attack Ship", 12, 45, 10);
const attackShip5 = new Ship("Attack Ship 5", "Attack Ship", 12, 45, 11);
const attackShip6 = new Ship("Attack Ship 6", "Attack Ship", 12, 45, 12);
const attackShip7 = new Ship("Attack Ship 7", "Attack Ship", 12, 45, 13);
const attackShip8 = new Ship("Attack Ship 8", "Attack Ship", 12, 45, 14);

let shipsArr = [
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

const shipsArrCopy = [...shipsArr];
console.log(shipsArrCopy);

const playerBtn = document.querySelector(".player-container__player");
const gameboard = document.querySelector("body");
const gameboardHtml = gameboard.innerHTML;

const evListenerFunction = () => {
  const targetShipIndex = shoot(shipsArr);
  const targetShip = shipsArr[targetShipIndex];
  targetShip.hit(targetShip);
  const targetScoreHtml = document.querySelector(
    `.ships__${targetShip.id}-score`
  );
  if (targetShip.shipScore > 0) {
    targetScoreHtml.innerHTML = targetShip.shipScore;
  } else {
    destroy(targetShipIndex, targetShip);
  }
  if (shipsArr.length === 0) {
    winGame();
  }
};

playerBtn.addEventListener("click", evListenerFunction);

// export
const shoot = (shipsArr) => {
  if (shipsArr.length > 0) {
    const targetShipIndex = Math.floor(Math.random() * shipsArr.length);
    return targetShipIndex;
  } else {
    return null;
  }
};

// export
const destroy = (targetShipIndex, targetShip) => {
  shipsArr.splice(targetShipIndex, 1);
  const targetShipHtml = document.querySelector(`.ships__${targetShip.id}`);
  targetShipHtml.innerHTML = `<p>eliminated</p>`;
};

const winGame = () => {
  const winningHtml = document.querySelector(".ships");
  winningHtml.innerHTML = `<div style="position:fixed;top:40%;left:30%;display:flex;flex-direction:column;text-align:center;"><p  style="font-size:4rem;color:#7EB838;">You Win!!!</p>
    <button class="ships__new-game-btn" style="width:40vw;height:10vh;border-radius:50%;box-shadow:5px5px;"">New Game</button></div>`;
  playerBtn.style.visibility = "hidden";
  const newGameBtn = document.querySelector(".ships__new-game-btn");
  newGameBtn.addEventListener("click", () => {
    // in future - change this so we re-create all of the ships and put them back into shipsArr
    window.location.reload();
  });
};
