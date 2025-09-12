let products = [
  { id: 47, name: "Dairy Milk", price: 120, category: "chocolate" },
  { id: 21, name: "Milk bar", price: 100, category: "chocolate" },
  { id: 46, name: "Mysore Sandal", price: 121, category: "soap" },
  { id: 171, name: "Biriyani Masala", price: 150, category: "masala" },
  { id: 36, name: "Karthika Shampoo", price: 123, category: "shampoo" },
  { id: 144, name: "Z Soap", price: 169, category: "soap" },
];

function displayProducts(list) {
  let data = document.getElementById("display-data");
  data.innerHTML = "";
  list.forEach(function (p) {
    data.innerHTML +=
      "<tr><td>" +
      p.id +
      "</td><td>" +
      p.name +
      "</td><td>" +
      p.price +
      "</td></tr>";
  });
}

function filterCategory(cat) {
  let filtered = products.filter(function (p) {
    return p.category === cat;
  });
  displayProducts(filtered);
}

function filterByPrice() {
  let min = parseInt(document.getElementById("minPrice").value) || 0;
  let max = parseInt(document.getElementById("maxPrice").value) || Infinity;
  let filtered = products.filter(function (p) {
    return p.price >= min && p.price <= max;
  });
  displayProducts(filtered);
}

// show/hide the two sort buttons
function showSortOptions() {
  let options = document.getElementById("sortOptions");
  if (options.style.display === "none") {
    options.style.display = "inline";
  } else {
    options.style.display = "none";
  }
}
//increase sort
function sortIncreasing() {
  let list = [...products];
  list.sort(function (a, b) {
    return a.price - b.price;
  });
  displayProducts(list);
}
//decrease sort
function sortDecreasing() {
  let list = [...products];
  list.sort(function (a, b) {
    return b.price - a.price;
  });
  displayProducts(list);
}

//search
let search = document.getElementById("search");
search.addEventListener("keyup", function (event) {
  let searchItem = event.target.value.toLowerCase();
  let searchedItem = products.filter((ele) =>
    ele.name.toLowerCase().includes(searchItem)
  );
  displayProducts(searchedItem);
});

//category
document
  .getElementById("categorySelect")
  .addEventListener("change", function (e) {
    filterCategory(e.target.value);
  });

//range
let rangeInput = document.getElementById("range");
let rangeValue = document.getElementById("rangeValue");

rangeInput.addEventListener("input", function (e) {
  let maxPrice = parseInt(e.target.value);

  rangeValue.textContent = maxPrice;
  let filtered = products.filter((p) => p.price <= maxPrice);
  displayProducts(filtered);
});
