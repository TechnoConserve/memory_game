// The game board
const grid = document.getElementById('board');


// Put all the card icons in an array
// Each image is represented twice in the array
let iconArray = [];

iconArray[0] = new Image();
iconArray[0].src = 'img/anchor.svg';
iconArray[1] = new Image();
iconArray[1].src = 'img/anchor.svg';

iconArray[2] = new Image();
iconArray[2].src = 'img/award.svg';
iconArray[3] = new Image();
iconArray[3].src = 'img/award.svg';

iconArray[4] = new Image();
iconArray[4].src = 'img/bookmark.svg';
iconArray[5] = new Image();
iconArray[5].src = 'img/bookmark.svg';

iconArray[6] = new Image();
iconArray[6].src = 'img/briefcase.svg';
iconArray[7] = new Image();
iconArray[7].src = 'img/briefcase.svg';

iconArray[8] = new Image();
iconArray[8].src = 'img/camera.svg';
iconArray[9] = new Image();
iconArray[9].src = 'img/camera.svg';

iconArray[10] = new Image();
iconArray[10].src = 'img/clipboard.svg';
iconArray[11] = new Image();
iconArray[11].src = 'img/clipboard.svg';

iconArray[12] = new Image();
iconArray[12].src = 'img/clock.svg';
iconArray[13] = new Image();
iconArray[13].src = 'img/clock.svg';

iconArray[14] = new Image();
iconArray[14].src = 'img/cloud.svg';
iconArray[15] = new Image();
iconArray[15].src = 'img/cloud.svg';

iconArray[16] = new Image();
iconArray[16].src = 'img/cloud-drizzle.svg';
iconArray[17] = new Image();
iconArray[17].src = 'img/cloud-drizzle.svg';

iconArray[18] = new Image();
iconArray[18].src = 'img/cloud-lightning.svg';
iconArray[19] = new Image();
iconArray[19].src = 'img/cloud-lightning.svg';

iconArray[20] = new Image();
iconArray[20].src = 'img/cloud-off.svg';
iconArray[21] = new Image();
iconArray[21].src = 'img/cloud-off.svg';

iconArray[22] = new Image();
iconArray[22].src = 'img/cloud-rain.svg';
iconArray[23] = new Image();
iconArray[23].src = 'img/cloud-rain.svg';

iconArray[24] = new Image();
iconArray[24].src = 'img/compass.svg';
iconArray[25] = new Image();
iconArray[25].src = 'img/compass.svg';

iconArray[26] = new Image();
iconArray[26].src = 'img/cpu.svg';
iconArray[27] = new Image();
iconArray[27].src = 'img/cpu.svg';

iconArray[28] = new Image();
iconArray[28].src = 'img/crosshair.svg';
iconArray[29] = new Image();
iconArray[29].src = 'img/crosshair.svg';

iconArray[30] = new Image();
iconArray[30].src = 'img/database.svg';
iconArray[31] = new Image();
iconArray[31].src = 'img/database.svg';

iconArray[32] = new Image();
iconArray[32].src = 'img/disc.svg';
iconArray[33] = new Image();
iconArray[33].src = 'img/disc.svg';

iconArray[34] = new Image();
iconArray[34].src = 'img/feather.svg';
iconArray[35] = new Image();
iconArray[35].src = 'img/feather.svg';

/*
  Shuffle algorithm from SO: https://stackoverflow.com/a/2450976/1175701
 */
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(iconArray);  // Randomize order of array elements

for (let i = 0; i < iconArray.length; i++) {
  const box = document.getElementsByClassName("box")[i];
  // Create a card that holds to hold other elements
  const card = document.createElement('div');
  // Create a flipper container to deal with animation logic
  const flipper = document.createElement('div');
  // The front of the card that is blank by default
  const front = document.createElement('div');
  // The back of the card that will have the image that needs matching
  const back = document.createElement('div');

  // Give all the elements their class names for styling
  card.className = 'card';
  flipper.className = 'flipper';
  front.className = 'front';
  back.className = 'back';

  // Create the hierarchy of elements
  card.appendChild(flipper);
  flipper.appendChild(front);
  flipper.appendChild(back);
  back.appendChild(iconArray[i]);
  box.appendChild(card);

  // Each card is given a click listener
  card.addEventListener("click", function () {
    this.classList.toggle("clicked");
  });
}
