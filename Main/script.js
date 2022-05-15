/*
fetch('../books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        });
*/
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
const navArray = [`BookMarks`, `Collection`, `Shop`, `Contacts`];
const navBar = document.createElement(`nav`);
navBar.classList.add(`nav`);
const navUl = document.createElement(`ul`);
navUl.id = `nav`;
const navLi = document.createElement(`li`);
for (li of navArray) {
  const navLink = document.createElement(`a`);
  navLink.href = `#`;
  navLink.append(li);
  navLi.append(navLink);
  navUl.append(navLi);
  navLi.classList.add(`nav-list`);
}
header.append(navUl);
////////ABOUT SECTION////////////////////
const main = document.createElement(`main`);
const about = document.createElement(`div`);
const h1 = document.createElement(`h1`);
const aboutH2 = document.createElement(`h2`);
const aboutP = document.createElement(`p`);
h1.textContent = `Welcome to Book Shelf!`;
aboutH2.textContent = `The only place where you can find any kinds of books to read.`;
aboutP.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magnam rerum amet labore vero, itaque suscipit, debitis voluptatum enim commodi optio. Corporis, architecto necessitatibus! Architecto doloribus enim dolores, illo mollitia, possimus magni voluptate iste molestiae molestias error esse quod sequi deserunt cumque, eum repellat temporibus modi aspernatur quo doloremque perferendis.`;
about.classList.add(`about`);
about.append(h1, aboutH2, aboutP);
main.append(about);
document.body.append(main);
main.classList.add(`main`);
about.classList.add(`about`);
/////BOOK  CATALOG SECTION////////////////////
const catalogContainer = document.createElement(`div`);
catalogContainer.classList.add(`catalog_cntainer`);
const catalogBook = document.createElement(`div`);
catalogBook.classList.add(`catalog_info`);
const catalogInfo = document.createElement(`div`);
catalogInfo.id = `catalog_info`;
catalogContainer.classList.add(`catalog_container`);

const catalogH3 = document.createElement(`h3`);
const catalogP = document.createElement(`p`);
catalogH3.textContent = `Book Catalog`;
catalogP.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est voluptatum nisi facilis? Incidunt doloremque doloribus obcaecati necessitatibus sed minima.`;
//////?????????????????
catalogInfo.append(catalogH3, catalogP);
///////???????????????
catalogContainer.append(catalogInfo, catalogBook);
main.append(catalogContainer);
let bookCounter = 6;
while (bookCounter > 0) {
  bookCounter--;
  catalogBook.insertAdjacentHTML(
    "afterbegin",
    `<div class="book_container" id="book_container">
    <img src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_1280.jpg" alt="image of a book">
    <div class="book_info">
        <h4>Book Title</h4>
        <h5>Author</h5>
        <h3>price</h3>
        <p>Show more</p>
        <button>Add to cart</button>
    </div>
    </div>`
  );
}
// catalogBook.h4.textContent = `ASJAHSKFJASHKF`;
/////SHOPPING SECTION////////////////////
const shoppingSection = document.createElement(`div`);
const shoppingH3 = document.createElement(`h3`);
shoppingH3.textContent = `Your shopping cart`;
const shoppingList = document.createElement(`div`);
const shoppingP = document.createElement(`p`);
shoppingP.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est voluptatum nisi facilis? Incidunt doloremque doloribus obcaecati necessitatibus sed minima.`;
shoppingSection.append(shoppingH3, shoppingList, shoppingP);
shoppingList.style.height = `30vh`;
shoppingSection.style.background = `#E3B448`;
main.append(shoppingSection);
/////////////////////////////////////////////////FOOTER SECTION///////////////////////////////
const footer = document.createElement(`footer`);
const footerDivLeft = document.createElement(`div`);
const footerDivCenter = document.createElement(`div`);
const footerDivRight = document.createElement(`div`);
footerDivLeft.insertAdjacentHTML(
  "afterbegin",
  `<div id="footer_contacts" class="footer_info">
<h3>For questions and suggestions</h3>
    <a class="footer_icons" href="href="mailto:abc@example.com?subject = Feedback&body = Message" target="_blank"
  ><img src="../../assets/icons/icon-email.svg" alt="email_icon" />
  <h4>email@shelter.com</h4></a
>
<a class="footer_icons" href="tel:+136745677554"
  ><img src="../../assets/icons/icon-phone.svg" alt="phone_icon" />
  <h4>+13 674 567 75 54</h4></a
>
</div>`
);
footerDivCenter.insertAdjacentHTML(
  `afterbegin`,
  `<div id="footer_location" class="footer_info">
<h3>We are waiting for your visit</h3>
<a
  class="footer_icons"
  href="https://www.google.co.uk/maps/@42.3540486,-71.0690257,15.79z"
  target="_blank"
  ><img src="../../assets/icons/icon-marker.svg" alt="marker_icon" />
  <h4>
    1 Central Street, Boston<br />
    (entrance from the store)
  </h4></a
>
<a
  class="footer_icons"
  href="https://www.google.co.uk/maps/place/South+Park+Court,+18+S+Park+Rd,+London+SW19+8TD/@51.4215677,-0.2010437,17.19z/data=!4m5!3m4!1s0x487608baa7401b31:0x873a95ca58e122b2!8m2!3d51.4202192!4d-0.200152"
  target="_balnk"
  ><img src="../../assets/icons/icon-marker.svg" alt="marker_icon" />
  <h4>18 South Park, London</h4></a
>`
);
footerDivRight.insertAdjacentHTML(
  `afterbegin`,
  `</div>
<div id="footer_img">
  <img src="../../assets/images/footer-puppy.png" alt="image of a dog" />
</div>`
);
footer.append(footerDivLeft, footerDivCenter, footerDivRight);
main.append(footer);
footer.classList.add(`footer`);
