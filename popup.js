function displayInputs(triggerList) {
 for (key in triggerList) {
     addTriggers(triggerList[key]);
 }
}

function addTriggers(text) {
  var wrapper, input;
  wrapper = document.getElementById('triggers');
  input = document.createElement("input");
  input.type = "text";
  input.name = text;
  input.value = text;
  wrapper.insertBefore(document.createElement("br"), wrapper.firstChild);
  wrapper.insertBefore(input, wrapper.firstChild);
}

function addInput() {
  var wrapper, input;
  wrapper = document.getElementById('triggers');
  input = document.createElement("input");
  input.type = "text";
  input.name = "";
  wrapper.appendChild(input);
  wrapper.appendChild(document.createElement("br"));
}

function removeInput() {
  var len, children, wrapper;
  wrapper = document.getElementById("triggers");
  children = wrapper.childNodes;
  len = children.length;
  if (children[len-1].value == "" || children[len-1].value == null) {
        wrapper.removeChild(children[len-1]);
  }
}

function saveOptions() {
  confirm("Are you working?");
}

function contentLoaded() {
/*
  chrome.storage.local.get('triggers', function (triggers) {
       triggers = result.triggers;
       alert(result.triggers);
       $("#triggers").val(triggers);
       displayInputs(triggers);
  });
*/

 triggerList = ["1", "2", "3"];
  displayInputs(triggerList);

  var save_btn, add_btn;
  save_btn = document.getElementById('save_btn');
  add_btn = document.getElementById('add_btn');

  save_btn.addEventListener('click', saveOptions);
  add_btn.addEventListener('click', addInput);
}

document.addEventListener('DOMContentLoaded', contentLoaded);

