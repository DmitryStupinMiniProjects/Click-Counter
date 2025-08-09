const counterQuantityElement = document.querySelector("[data-js-counter-quantity]")
const counterButtonClickElement = document.querySelector("[data-js-counter-button-click]")
const counterButtonResetElement = document.querySelector("[data-js-counter-button-reset]")
let count = 0

counterButtonClickElement.addEventListener("click", () => {
  if (count < 10) {
    counterQuantityElement.textContent = ++count
  } else {
    alert("Вы превысили количество кликов!")
    counterButtonClickElement.disabled = true;
  }
})

counterButtonResetElement.addEventListener("click", () => {
  if (count === 0) {
    alert("Кликов итак нету!")
  }
  
  if (counterButtonClickElement.disabled) {
    counterButtonClickElement.disabled = false;
  }
  count = 0
  counterQuantityElement.textContent = 0;
})