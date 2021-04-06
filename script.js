const list = document.querySelector(".left-items > ul");
const hamburger = document.querySelector(".mobile-nav");


const listItems = list.children;

Array.from(listItems).forEach(item => {
   const dropdown = item.children[1];

   item.addEventListener("click", () => {
      dropdown.classList.toggle("show-dropdown");
   });
})

hamburger.addEventListener("click", () => {
   const mobileNavControl = hamburger.children[0];

   const image = mobileNavControl;
   const attr = image.getAttribute("src");

   if(attr === "/images/icon-hamburger.svg") {
      image.setAttribute("src", "/images/icon-close.svg");
      list.style.display = "block";
   } else {
      image.setAttribute("src", "/images/icon-hamburger.svg");
      setTimeout(() => {
         list.animate([
            {opacity: "1"},
            {opacity: "0"}
         ], {
            duration: 1000,
            // iterations: 1
         });
      }, 1000);
      list.style.display = "none";
   }
});