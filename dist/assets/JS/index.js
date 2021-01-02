function removeDet() {
  const details = this.parentNode;
  if (details.style.display == "flex") {
    details.style.display = "none"
    details.parentNode.querySelector('.read-more').textContent = '> Read More'
    details.previousElementSibling.classList.remove('pin')
  }
}

function showDetails() {
  const parent = this.parentNode.parentNode.parentNode
  const details = parent.nextElementSibling
  if (details.style.display != "flex") {
    details.style.display = "flex"
    this.textContent = '> Close'
    parent.classList.add('pin')
  } else {
    details.style.display = "none"
    this.textContent = '> Read More'
    parent.classList.remove('pin')
  }
}

const btns = document.querySelectorAll(".button")
const read = document.querySelectorAll(".read-more")
const closeDet = document.querySelectorAll('.det-close')

read.forEach(cl => {
  cl.addEventListener("click", showDetails)
})
closeDet.forEach(close => {
  close.addEventListener("click", removeDet)
})

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = e.target.offsetTop;
    let btn_left_pos = e.target.offsetLeft;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    const span = document.createElement("span");
    span.classList.add("button__ripple");
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    this.appendChild(span);

    setTimeout(() => this.removeChild(span), 500);
  });
});