// get the input value when user clicked

let count = 0;
document.getElementById("input-btn").addEventListener("click", function (e) {
  count++;
  const inputValue = document.getElementById("input-value").value;
  if (inputValue === "") {
    alert("Please Enter a string value");
  } else {
    const mainContainer = document.getElementById("content-container");
    const tableContainer = document.createElement("tr");
    tableContainer.innerHTML = `<th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td><button class='btn btn-danger delete-btn'>Delete</button>
    <button class="btn btn-success done-btn">Done</button>
    </td>`;
    // <button class="btn btn-success edit-btn">Edit</button>
    mainContainer.appendChild(tableContainer);
    document.getElementById("input-value").value = "";

    const deleteButton = document.getElementsByClassName("delete-btn");
    const doneButton = document.getElementsByClassName("done-btn");
    // const editButton = document.getElementsByClassName("edit-btn");

    for (const button of deleteButton) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.display = "none";
      });
    }
    for (const button of doneButton) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }
    /* for (const button of editButton) {
      button.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    } */
  }
});
document.getElementById("clear-btn").addEventListener("click", function (e) {
  document.getElementById("content-container").style.display = "none";
});
