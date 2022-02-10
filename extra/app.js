/* const allButton = document.getElementsByClassName("button-test");
const prime = document.getElementById("prime"); */

// console.log(allButton);
// console.log(prime);

/* for (const button of allButton) {
  button.addEventListener("click", function (event) {
    // console.log(event.target.id);
    if (event.target.id == "prime") {
      document.getElementById("title").style.color = "red";
    } else {
      document.getElementById("title").style.color = "green";
    }
  });
} */

/* for (let i = 0; i < allButton.length; i++) {
  const element = allButton[i];
  console.log(element);
}
 */

let count = 0;
// using addEvent listerer
/* document.getElementById("add").addEventListener("click", function (e) {
  count++;
  control("count");
}); */
// just for calling function
function add() {
  count++;
  control("count");
}

/* document.getElementById("minus").addEventListener("click", function (e) {
  count--;
  control("count");
}); */
function sub() {
  count--;
  control("count");
}

function control(id) {
  document.getElementById(id).innerText = count;
}
