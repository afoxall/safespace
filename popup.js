function contentLoaded() {
  var save_btn;
  save_btn = document.getElementById('save_btn');


  save_btn.addEventListener('click', function() {
      if (confirm('Does this work?')) {
          saveOptions();
      }
}

document.addEventListener('DOMContentLoaded', contentLoaded);
