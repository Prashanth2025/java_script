let sbtn = document.getElementById("sbtn");
let input = document.getElementById("taskInput");
let c1 = document.getElementById("cont");
let arr = ["Tea", "Coffee", "Coke"];

function task() {
  c1.innerHTML = "";

  if (arr.length === 0) {
    c1.innerHTML = `<p class= "text-center text-muted">Please Update the Tasks.<p>`;
    return;
  }
  arr.forEach((item, index) => {
    c1.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center shadow-sm p-3 mb-2 rounded-1">
         <span>${item}</span>
        <div class="btn-group">
       <button onclick="editTask(${index})" class="btn btn-sm btn-outline-secondary me-1 rounded-1">
        <i class="bi bi-pencil"></i>
      </button>
      <button onclick="del(${index})" class="btn btn-sm btn-outline-danger rounded-1">
       <i class="bi bi-x-octagon-fill"></i>
      </button>
      </div>
      </li>`;
  });
}

function del(index) {
  arr.splice(index, 1);
  task();
}

sbtn.addEventListener("click", function () {
  let value = input.value.trim();
  if (value) {
    arr.push(value);
    input.value = "";
    task();
  }
});

task();
