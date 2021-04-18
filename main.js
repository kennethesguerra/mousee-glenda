

const img = document.getElementById('our-image');
let isStart = false;

document.getElementById('btn-move').addEventListener('click', () => {
  isStart = true;
})


const arrPositionsX = [20, 100, 200, 800, 800, 800];
const arrPositionsY = [50, 200, 100, 100, 500, 100];
const totalMovement = 6;

let currentPosition = -1;

img.style.left = 20 + "px";
img.style.top = 50 + "px";

document.addEventListener('mousemove', (e) => {

  if (!isStart) {
    return '';
  }

  imgRect = img.getBoundingClientRect();

  //add some margin for the image so the cursor won't touch the image
  const imgPosLeft = imgRect.left;
  const imgPosRight = imgRect.right;
  const imgPosTop = imgRect.top;
  const imgPosBottom = imgRect.bottom;

  var mouseX = e.clientX;
  var mouseY = e.clientY;

  if (mouseX >= imgPosLeft && mouseX <= imgPosRight &&
    mouseY >= imgPosTop && mouseY <= imgPosBottom) {

    currentPosition += 1;

    img.style.left = arrPositionsX[currentPosition] + "px";
    img.style.top = arrPositionsY[currentPosition] + "px";

    if (currentPosition + 1 === totalMovement) {
      currentPosition = -1;
    }
  }
})