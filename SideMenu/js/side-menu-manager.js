function initialize() {
  const headerMenuIcon = document.getElementById("header-menu-icon");
  headerMenuIcon.addEventListener("click", showSideMenu);

  const sideMenuCloseIcon = document.getElementById("side-menu-close-icon");
  sideMenuCloseIcon.addEventListener("click", closeSideMenu);
}

function showSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  if (sideMenu.classList.contains("side-menu-hidden")) {
    sideMenu.classList.remove("side-menu-hidden");
  }
  sideMenu.classList.add("side-menu-visible");
}

function closeSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  if (sideMenu.classList.contains("side-menu-visible")) {
    sideMenu.classList.remove("side-menu-visible");
  }
  sideMenu.classList.add("side-menu-hidden");
}

initialize();