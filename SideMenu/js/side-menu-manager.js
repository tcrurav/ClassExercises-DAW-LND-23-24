function initialize(){
  const headerMenuIcon = document.getElementById("header-menu-icon");
  headerMenuIcon.addEventListener("click", showSideMenu);

  const sideMenuCloseIcon = document.getElementById("side-menu-close-icon");
  sideMenuCloseIcon.addEventListener("click", closeSideMenu);
}

function showSideMenu(){
  const sideMenu = document.getElementById("side-menu");
  sideMenu.style.visibility = "visible";
}

function closeSideMenu(){
  const sideMenu = document.getElementById("side-menu");
  sideMenu.style.visibility = "hidden";
}

initialize();