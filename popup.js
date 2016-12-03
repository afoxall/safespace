function displayInputs() {
 var triggerList = ["help", "me", "i'm", "poor"];
 for (i in triggerList) {
     addTriggers(triggerList[i]);
 }
}

function addTriggers(text) {
  var wrapper, input, remove;
  wrapper = document.getElementById('triggers');
  input = document.createElement("input");
  input.type = "text";
  input.name = text;
  input.value = text;
  remove = document.createElement("button");
  remove.type = "remove_btn";
  remove.id = "remove_btn";
  remove.value = "X";
  wrapper.insertBefore(document.createElement("br"), wrapper.firstChild);
  wrapper.insertBefore(remove, wrapper.firstChild);
  wrapper.insertBefore(input, wrapper.firstChild);
}

function addInput() {
  var wrapper = document.getElementById('triggers');
  var input = document.createElement("input");
  input.type = "text";
  input.name = "";
  wrapper.appendChild(input);
  wrapper.appendChild(document.createElement("br"));
}

function saveOptions() {
  confirm("Are you working?");
}

function contentLoaded() {
  displayInputs();

  var save_btn, add_btn;
  save_btn = document.getElementById('save_btn');
  add_btn = document.getElementById('add_btn');

  save_btn.addEventListener('click', saveOptions);
  add_btn.addEventListener('click', addInput);
}

document.addEventListener('DOMContentLoaded', contentLoaded);
