// selecting
const table = document.querySelector(".table tbody");
const form = document.querySelector("form");
const formHeading = form.querySelector("h2");
const totalInput = form.querySelector(
  'input[placeholder="Enter total expense"]'
);
const spenderSelect = form.querySelector("select");
const splitButton = form.querySelector("button");

// Track the currently selected friend row
let selectedFriendRow = null;

// ======================
// Handle "Split" button click in table
// ======================
table.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Split") {
    selectedFriendRow = e.target.closest("tr");
    const friendName = selectedFriendRow.querySelector(".name").textContent;

    // Update form heading and select dropdown
    formHeading.textContent = `Split with ${friendName}`;
    spenderSelect.value = friendName;
  }
});

// ======================
// Handle "Add friend" button
// ======================
table.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON" && e.target.textContent === "Add friend") {
    const friendName = prompt("Enter friend's name:");
    if (!friendName) return;

    // Create new table row for friend
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td class="square-cell">
        <img src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt="img not found" />
      </td>
      <td class="name">${friendName}</td>
      <td><button>Split</button></td>
    `;
    table.insertBefore(newRow, table.lastElementChild);

    // Add friend to select dropdown
    const option = document.createElement("option");
    option.textContent = friendName;
    spenderSelect.appendChild(option);
  }
});

// ======================
// Handle form submission for splitting expense
// ======================
splitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (!selectedFriendRow) {
    alert("Please select a friend by clicking Split!");
    return;
  }

  const total = Number(totalInput.value);
  const spender = spenderSelect.value;

  if (!total || spender === "Who is paying?") {
    alert("Please fill all fields correctly!");
    return;
  }

  // Calculate half-and-half split
  const half = total / 2;
  let message = "";

  // Show "All settled" if total is 0, otherwise display who owes whom
  if (total === 0) {
    message = "All settled! No one owes anything.";
  } else {
    message =
      spender === "You" ? `Friend owes you ₹${half}` : `You owe ₹${half}`;
  }

  // Display message below the friend's name in the same cell
  const nameCell = selectedFriendRow.cells[1]; // 2nd cell = name
  let messageDiv = nameCell.querySelector(".split-message");

  // Create message div if it doesn't exist
  if (!messageDiv) {
    messageDiv = document.createElement("div");
    messageDiv.classList.add("split-message");
    messageDiv.style.color = "green"; // optional styling
    messageDiv.style.fontSize = "1em"; // optional styling
    nameCell.appendChild(messageDiv);
  }

  // Update message text
  messageDiv.textContent = message;

  // Reset form
  totalInput.value = "";
  spenderSelect.value = "Who is paying?";
  formHeading.textContent = "Split with .....";
});
