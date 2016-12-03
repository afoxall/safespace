function displayInputs(triggerList) {
 for (key in triggerList) {
     addTriggers(key);
 }
}

function addTriggers(text) {
  var wrapper, input, remove;
  wrapper = document.getElementById('triggers');
  input = document.createElement("input");
  input.type = "text";
  input.name = text;
  input.value = text;
  remove = document.createElement("remove_bt");
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
  chrome.storage.local.get('triggers', function (triggers) {
       triggers = result.triggers;
       alert(result.triggers);
       $("#triggers").val(triggers);
       displayInputs(triggers);
  });

  displayInputs();

  var save_btn, add_btn;
  save_btn = document.getElementById('save_btn');
  add_btn = document.getElementById('add_btn');

  save_btn.addEventListener('click', saveOptions);
  add_btn.addEventListener('click', addInput);
}

document.addEventListener('DOMContentLoaded', contentLoaded);

