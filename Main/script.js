//////////////////////////////////////////////
////HEADER SECTOIN////////////////////////
const header = document.createElement(`header`);
const logo = document.createElement(`div`);
const logoH2 = document.createElement(`h2`);
const logoP = document.createElement(`p`);
document.body.append(header);
logoP.textContent = `Let your imagination loose`;
logoH2.textContent = `Book Shelf`;
header.append(logo);
logo.append(logoH2, logoP);
logo.classList.add(`logo`);
header.classList.add(`header`);
// NAVIGATION BAR////////////////
///DocumentFragment()/////////////
let fragmentNav = new DocumentFragment();
//////////////////////////////////
const navArray = [`Collection`, `Shop`, `Contacts`];
const navBar = document.createElement(`nav`);
navBar.classList.add(`nav`);
const navUl = document.createElement(`ul`);
navUl.id = `nav`;
const navLi = document.createElement(`li`);
let navHref = [`collection`, `shop`, `contacts`];
navArray.forEach((el) => {
  const navLink = document.createElement(`a`);
  navLink.href = `#${el.toLowerCase()}`;
  navLink.append(el);
  navLi.append(navLink);
  navLi.classList.add(`nav-list`);
  fragmentNav.append(navLi);
});
navUl.append(fragmentNav);
navBar.append(navUl);
header.append(navBar);
///////////////////////////////////////////

////////ABOUT SECTION////////////////////
const main = document.createElement(`main`);
const about = document.createElement(`div`);
const h1 = document.createElement(`h1`);
const aboutH2 = document.createElement(`h2`);
const aboutP = document.createElement(`p`);
const aboutImg = document.createElement(`img`);
aboutImg.src = `../content/owl-4783407_640.png`;
h1.textContent = `Welcome to Book Shelf!`;
aboutH2.textContent = `The only place where you can find any kinds of books to read.`;
aboutP.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magnam rerum amet labore vero, itaque suscipit, debitis voluptatum enim commodi optio. Corporis, architecto necessitatibus! Architecto doloribus enim dolores, illo mollitia, possimus magni voluptate iste molestiae molestias error esse quod sequi deserunt cumque, eum repellat temporibus modi aspernatur quo doloremque perferendis.`;
about.classList.add(`about`);
about.append(aboutImg, h1, aboutH2, aboutP);
main.append(about);
document.body.append(main);
main.classList.add(`main`);
about.classList.add(`about`);
/////BOOK  CATALOG SECTION////////////////////
const catalogContainer = document.createElement(`div`);
catalogContainer.classList.add(`catalog_container`);
const catalogBook = document.createElement(`div`);
catalogBook.classList.add(`catalog_info`);
const catalogInfo = document.createElement(`div`);
catalogInfo.classList.add(`catalog_info`);
const catalogH3 = document.createElement(`h3`);
const catalogP = document.createElement(`p`);
catalogH3.textContent = `Book Catalog`;
catalogP.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est voluptatum nisi facilis? Incidunt doloremque doloribus obcaecati necessitatibus sed minima.`;
//////?????????????????
catalogInfo.append(catalogH3, catalogP);
///////???????????????
catalogContainer.append(catalogInfo, catalogBook);
main.append(catalogContainer);
catalogContainer.id = `collection`;
/////FETCHING THIS GODDAMN JSON THINGIE////////
fetch("../books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    generateBooks(data);
  });
