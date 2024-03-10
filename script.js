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
    msg: ' Doomguy, John Romero’s icon goes by many names. "The Doom Slayer". "The Hell Walker". "Unchained Predator". "Mr Hugglebug". And we’ve only made one of those monikers up, promise. Debuting in iD’s formative FPS back in 1993, Doomguy’s snarling face was a pixelated wonder back in the days when Jurassic Park was awing cinemagoers worldwide. Without Doom’s legendary, incredibly violent marine, there would be no BJ Blazkowicz or Sam "Serious" Sam, let alone Microsoft’s iconic Master Chief. The daddy of the shooter genre, the shotgun-toting, chainsaw-revving legend made a triumphant reappearance in the series’ brilliant 2016 reboot. Three years later, the mute murderer was finally given some lines, delivered with grizzled panache by actor Matthew Waterson, in Doom Eternal.',
  },
  {
    msg: "Niko Bellic, GTA’s most emotionally conflicted lead character is a Balkan badass with a twitchy trigger finger and a tortured past. Rocking a cheap sweatsuit more effectively than any other character in gaming history, Niko is a far more complex individual than any of the one-dimensional leads that appeared in the original Grand Theft Auto trilogy. Unable to shake his shifty past and overwhelmed by the excess of modern American life, Bellic steamrolls through Liberty City like a perpetually downbeat bull in an incredibly violent china shop. If it wasn’t for his cousin’s love for bowling and other, more X-rated pastimes, Niko would barely lighten up during GTA 4’s 93 story missions. ",
  },
  {
    msg: "Ratchet, One of PlayStation’s most likable mascots, the mechanically gifted Lombax has been wowing gamers with his incredibly fluffy space ears since the early ‘00s. Forming an all-time great duo with the tiny, impeccably polite robot Clank, Ratchet has saved the universe a ludicrous number of times. Despite being humble and heroic, the good-natured Lombax has always been a little glum, no matter how irresistibly chipper his dinky droid pal is. Up until A Crack in Time and Rift Apart fleshed out his backstory, Ratchet was thought to be the only surviving member of his species in all of the galaxy. Hoo-boy are we glad Rivet stole the show in the series’ first PS5 adventure to finally pick up the lonely Lombax’s spirits.",
  },
  {
    msg: "Sam Fisher, Sam Fisher is the reason most gamers can’t walk through a narrow corridor without looking up to check for three green dots. He’s got the sort of career history that makes Solid Snake look like a wheezy recruit in the Territorial Army: a highly decorated Navy SEAL, former CIA clandestine officer, member of a top-secret NSA initiative, and commander of his own covert unit. He’s been performed by chainsaw-voiced veteran actor Michael Ironside in five of the six Splinter Cell games but in the more action-focussed Blacklist, Canadian actor Eric Johnson took over voice and performance capture duties. Fisher is a big enough deal that a film adaptation of Splinter Cell has been in pre-production since 2005, with Bourne director Doug Liman briefly attached, and Netflix is currently producing an anime series adaptation with John Wick writer Derek Kolstad serving as executive producer",
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
