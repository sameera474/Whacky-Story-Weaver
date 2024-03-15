const imageArray = [
  { name: "red_riding_hood", img: "images/little-red-ridding-hood.jpg" },
  { name: "The_Star_Money_Fairy_Talec", img: "images/the-star-money.jpg" },
  {
    name: "Hans_and_the_Griffin’s_Feather",
    img: "images/Hans-and-the-Griffins-Feather.jpg",
  },
  {
    name: "The_Twelve_Hunstman_Fairy_Tale",
    img: "images/The-Twelve-Huntsmen.jpg",
  },
];

const red_riding_hood_img_Array = [
  { name: "scene_1", img: "images/little-red-riding-hood-story/1.jpg" },
  { name: "scene_2", img: "images/little-red-riding-hood-story/2.jpg" },
  { name: "scene_3", img: "images/little-red-riding-hood-story/3.jpg" },
  { name: "scene_4", img: "images/little-red-riding-hood-story/4.jpg" },
  { name: "scene_5", img: "images/little-red-riding-hood-story/5.jpg" },
  { name: "scene_6", img: "images/little-red-riding-hood-story/6.jpg" },
  { name: "scene_7", img: "images/little-red-riding-hood-story/7.jpg" },
  { name: "scene_8", img: "images/little-red-riding-hood-story/8.jpg" },
  { name: "scene_9", img: "images/little-red-riding-hood-story/9.jpg" },
];

const red_riding_hood_Images_Array = [
  {
    msg: "Once upon a time, there lived the prettiest little girl ever seen. Her mother made her a little red hood, and everybody called her by the same name – Little Red Riding Hood. One day her mother asked her to go to her grandmother: “Go my girl, and see how your dear grandmother is doing, for I hear she has been very ill.”  Little Red Riding Hood set out immediately for her grandmother’s place.",
  },
  {
    msg: " While going to her grandmother’s place, Little Red Riding Hood passed through the wood, where she met a cunning wolf who asked her where she was going. “I am going to see my grandmother,” said Little Red Riding Hood. “Does she live far off?” asked the wolf. “It is beyond that mill you see over there”, answered the girl.",
  },
  {
    msg: "Not long before, the sly wolf arrived at the door of Little Red Riding Hood’s grandmother. The wolf knocked at the door.",
  },
  {
    msg: "Knock, Knock, Knock. “Who’s there?” asked the grandmother. “Your favourite grandchild, Little Red Riding Hood,” replied the wolf using a fake voice. The grandmother said, “Pull the string, my dear, and the latch will go up”. The wolf did what she was told – pulled the string and opened the door. The wolf, without wasting any time, fell upon the good old grandmother and ate her up in a moment. The wolf then shut the door and got into the grandmother’s bed, expecting the girl. Little Red Riding Hood came some time afterwards and knocked on her grandmother’s door.",
  },
  {
    msg: " Knock, Knock, Knock. “Who’s there?” asked the wolf, faking the grandmother’s voice. “It is your favourite grandchild, Little Red Riding Hood.” answered the Little Red Riding Hood. The wolf cried out what the old woman had said to her, “Pull the string, and the latch will go up”. Little Red Riding Hood did the same – pulled the string, and the door opened. She went inside and saw her grandmother. “Grandmother, what big arms you have!” said the Little Red Riding Hood. “All the better to hug you with, my little girl.” answered the wolf in a fake voice. “Grandmother, what big ears you have!” she said. “All the better to hear you with, my dear.” answered the wolf again using a fake voice. “Grandmother, what big eyes you have!” said the Little Red Riding Hood. “All the better to see you with, my sweet child.” replied the wolf.",
  },
  {
    msg: "“Grandmother, what big teeth you have got!” said the Little Red Riding Hood. “All the better to eat you up with.” The cunning wolf replied and jumped on top of poor Little Red Riding Hood and ate her up. After the wolf had finished eating, he climbed back into the grandmother’s bed and fell asleep, snoring very loudly",
  },
  {
    msg: "A huntsman was passing by and heard the snoring. He thought it was strange for an old woman to snore this loudly, so he decided to take a look. He stepped inside the house and saw a wolf lying in bed. “He has eaten the old woman, but perhaps she still can be saved.” thought the huntsman and he took a pair of scissors and cut open the wolf’s belly.",
  },
  {
    msg: "He saw a red hood shining through. A little girl jumped out of the wolf’s belly and cried, “Oh, I was so frightened! It was so dark inside that wolf’s body!” Then the old woman came out alive as well. The three of them were happy. The old woman ate the cake and drank the wine that her granddaughter had brought. The Little Red Riding Hood thought to herself, “As long as I live, I will never trust a stranger”.",
  },
  {
    msg: "The “Little Red Riding Hood” story with pictures is an interesting tale with an important moral lesson which teaches not to trust strangers. Trusting strangers and telling them about yourself can lead you into danger. The children can apply this moral lesson in real life by not talking and accepting things from strangers. Parents should teach their children that everyone cannot be trusted with the help of this short story.",
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
  document.getElementById("question").textContent = "Select your Story !!!";

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
  currentIndex = 0;

  console.log("Game has been reset.");
}
let currentIndex = 0;
// let imgClick = [];
function gamefunction() {
  let imgID = this.getAttribute("id");

  // imgClick.push(imageArray[imgID].name);
  console.log(imgID);

  // this.setAttribute("src", imageArray[imgID].img);

  switch (imgID) {
    case "0":
      console.log("start 1");
      // document.getElementById("story").textContent = storyArray[imgID].msg;
      openImage_Fuction();
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

  function openImage_Fuction() {
    document.getElementById("question").textContent = "";
    document.getElementById("story").textContent = "";
    document.getElementById("story-images").innerHTML = "";
    document.getElementById("question").textContent = "";

    if (currentIndex >= red_riding_hood_img_Array.length) {
      document.getElementById("story").textContent = "The end";
      return;
    }

    const red_riding_hood_Images = document.createElement("img");
    red_riding_hood_Images.setAttribute(
      "src",
      red_riding_hood_img_Array[currentIndex].img
    );
    red_riding_hood_Images.setAttribute("id", currentIndex);
    red_riding_hood_Images.className = "red_riding_hood_img";
    story_images.appendChild(red_riding_hood_Images);

    // Display Story

    const red_riding_hood_Story = document.createElement("p");
    red_riding_hood_Story.textContent =
      red_riding_hood_Images_Array[currentIndex].msg;
    red_riding_hood_Story.setAttribute("id", currentIndex.toString());
    red_riding_hood_Story.className = "red_riding_hood_txt";
    story_images.appendChild(red_riding_hood_Story);

    currentIndex = currentIndex + 1;
    red_riding_hood_Images.removeEventListener("click", openImage_Fuction);
    red_riding_hood_Story.removeEventListener("click", openImage_Fuction);

    red_riding_hood_Images.addEventListener("click", openImage_Fuction);
    red_riding_hood_Story.addEventListener("click", openImage_Fuction);
  }
}

//Little Red Riding Hood Story
