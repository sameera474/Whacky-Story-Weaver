const imageArray = [
  {
    name: "Doomguy",
    img: "images/Doomguy.webp",
  },
  {
    name: "Niko_Bellic",
    img: "images/Niko_Bellic.webp",
  },
  {
    name: "Ratchet",
    img: "images/Ratchet.webp",
  },
  {
    name: "Sam_Fisher",
    img: "images/Sam_Fisher.webp",
  },
];

const storyArray = [
  {
    msg: "Hello 1",
  },
  {
    msg: "Hello 2",
  },
  {
    msg: "Hello 3",
  },
  {
    msg: "Hello 4",
  },
];

const story_images = document.querySelector("#story-images");
const story_display = document.querySelector("#story-display");
const startButton = document.querySelector("#startButton");

function gameTrigerr() {
  const startButtonStatus = startButton.textContent === "Start";
  if (startButtonStatus) {
    gameBoard();
  } else {
    gameRestart();
  }
}

function gameBoard() {
  document.getElementById("question").textContent =
    "What is the favorite game you like?";

  story_images.innerHTML = "";

  for (let i = 0; i < imageArray.length; i++) {
    const imgStory = document.createElement("img");
    imgStory.setAttribute("src", imageArray[i].img);
    imgStory.setAttribute("id", i);
    imgStory.className = "frontImages";
    // imgStory.setAttribute("onclick", "gamefunction()");
    imgStory.addEventListener("click", gamefunction);
    console.log(imgStory);

    story_images.appendChild(imgStory);

    startButton.removeEventListener("click", gameBoard);
    startButton.textContent = "Restart";
    startButton.addEventListener("click", gameRestart);
  }
}

function gameRestart() {
  document.getElementById("question").textContent = "";
  document.getElementById("story-images").innerHTML = "";
  document.getElementById("story").textContent = "";

  startButton.textContent = "Start";
  startButton.removeEventListener("click", gameRestart);
  startButton.addEventListener("click", gameBoard);

  console.log("Game has been reset.");
}

let imgClick = [];
function gamefunction() {
  let imgID = this.getAttribute("id");

  imgClick.push(imageArray[imgID].name);

  // this.setAttribute("src", imageArray[imgID].img);

  switch (imgID) {
    case "0":
      console.log("start 1");
      document.getElementById("story").textContent = storyArray[imgID].msg;
      break;
    case "1":
      console.log("start 2");
      document.getElementById("story").textContent = storyArray[imgID].msg;
      break;

    case "2":
      console.log("start 3");
      document.getElementById("story").textContent = storyArray[imgID].msg;
      break;
    case "3":
      console.log("start 4");
      document.getElementById("story").textContent = storyArray[imgID].msg;
      break;
  }
}
