// Change Theme Background Color, Nav Color and Play Audio

var audioSlytherin = new Audio("/house-songs/slytherins.aac");
var audioRavenclaw = new Audio("/house-songs/ravenclaw.aac");
var audioHufflepuff = new Audio("/house-songs/hufflepuff.aac");
var audioGryffindor = new Audio("/house-songs/gryffindor.aac");
var audioPlaying = false;
var previousId = null;

function changeHouseColor(houseId, bodyColor, navColor) {
  document.body.classList.add("transition-bg");
  document.body.style.backgroundColor = bodyColor;
  document.querySelector("nav").classList.add("transition-bg");
  document.querySelector("nav").style.backgroundColor = navColor;

  if (window.matchMedia("(max-width: 768px)").matches) {
    document.querySelector(".nav-menu").style.backgroundColor = navColor;
  } else {
    document.querySelector(".nav-menu").style.backgroundColor = "none";
  }

  const houseData = {
    bodyColor,
    navColor,
  };
  localStorage.setItem("selectedHouse", JSON.stringify(houseData));
}

function playAudio(audio) {
  if (audioPlaying) {
    stopAudio();
  }

  audio.play();
  audioPlaying = true;
}

function stopAudio() {
  if (audioSlytherin.paused === false) {
    audioSlytherin.pause();
    audioSlytherin.currentTime = 0;
  }

  if (audioRavenclaw.paused === false) {
    audioRavenclaw.pause();
    audioRavenclaw.currentTime = 0;
  }

  if (audioHufflepuff.paused === false) {
    audioHufflepuff.pause();
    audioHufflepuff.currentTime = 0;
  }

  if (audioGryffindor.paused === false) {
    audioGryffindor.pause();
    audioGryffindor.currentTime = 0;
  }

  audioPlaying = false;
}

function changeBackgroundImage() {
  if (previousId === "hufflepuff") {
    document.body.style.backgroundImage = "url(images/lnoise.svg)";
  } else {
    document.body.style.backgroundImage = "url(images/nnnoise.svg)";
  }
}

function applyStoredHouseData() {
  // Retrieve the selected house data from localStorage
  const selectedHouseData = localStorage.getItem("selectedHouse");
  if (selectedHouseData) {
    const houseData = JSON.parse(selectedHouseData);
    // Apply the stored house data
    changeHouseColor(
      previousId,
      houseData.bodyColor,
      houseData.navColor
    );
  }
}

document.getElementById("slytherins").addEventListener("click", function () {
  if (previousId === "slytherins") {
    stopAudio();
    previousId = null;
    return;
  }

  playAudio(audioSlytherin);
  previousId = "slytherins";
  changeHouseColor(
    "slytherins",
    "rgba(21, 71, 61, 1)",
    "rgba(21, 71, 61, 0.8)"
  );
  changeBackgroundImage();
});

document.getElementById("ravenclaw").addEventListener("click", function () {
  if (previousId === "ravenclaw") {
    stopAudio();
    previousId = null;
    return;
  }

  playAudio(audioRavenclaw);
  previousId = "ravenclaw";
  changeHouseColor("ravenclaw", "rgba(12, 31, 56, 1)", "rgba(12, 31, 56, 0.8)");
  changeBackgroundImage();
});

document.getElementById("hufflepuff").addEventListener("click", function () {
  if (previousId === "hufflepuff") {
    stopAudio();
    previousId = null;
    return;
  }

  playAudio(audioHufflepuff);
  previousId = "hufflepuff";
  changeHouseColor(
    "hufflepuff",
    "rgba(165, 111, 25, 1)",
    "rgba(165, 111, 25, 0.8)"
    );
    changeBackgroundImage();
    });
    
    document.getElementById("gryffindor").addEventListener("click", function () {
    if (previousId === "gryffindor") {
    stopAudio();
    previousId = null;
    return;
    }
    
    playAudio(audioGryffindor);
    previousId = "gryffindor";
    changeHouseColor(
    "gryffindor",
    "rgba(105, 33, 23, 1)",
    "rgba(105, 33, 23, 0.8)"
    );
    changeBackgroundImage();
    });

  // Apply the stored house data when the page loads
    applyStoredHouseData();

// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamburger.addEventListener("click", toggleMenu);

document
  .querySelectorAll(".nav-item")
  .forEach((n) => n.addEventListener("click", toggleMenu));
