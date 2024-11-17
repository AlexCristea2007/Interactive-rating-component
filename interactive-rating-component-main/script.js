const defaultScreen = document.querySelector(".default-screen");
const confirmationScreen = document.querySelector(".confirmation-screen");
const rateBtns = document.querySelectorAll(".rate-btn");
const submitBtn = document.querySelector(".submit-btn");
const selectedRate = document.querySelector(".selected-rate");
let value = 0;

rateBtns.forEach((rateBtn) => {
  rateBtn.addEventListener("click", () => {
    rateBtns.forEach((btn) => {
      btn.classList.remove("clicked");
    });

    value = rateBtn.textContent;
    selectedRate.textContent = value;
    rateBtn.classList.add("clicked");
  });
});

submitBtn.addEventListener("click", () => {
  if (value !== 0) {
    defaultScreen.style.display = "none";
    confirmationScreen.style.display = "flex";
  }
});
