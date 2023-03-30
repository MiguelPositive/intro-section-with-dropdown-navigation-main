const body = document.querySelector("body");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const menuContainer = document.getElementById("menu-container");
const backdrop = document.getElementById("backdrop");
const footer = document.querySelector("footer");
const intemsFooter = document.getElementById("items-footer");
const features = document.getElementById("features");
const listFeatures = document.getElementById("list-features");

const details = document.querySelectorAll("details");

const handleClickOpenMenu = () => {
  body.style.cssText = "overflow: hidden";

  nav.style.cssText =
    "transition: 0.2s all; overflow: visible; z-index: 20; background-color: #666666";
  main.style.cssText = "overflow-y:hidden; overflow-x: hidden";

  menuContainer.style.cssText =
    "transition: linear 0.2s; right: 0; z-index: 20";
  backdrop.style.cssText = "transition: 0.3s all; opacity: 0.6; z-index: 10";

  footer.style.cssText = "transition: 0.2s all ;background-color: #666666";
  intemsFooter.style.cssText = "transition: 0.3s all; opacity: 0";
};

const handleClickCloseMenu = () => {
  body.style.cssText = "max-height: 100vh";

  nav.style.cssText = "transition: 0.3s all; background-color: white";

  menuContainer.style.cssText =
    "transition: linear 0.2s all; right: -100%; z-index: 20";

  backdrop.style.cssText = "transition: 0.3s all; opacity: 0; z-index: -10;";

  footer.style.cssText = "transition: 0.2s all; background: none";
  intemsFooter.style.cssText = "transition: 0.3s all; opacity: 1";
};

const handleClicks = (e) => {
  switch (true) {
    case e.target.matches("#btn-menu"):
      handleClickOpenMenu();

      break;

    case e.target.matches("#btn-close"):
      handleClickCloseMenu();
      break;

    default:
      break;
  }
};

document.addEventListener("click", handleClicks);
