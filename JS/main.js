// "use strict";
// const myMegaMenuButton = document.getElementById("nav-mega-menu");
// const myMegaMenu = document.getElementById("mega-menu");


// myMegaMenuButton.addEventListener("click" , function () {
//     myMegaMenu.style.display = "flex";
// });

// console.log(myMegaMenuButton);
// console.log(myMegaMenu);



const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