///////////////////////////////////////////
///JSON DOCUMENFRAGMENT()
let jsonFragment = new DocumentFragment();
////////////////////////////
function generateBooks(data) {
  for (let i = 0; i < data.length; i++) {
    let title = data[i].title;
    console.log(title);
    const fragmentJSON = catalogBook.insertAdjacentHTML(
      "afterbegin",
      `<div class="book_container" id="book_container">
          <div class="book_info">
          <img src="${data[i].imageLink}" alt="image of a book">
          </div>
          <div class="book_info" id="book_text">
              <h4 class="book_title">"${data[i].title}"</h4>
              <h5 class="book_title">Author:<br>${data[i].author}</h5>
              <h5 class="book_title">Price: ${data[i].price}&pound;</h5>
              <button id="addToCart">Add to cart</button>
              <button class="open_modal">Show More</button>
              <div class="modal hidden">
              <button class="close_modal">&times;</button>
              <p>${data[i].description}</p>
              </div>
              </div>
              </div>`
    );
    jsonFragment.append(fragmentJSON);
    /////MODAL WINDOW//////////////////
    const overlay = document.createElement(`div`);
    overlay.classList.add(`overlay`, `hidden`);
    const modal = document.querySelector(`.modal`);
    catalogBook.append(overlay);
    const closeBtnModal = document.querySelector(`.close_modal`);
    const btnsOpenModal = document.querySelector(`.open_modal`);
    console.log(modal);
    console.log(closeBtnModal);
    btnsOpenModal.addEventListener(`click`, function (e) {
      e.preventDefault();
      console.log(`button clicked`);
      modal.classList.remove(`hidden`);
      overlay.classList.remove(`hidden`);
    });
    closeBtnModal.addEventListener(`click`, function (e) {
      e.preventDefault();
      modal.classList.add(`hidden`);
      overlay.classList.add(`hidden`);
    });
    //////////SHOPPING CART/////////////
    addToCart(data, i);
    ////////////////////////////////////
  }
}
/////SHOPPING SECTION////////////////////
////////ADD BOOK TO A SHOPPING CART/////
let TotalOrderCount = 0;
function addToCart(data, i) {
  const addToCart = document.querySelector(`#addToCart`);
  console.log(addToCart);
  addToCart.addEventListener(`click`, function (e) {
    e.preventDefault();
    console.log(`Shopping Click detected`);
    var removeContainer = document.createElement(`div`);
    var removeBtn = document.createElement(`button`);
    var shopImg = document.createElement(`img`);
    let shopBookInfo = document.createElement(`div`);
    shopBookInfo.classList.add(`shopBookInfo`);
    shopBookInfo.innerHTML = `<div class="book_info" id="book_text">
    <p class="book_title">"${data[i].title}"</p>
    <p class="book_title">By:<br>${data[i].author}</p>
    <p class="book_title">Price: ${data[i].price}&pound;</p>`;
    removeBtn.innerHTML = `<button class="remove_shop_item">&times;</button>`;
    shopImg.classList.add(`shopImg`);
    shopImg.src = data[i].imageLink;
    removeBtn.classList.add(`remove_shop_item`);
    removeContainer.append(shopImg, shopBookInfo, removeBtn);
    removeContainer.classList.add(`removeContainer`);
    shoppingList.append(removeContainer);
    TotalOrderCount += data[i].price;
    totalOrder.textContent = `Total Price: ${TotalOrderCount}`;
    removeBtn.addEventListener(`click`, function (e) {
      e.preventDefault();
      removeContainer.remove();
      totalOrder.textContent = `Total Price: ${(TotalOrderCount -=
        data[i].price)}`;
    });
    console.log(TotalOrderCount);
    if (TotalOrderCount > 0) {
      confirmOrder.classList.remove(`hidden`);
    }
  });
}
/////////////////////////////////////////
//////////////////////////////////////////////
const shoppingSection = document.createElement(`div`);
shoppingSection.id = `shop`;
const shoppingH3 = document.createElement(`h3`);
shoppingH3.textContent = `Your shopping cart`;
const shoppingList = document.createElement(`div`);
shoppingList.classList.add(`shoppingList`);
const confirmOrder = document.createElement(`button`);
const totalOrder = document.createElement(`p`);
totalOrder.classList.add(`totalOrder`);
totalOrder.textContent = `Total Price: `;
confirmOrder.innerHTML = `<a href="../Form/form.html">Place Order</a>`;
confirmOrder.classList.add(`confirmOrder`, `hidden`);
shoppingSection.append(shoppingH3, shoppingList, totalOrder, confirmOrder);
shoppingList.style.minHeight = `40vh`;
shoppingSection.classList.add(`shoppingSection`);
main.append(shoppingSection);

/////////////////////////////////////////////////FOOTER SECTION///////////////////////////////
const footer = document.createElement(`footer`);
const footerDivLeft = document.createElement(`div`);
const footerDivCenter = document.createElement(`div`);
const footerDivRight = document.createElement(`div`);
footerDivLeft.insertAdjacentHTML(
  "afterbegin",
  `<div id="footer_contacts" class="footer_info">
  <a class="footer_icons" href="mailto:abc@example.com?subject = Feedback&body = Message" target="_blank"
  ><img src="https://img.icons8.com/ios/344/email-sign.png" alt="email_icon" />
  <h4>book_shelf@books.com</h4></a
  >
  <a class="footer_icons" href="tel:+136745677554"
  ><img src="https://img.icons8.com/material/344/phone-not-being-used.png" alt="phone_icon" />
  <h4>+77 345 999 88 77</h4></a
>
<div id="footer_location" class="footer_info">
<a
  class="footer_icons"
  href="https://www.google.co.uk/maps/@42.3540486,-71.0690257,15.79z"
  target="_blank"
  ><img src="https://img.icons8.com/ios-filled/344/address--v1.png" alt="marker_icon" />
  <h4>
    1 Central Street, Boston<br />
    (entrance from the store)
  </h4></a>
</div>`
);
footerDivRight.insertAdjacentHTML(
  `afterbegin`,
  `</div>
<div id="footer_img" class="footer_info">
  <img src="../content/a-book-3346785_640.png" alt="image of some books" />
</div>`
);
footer.append(footerDivLeft, footerDivCenter, footerDivRight);
main.append(footer);
footer.classList.add(`footer`);
footer.id = `contacts`;
footer.addEventListener(`click`, (e) => {
  e.preventDefault();
  header.scrollIntoView({ behavior: `smooth` });
});
///////////////////////////////////////////////////
