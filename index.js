const main = document.querySelector("#main");
const btnz = document.querySelector("#buttons");
let currentImg = null;

const showImg = (attr) => {
  main.innerHTML = `<img class='big' src=${attr}></img>`;
  btnz.style.display = "flex";
  currentImg = attr;
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

// const mute = () => {
//     let tekst =
//         "I DO THINGS ON THE INTERNET JUST SO YOU CAN SEE IT I CAN'T EVEN EXPLAIN HOW MUCH I MISS YOU I KNEW YOU WOULD REACT TO THIS WOULD YOU LIKE TO COME BACK TO ME? BECAUSE I WOULD I WISH YOU WOULD MESSAGE ME RIGHT NOW I FOLLOW YOU FROM MY FAKE ACCOUNT I STILL REMEMBER YOUR PHONE NUMBER BY HEART IT IS ETERNAL I SEE EVERYTHING"
//     let czytanko = ""
//     main.innerHTML = `<h1></h1>`

//     for (let i = 0; i <= 5; i++) {
//         czytanko += tekst[i]
//         console.log(czytanko)
//         main.innerHTML = `<h1></h1>`

//         sleep(1000)
//     }
// }
