"use strict";

let menue = document.getElementById("menue");
let close = document.getElementById("close");
let mobileNav = document.getElementById("mobileNav");

menue.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});
