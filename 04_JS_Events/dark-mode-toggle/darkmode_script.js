let btn = document.getElementById("toggle-button");
btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    let isDark = document.body.classList.contains("dark");
    const mode = isDark ? "light" : "dark";
    btn.innerText = `Toggle ${mode}`;
});