
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'fill_warning_page') {
        var elem = document.getElementById("warning");
        document.getElementById("warning").innerHTML = "We found " + request.num + " of your triggers on this page.";
        var show_btn = document.getElementById('show_btn');
        var hide_btn = document.getElementById('hide_btn');
        hide_btn.style.visibility="hidden";

        //show list
        show_btn.addEventListener('click', function() {
            document.getElementById('trigger_list').appendChild(makeUL(request.triggers));
            show_btn.style.visibility = "hidden";
            hide_btn.style.visibility = "visible";
        })
        //hide list
        hide_btn.addEventListener('click', function(){
            var myNode = document.getElementById("trigger_list");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }  
            show_btn.style.visibility = "visible";
            hide_btn.style.visibility = "hidden";
        });
    }
});

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(key in array) {
        if(array[key]){
            // Create the list item:
            var item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(key));

            // Add it to the list:
            list.appendChild(item);

            }
    }
    // Finally, return the constructed list:
    return list;
}