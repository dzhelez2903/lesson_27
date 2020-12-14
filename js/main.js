//Task1
button = document.getElementById("task_1_button");
button.onclick = function () {
  let x = document.getElementById("task_1").value;
  if (isNaN(x)) {
    document.getElementById("task_1_answer").textContent = "Циферки введи!";
  } else if (x >= 0 && x < 3) {
    document.getElementById("task_1_answer").textContent = "младенец";
  } else if (x >= 3 && x <= 11) {
    document.getElementById("task_1_answer").textContent = "отрок";
  } else if (x >= 12 && x <= 18) {
    document.getElementById("task_1_answer").textContent = "юноша";
  } else if (x >= 19 && x <= 59) {
    document.getElementById("task_1_answer").textContent = "муж";
  } else if (x >= 60) {
    document.getElementById("task_1_answer").textContent = "старец";
  }
};
//Task2
button = document.getElementById("task_2_button");
button.onclick = function () {
  let symbol = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
  let n = document.getElementById("task_2").value;
  if (document.getElementById("task_2").validity.rangeOverflow) {
    document.getElementById("task_2_answer").textContent =
      "Не рви кіньми! По одному!";
  } else if (n == 0) {
    document.getElementById("task_2_answer").textContent = symbol[0];
  }
};
