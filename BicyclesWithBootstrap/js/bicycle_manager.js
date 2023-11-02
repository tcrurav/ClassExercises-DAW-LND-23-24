let bicycles = [
  {
    brand: "BH",
    model: "Sky"
  },
  {
    brand: "Orbea",
    model: "Fantasy"
  },
  {
    brand: "Decathlon",
    model: "Something"
  },
  {
    brand: "Other",
    model: "pin"
  },
  {
    brand: "BH",
    model: "Sky"
  },
  {
    brand: "Orbea",
    model: "Fantasy"
  },
  {
    brand: "Decathlon",
    model: "Something"
  },
  {
    brand: "Other",
    model: "pin"
  }
];

function showBicycles(){
  const BICYCLE_LIST = document.getElementById("bicycle-list"); 

  BICYCLE_LIST.innerHTML = "";

  for(let i = 0; i < bicycles.length; i++){
    BICYCLE_LIST.innerHTML += `<li>${bicycles[i].brand}</li>`;
  }
  
}

showBicycles();