function myFunction(p) {
  return p * p;
}
button = document.getElementById("task_1_button");
button.onclick = function() {
   let x = document.getElementById("task_1").value;
   document.getElementById("task_1_answer").innerText = myFunction(x); 
};