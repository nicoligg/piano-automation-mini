"use strict";
const sons = {
    A: `sounds/cartoon-jump-6462.mp3`,
    S: `sounds/failure-drum-sound-effect-2-7184.mp3`,
    D: `sounds/funny-cartoon-cry-144756.mp3`,
    F: `sounds/funny-reaction-120318.mp3`,
    G: `sounds/funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3`,
    H: `sounds/man-scream-121085.mp3`,
    J: `sounds/my-good-120319.mp3`,
    K: `sounds/pipe-117724.mp3`,
    L: `sounds/very-infectious-laughter-117727.mp3`,
  },
  criarDiv = (n) => {
    const t = document.createElement("div");
    t.classList.add("key");
    t.textContent = n;
    t.id = n;
    document.getElementById("container").appendChild(t);
  },
  exibir = (n) => Object.keys(n).forEach(criarDiv),
  tocarSom = (n) => {
    const t = new Audio(sons[n]);
    t.play();
  },
  adicionarEfeito = (n) => document.getElementById(n).classList.add("active"),
  removerEfeito = (n) => {
    const t = document.getElementById(n),
      i = () => t.classList.remove("active");
    t.addEventListener("transitionend", i);
  },
  ativarDiv = (n) => {
    const t = n.type == "click" ? n.target.id : n.key.toUpperCase(),
      i = sons.hasOwnProperty(t);
    i && (adicionarEfeito(t), tocarSom(t), removerEfeito(t));
  };

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);

document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#A"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/jump.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 1050));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#S"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/playing-drum-cat-people.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 1050));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#D"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/cat-mad.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 1500));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#F"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/wolf.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 1500));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#G"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/po-belly.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 1500));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#H"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/coyote.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 3e3));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#J"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/omg.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 1500));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#K"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/sadtrambone.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 3e3));
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const k = document.querySelector(".key#L"),
    n = document.body,
    t = n.style.backgroundImage;
  k.addEventListener("click", function () {
    n.style.backgroundImage === t &&
      ((n.style.backgroundImage = `url('./img/laugh.gif')`),
      setTimeout(function () {
        n.style.backgroundImage = t;
      }, 2500));
  });
});
