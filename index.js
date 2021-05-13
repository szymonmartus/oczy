const main = document.querySelector("#main");
const btnz = document.querySelector("#buttons");
let currentImg = null;
const body = document.querySelector("body");
body.style.width = window.width;
body.style.height = window.height;

const showImg = (attr) => {
  main.innerHTML = `<img class='big' src=${attr}></img>`;
  btnz.style.display = "flex";
  currentImg = attr;
};

const unfriend = () => {
  main.innerHTML = `<h1 class="unfriend">YOU CAN'T UNFRIEND ME, EVER</h1>`;
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
    <img id="elo" class='ignoreImg' src=${currentImg}></img>
    `;
  const oczy = document.querySelector("#elo");
  let v;
  let t = 100;
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
  }, 100);
};

// function sleep(milliseconds) {
//     const date = Date.now()
//     let currentDate = null
//     do {
//         currentDate = Date.now()
//     } while (currentDate - date < milliseconds)
// }

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

const unfollow = () => {
  main.innerHTML = `<div id="unfollow"></div>`;
  var trailimage = [currentImg, 100, 99]; //image path, plus width and height
  var offsetfrommouse = [10, -20]; //image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
  var displayduration = 10; //duration in seconds image should remain visible. 0 for always.

  if (document.getElementById || document.all)
    newDiv = document.createElement("div");
  newDiv.innerHTML =
    '<div id="trailimageid" style="position:absolute;visibility:visible;left:0px;top:0px;width:1px;height:1px"><img src="' +
    trailimage[0] +
    '" border="0" width="' +
    trailimage[1] +
    'px" height="' +
    trailimage[2] +
    'px"></div>';

  mainDiv = document.getElementById("main");
  document.body.insertBefore(newDiv, mainDiv);

  function gettrailobj() {
    if (document.getElementById)
      return document.getElementById("trailimageid").style;
    else if (document.all) return document.all.trailimagid.style;
  }

  function truebody() {
    return !window.opera &&
      document.compatMode &&
      document.compatMode != "BackCompat"
      ? document.documentElement
      : document.body;
  }

  function hidetrail() {
    gettrailobj().visibility = "hidden";
    document.onmousemove = "";
  }

  function followmouse(e) {
    var xcoord = offsetfrommouse[0];
    var ycoord = offsetfrommouse[1];
    if (typeof e != "undefined") {
      xcoord += e.pageX;
      ycoord += e.pageY;
    } else if (typeof window.event != "undefined") {
      xcoord += truebody().scrollLeft + event.clientX;
      ycoord += truebody().scrollTop + event.clientY;
    }
    var docwidth = document.all
      ? truebody().scrollLeft + truebody().clientWidth
      : pageXOffset + window.innerWidth - 15;
    var docheight = document.all
      ? Math.max(truebody().scrollHeight, truebody().clientHeight)
      : Math.max(document.body.offsetHeight, window.innerHeight);
    if (
      xcoord + trailimage[1] + 3 > docwidth ||
      ycoord + trailimage[2] > docheight
    )
      gettrailobj().display = "none";
    else gettrailobj().display = "";
    gettrailobj().left = xcoord + "px";
    gettrailobj().top = ycoord + "px";
  }

  document.onmousemove = followmouse;

  if (displayduration > 0) setTimeout(hidetrail, displayduration * 1000);
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
    img.style.top = document.body.clientHeight * Math.random() - 75 + "px";
    img.style.left = document.body.clientWidth * Math.random() - 120 + "px";

    main.appendChild(img);
    count += 1;
    if (count == 300) {
      clearInterval(runBlock);
      main.innerHTML = `<div id="main"></div>`;
    }
  }
  const runBlock = setInterval(show_image, 50);
};
