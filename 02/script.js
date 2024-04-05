document.querySelector(".opener").addEventListener("click", () => {
  document.querySelector(".window").classList.add("open");
});

document.querySelector(".yes").addEventListener("click", () => {
  document.querySelector(".window").classList.remove("open");
});

document.querySelector(".no").addEventListener("click", () => {
  document.querySelector(".window").classList.remove("open");
});
