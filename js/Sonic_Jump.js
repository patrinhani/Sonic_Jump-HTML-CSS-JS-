const sonic = document.querySelector(".sonic");
const pipe = document.querySelector(".pipe");

const jump = () => {
  sonic.classList.add("jump");
  sonic.src = "img/sonic jump.gif";
  setTimeout(() => {
    sonic.src = "img/sonic 01.gif ";
    sonic.classList.remove("jump");
  }, 500);
};

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    jump();
  }
});

console.log("loop");
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const sonicPosition = +window
    .getComputedStyle(sonic)
    .bottom.replace("px", "");

  if (pipePosition < 90 && pipePosition > 0 && sonicPosition < 60) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    sonic.style.animation = "none";
    sonic.style.bottom = `${sonicPosition}px`;
    sonic.src =
      "img/artworks-JmUI3hseNkssyP6K-RctjIQ-t500x500-removebg-preview.png ";
    sonic.style.width = "140px";
    sonic.style.marginLeft = "-10px";

    // clearInterval(loop)
  }
}, 10);

