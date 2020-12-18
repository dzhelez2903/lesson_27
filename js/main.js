//Task1
button1 = document.getElementById("task_1_button");
button1.onclick = function () {
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
button2 = document.getElementById("task_2_button");
button2.onclick = function () {
  let symbol = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
  let n = document.getElementById("task_2").value;
  if (!document.getElementById("task_2").checkValidity()) {
    document.getElementById(
      "task_2_answer"
    ).textContent = document.getElementById("task_2").validationMessage;
  } else {
    document.getElementById("task_2_answer").textContent = symbol[n];
  }
};
//Task3
button3 = document.getElementById("task_3_button");
button3.onclick = function () {
  let x = document.getElementById("task_3").value;
  let y = String(x).split("");
  let a = y[0] / 1;
  let b = y[1] / 1;
  let c = y[2] / 1;
  if (!document.getElementById("task_3").checkValidity()) {
    document.getElementById(
      "task_3_answer"
    ).textContent = document.getElementById("task_3").validationMessage;
  } else if (a == b || b == c || c == a) {
    document.getElementById("task_3_answer").textContent = "есть!";
  } else {
    document.getElementById("task_3_answer").textContent = "неть!";
  }
};
