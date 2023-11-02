
function initializeBicyclesInLocalStorage() {
  const bicycles = [
    {
      brand: "BH",
      model: "Sky"
    },
    {
      brand: "Orbea",
      model: "Fantasy"
    }
  ];

  localStorage.setItem("bicycles", JSON.stringify(bicycles));
}

function getBicyclesFromLocalStorage(){
  let bicycles = JSON.parse(localStorage.getItem("bicycles"));
  return bicycles;
}

function insertBicycleToLocalStorage(brand, model){
  let bicycles = JSON.parse(localStorage.getItem("bicycles"));
  bicycles.push({
    brand: brand,
    model: model
  });

  localStorage.setItem("bicycles", JSON.stringify(bicycles));
}

function deleteBicycleFromLocalStorage(bicycleId){
  let bicycles = JSON.parse(localStorage.getItem("bicycles"));
  bicycles.splice(bicycleId, 1);

  localStorage.setItem("bicycles", JSON.stringify(bicycles));
}

function initialize() {
  initializeBicyclesInLocalStorage();

  const BICYCLE_FORM = document.getElementById("bicycle-form");
  BICYCLE_FORM.addEventListener("submit", addBicycle);

  showBicycles();
}

function addBicycle(event) {
  event.preventDefault();

  const BRAND = event.target.brand.value;
  const MODEL = event.target.model.value;

  const BICYCLE_FORM = document.getElementById("bicycle-form");
  BICYCLE_FORM.reset();

  insertBicycleToLocalStorage(BRAND, MODEL);

  showBicycles();
}

function showBicycles() {
  const BICYCLE_LIST = document.getElementById("bicycle-list");

  const bicycles = getBicyclesFromLocalStorage();

  BICYCLE_LIST.innerHTML = "";

  for (let i = 0; i < bicycles.length; i++) {
    BICYCLE_LIST.innerHTML += `<li>${bicycles[i].brand}<button onclick="deleteBicycle(${i})">DELETE</button></li>`;
  }
}

function deleteBicycle(bicycleId) {
  deleteBicycleFromLocalStorage(bicycleId);
  showBicycles();
}

initialize();