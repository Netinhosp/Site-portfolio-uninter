const menuMobileImage = document.querySelector("#menu-mobile-image");
const menuMobileImageArrow = document.querySelector("#menu-mobile-image-arrow");
const menuMobile = document.querySelector("#menu-mobile");

menuMobileImage.addEventListener("click", () => {

  menuMobileImage.style.display = 'none'
  menuMobileImageArrow.style.display = 'block'

  menuMobile.classList.add("menu-mobile-ativo");

})

menuMobileImageArrow.addEventListener("click", () => {

  menuMobileImage.style.display = 'block'
  menuMobileImageArrow.style.display = 'none'

  menuMobile.classList.remove("menu-mobile-ativo");

})