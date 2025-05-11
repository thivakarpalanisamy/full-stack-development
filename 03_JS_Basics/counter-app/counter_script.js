let count = 0;

function updateCount() {
  document.getElementById("count").innerText = count;
}

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "+") count++;
    else if (count > 0) count--;
    updateCount();
  });
});
