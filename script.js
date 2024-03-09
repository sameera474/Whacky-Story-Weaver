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
    img: "images/Sam_Fiher.webp",
  },
];

const story_images = document.querySelector("#story-images");
const story_display = document.querySelector("#story-display");

function gameBoard() {
  for (let i = 0; i < imageArray.length; i++) {
    const imgStory = document.createElement("img");
    imgStory.setAttribute("src", "images/start_page.jpg");
    imgStory.setAttribute("id", i);
    imgStory.setAttribute("onclick", "images/start");
    console.log(imgStory);

    story_images.appendChild(imgStory);
  }
}

gameBoard();
