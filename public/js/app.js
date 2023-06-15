let spanClick = document.querySelector(".welcome span");
let content = document.querySelector(".content");
let easy = [];
let normal = [];
let hard = [];

/* spanClick.addEventListener("click", () => {
    let urName = prompt("whats ur name");
    console.log(urName);
    if (urName == null || urName == "") {
        let myName = document.querySelector(".name span");
        myName.innerHTML = "unknown";

    }
    else {
        let myName = document.querySelector(".name span");
        myName.innerHTML = urName;
    }
    document.querySelector(".welcome").remove();
}) */
 

let images = [
    {
        name: "img1",
        src: "./public/img/img1.jpg"
    },
    {
        name: "img2",
        src: "./public/img/img2.jpg"
    },
    {
        name: "img3",
        src: "./public/img/img3.jpg"
    },
    {
        name: "img4",
        src: "./public/img/img4.jpg"
    },
    {
        name: "img5",
        src: "./public/img/img5.jpg"
    },
    {
        name: "img6",
        src: "./public/img/img6.jpg"
    },
    {
        name: "img7",
        src: "./public/img/img7.jpg"
    },
    {
        name: "img8",
        src: "./public/img/img8.jpg"
    },
    {
        name: "img1",
        src: "./public/img/img1.jpg"
    },
    {
        name: "img2",
        src: "./public/img/img2.jpg"
    },
    {
        name: "img3",
        src: "./public/img/img3.jpg"
    },
    {
        name: "img4",
        src: "./public/img/img4.jpg"
    },
    {
        name: "img5",
        src: "./public/img/img5.jpg"
    },
    {
        name: "img6",
        src: "./public/img/img6.jpg"
    },
    {
        name: "img7",
        src: "./public/img/img7.jpg"
    },
    {
        name: "img8",
        src: "./public/img/img8.jpg"
    },

];

console.log(images);

for (let i = 0; i < images.length; i++) {
    let randomImg = Math.round(Math.random() * (images.length - 1))
    let image = images[i];
console.log(images.length);
    content.innerHTML += `<div class="game-square" data-name="${images[randomImg].name}">
    <div class="face front "></div>
    <div class="face back">
      <img src="${images[randomImg].src}" alt="" srcset="" />
    </div>
  </div>`;
   /*  image.addEventListener("click", () => {
        let gameSquare = document.querySelector(".game-square")

        gameSquare.classList.add("flipe");
    }) */
}
function getMultipleRandom(images, num) {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }
  
  console.log(getMultipleRandom(images, 4)); 
  console.log(getMultipleRandom(images, 8)); 
  console.log(getMultipleRandom(images, images.length));
console.log(content); 
