let spanClick = document.querySelector(".welcome span");
let content = document.querySelector(".content");
let song = document.getElementById("narutoSongtwo");
let btnSong = document.querySelector(".mutebtn");
let input = document.querySelector("#inputs");
let duration = 1000;
let easy = [];
let normal = [];
let hard = [];
song.volume = 0.1;
spanClick.addEventListener("click", () => {
  let urName = input.value;
  if (urName == null || urName == "") {
    let myName = document.querySelector(".name span");
    document.querySelector(".red").innerHTML = "ktab smytk alhmar";
  } else {
    let myName = document.querySelector(".name span");
    myName.innerHTML = urName;
    document.querySelector(".welcome").remove();
    song.play();
    btnSong.addEventListener("click", mutedSong, false);
    function mutedSong() {
   
      if (song.muted == true) {
        song.muted = false;
        btnSong.textContent = "muted";
      } else {
       
        song.muted = true;
        btnSong.textContent = "unmuted";
      }
    }
  }
});

let images = [
  {
    name: "img1",
    src: "./public/img/img1.jpg",
  },
  {
    name: "img2",
    src: "./public/img/img2.jpg",
  },
  {
    name: "img3",
    src: "./public/img/img3.jpg",
  },
  {
    name: "img4",
    src: "./public/img/img4.jpg",
  },
  {
    name: "img5",
    src: "./public/img/img5.jpg",
  },
  {
    name: "img6",
    src: "./public/img/img6.jpg",
  },
  {
    name: "img7",
    src: "./public/img/img7.jpg",
  },
  {
    name: "img8",
    src: "./public/img/img8.jpg",
  },
  {
    name: "img9",
    src: "./public/img/img9.jpg",
  },
  {
    name: "img1",
    src: "./public/img/img1.jpg",
  },
  {
    name: "img2",
    src: "./public/img/img2.jpg",
  },
  {
    name: "img3",
    src: "./public/img/img3.jpg",
  },
  {
    name: "img4",
    src: "./public/img/img4.jpg",
  },
  {
    name: "img5",
    src: "./public/img/img5.jpg",
  },
  {
    name: "img6",
    src: "./public/img/img6.jpg",
  },
  {
    name: "img7",
    src: "./public/img/img7.jpg",
  },
  {
    name: "img8",
    src: "./public/img/img8.jpg",
  },
  {
    name: "img9",
    src: "./public/img/img9.jpg",
  },
];

let randomImg = images.sort(() => Math.random() - 0.5);
for (let i = 0; i < randomImg.length; i++) {
  let image = randomImg[i];
  content.innerHTML += `<div class="game-square" data-namechar="${image.name}">
    <div class="face front "></div>
    <div class="face back">
      <img src="${image.src}" alt="" srcset="" />
    </div>
  </div>`;
}

let gameSquare = document.querySelectorAll(".game-square");
let ary = Array.from(gameSquare);

ary.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.add("flipe");
    let soundflipe = document.querySelector("#flipecard");
    soundflipe.volume = 1;
soundflipe.play()
    let filtImg = ary.filter((img) => img.classList.contains("flipe"));
    if (filtImg.length === 2) {
      console.log("wa baraka 3lik 4a zouj");
      stopCliking();
      checkImg(filtImg[0], filtImg[1]);
    }
  });
});

function stopCliking() {
  content.classList.add("no-clicked");
  setTimeout(() => {
    content.classList.remove("no-clicked");
  }, duration);
}

function checkImg(firstImg, secondImg) {
  let tryed = document.getElementById("try");
  if (firstImg.dataset.namechar === secondImg.dataset.namechar) {
    firstImg.classList.remove("flipe");
    secondImg.classList.remove("flipe");

    firstImg.classList.add("has-same");
    secondImg.classList.add("has-same");
  } else {
    tryed.innerHTML = parseInt(tryed.innerHTML) + 1;
    setTimeout(() => {
      firstImg.classList.remove("flipe");
      secondImg.classList.remove("flipe");
    }, duration);
  }
}
