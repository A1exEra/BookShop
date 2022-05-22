/////MODAL WINDOW//////////////////
const fname = document.querySelector(`#name`);
console.log(fname);
const lastName = document.querySelector(`#lastName`);
const date = document.querySelector(`#date`);
const street = document.querySelector(`#street`);
const house = document.querySelector(`#house`);
const flat = document.querySelector(`#flat`);
const form = document.querySelector(`#form`);
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const summary = document.querySelector(`#summary`);
const btnCloseModal = document.querySelector(`.close_modal`);
const btnOpenModal = document.querySelector(`.show_modal`);
console.log(btnOpenModal);
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  console.log(btnOpenModal.textContent);

  summary.innerHTML = `<h3>Thank you, ${fname.value} ${lastName.value}!</h3><br><p>Your ourder has been placed!</p><br><p>It will be dellivered on ${date.value} to ${street.value} ${house.value} flat ${flat.value}</p>.`;
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
});
btnCloseModal.addEventListener(`click`, (e) => {
  e.preventDefault();
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
});
let deliveryDate = new Date();
let deliveryDay = (new Date().getDate() + 1).toString();
console.log(deliveryDay);
let iso_date = deliveryDate.toISOString().substring(0, 10);
console.log(iso_date.slice(0, iso_date.length - 2).concat(deliveryDay));
document
  .querySelector(`#date`)
  .setAttribute(
    "min",
    iso_date.slice(0, iso_date.length - 2).concat(deliveryDay)
  );
let checkbox = document.querySelectorAll(`.checkbox`);
console.log(checkbox);
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", checkedOrNot);
}
let checkboxCount = 2;
function checkedOrNot() {
  if (this.checked) {
    console.log("checked");
    checkboxCount++;
  } else {
    console.log("unchecked");
    checkboxCount--;
  }
  console.log(checkboxCount);
  if (checkboxCount > 2) {
    this.checked = false;
    console.log(this.checked);
    checkboxCount--;
  }
}
