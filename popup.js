/*function displayInputs() {
   
}*/

function addInput(text) {
  var wrapper = document.getElementById('triggers');
  var input = document.createElement("input");
  input.type = "text";
  input.name = text;
  wrapper.appendChild(input);
  wrapper.appendChild(document.createElement("br"));
}

function saveOptions() {
  alert("Are you working?");
}

function contentLoaded() {
  var save_btn, add_btn, aboutDiv;
  save_btn = document.getElementById('save_btn');
  add_btn = document.getElementById('add_btn');

  save_btn.addEventListener('click', saveOptions);
  add_btn.addEventListener('click', addInput);
}

document.addEventListener('DOMContentLoaded', contentLoaded);
