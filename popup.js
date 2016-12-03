function displayInputs(triggerList) {
 for (key in triggerList) {
     addTriggers(triggerList[key]);
 }
}

function addTriggers(text) {
  var wrapper, input, removeImage;
  wrapper = document.getElementById('triggers');
  input = document.createElement("input");
  input.type = "text";
  input.name = text;
  input.value = text;
  removeImage = document.createElement('img');
  removeImage.scr = 'deleteIcon.png';
  wrapper.insertBefore(document.createElement("br"), wrapper.firstChild);
  wrapper.insertBefore(removeImage, wrapper.firstChild);
  wrapper.insertBefore(input, wrapper.firstChild);
}

function addInput() {
  var wrapper, input, removeImage;
  wrapper = document.getElementById('triggers');
  input = document.createElement("input");
  input.type = "text";
  input.name = "";
  wrapper.appendChild(input);
  wrapper.appendChild(document.createElement("br"));
  removeImage = document.createElement('img');
  removeImage.scr = 'deleteIcon.png';
  wrapper.appenfChild(removeImage);
}

function saveOptions() {
  var ts = document.getElementById("triggers").getElementsByTagName("*");
  triggers = [];
  for(child in ts){
    triggers[child.value()] = false;
  }
  chrome.storage.sync.set("triggers":triggers);
  
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

