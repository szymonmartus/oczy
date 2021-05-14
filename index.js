const main = document.querySelector("#main");
const btnz = document.querySelector("#buttons");
let currentImg = null;
const body = document.querySelector("body");
body.style.width = window.width;
body.style.height = window.height;
const dataTable = [{ id: "1" }];

// const initSchuffle = () => {
//   document.onload;
// };

const showImg = (attr) => {
  main.innerHTML = `<img class='big' src=${attr}></img>`;
  btnz.style.display = "flex";
  currentImg = attr;
  console.log(attr);
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const unfriend = () => {
  //   let x = document.createElement("h1");
  //   x.setAttribute("class", "unfriend");
  //   x.innerText = "YOU CANT UNFRiEND ME, EVER";
  //   document.body.main.appendChild(x);
  if (document.querySelector(".unfriend")) {
  } else {
    main.innerHTML += `<h1 class="unfriend">YOU CANT UNFRIEND ME, EVER</h1>`;
  }
};

const deleteMessage = () => {
  main.innerHTML = `
    <div id="del">
    <div class='del1'>
    <img class='deleteImg' src=${currentImg}></img>
    <img class='deleteImg' src=${currentImg}></img>
    </div>
    <div class='del2'>
    <img class='deleteImg' src=${currentImg}></img>
    <img class='deleteImg' src=${currentImg}></img>
    <img class='deleteImg' src=${currentImg}></img>
    </div>
    <div class='del1'>
    <img class='deleteImg' src=${currentImg}></img>
    <img class='deleteImg' src=${currentImg}></img>
    </div>
    <div class='del2'>
    <img class='deleteImg' src=${currentImg}></img>
    <img class='deleteImg' src=${currentImg}></img>
    </div>
    <div class='del2'>
    <img src='https://i.ibb.co/Vvht4cT/seen.jpg'></img>
    </div>
    `;
};

const ignoreMessage = () => {
  main.innerHTML = `
    <img id="i1" class='ignoreImg' src=${currentImg}></img>
    <img id="i2" class='ignoreImg' src=${currentImg}></img>
    <img id="i3" class='ignoreImg' src=${currentImg}></img>
    <img id="i4" class='ignoreImg' src=${currentImg}></img>
    <img id="i5" class='ignoreImg' src=${currentImg}></img>
    `;
  for (let i = 0; i <= 5; i++) {
    const oczy = document.querySelector(`#i${i}`);
    let v;
    let t = getRandomInt(10, 700);
    const mrugaj = () => {
      if (oczy.style.visibility == "visible") {
        v = "hidden";
      } else {
        v = "visible";
      }
      oczy.style.visibility = v;
    };
    setInterval(() => {
      mrugaj();
    }, t);
  }
};

const mute = () => {
  function muteConversations() {
    new TypeIt("#muteSpan", {
      strings: ["IT IS ETERNAL", "I SEE EVERYTHING"],
      speed: 80,
      waitUntilVisible: true,
    }).go();
  }
  main.innerHTML = `<span id="muteSpan"></span>`;
  setTimeout(muteConversations, 1000);
};

const block = () => {
  let count = 0;
  main.innerHTML = `<div id="main"></div>`;
  function show_image() {
    var img = document.createElement("img");
    img.src = currentImg;
    img.width = 50;
    img.height = 80;
    img.alt = currentImg;

    // set the position
    img.style.position = "absolute";
    img.style.top = document.body.clientHeight * Math.random() - 100 + "px";
    img.style.left = document.body.clientWidth * Math.random() - 120 + "px";

    main.appendChild(img);
    count += 1;
    if (count == 250) {
      clearInterval(runBlock);
      main.innerHTML = `<div id="main"></div>`;
    }
  }
  const runBlock = setInterval(show_image, 50);
};

var followCursor = (function () {
  s = document.createElement("img");
  s.style.position = "absolute";
  s.style.margin = "0";
  s.style.padding = "5px";
  s.src = currentImg;

  return {
    init: function () {
      s.src = currentImg;
      document.body.appendChild(s);
    },

    run: function (e) {
      var e = e || window.event;
      s.style.left = e.clientX + 15 + "px";
      s.style.top = e.clientY + 15 + "px";
    },
  };
})();
const clearFollow = () => {
  s.remove();
};

const unfollow = () => {
  main.innerHTML = "<div></div>";
  followCursor.init();
  document.body.onmousemove = followCursor.run;
  setTimeout(clearFollow, 5000);
};
