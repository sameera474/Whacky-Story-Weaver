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

// const story_images = document.querySelector("#story-images");
const story_display = document.querySelector("#story-display");
const StartButton = document.querySelector("#StartButton");

function gameBoard() {
  for (let i = 0; i <= imageArray.length; i++) {
    const imgStory = document.createElement("img");
    imgStory.setAttribute("src", imageArray[i].img);
    imgStory.setAttribute("id", "frontImages");
    imgStory.setAttribute("onclick", "gamefuction()");
    console.log(imgStory);

    document.getElementById("story-images").appendChild(imgStory);
  }
  
  const resetButton = 

}

function gamefuction() {
  console.log("start");
}
