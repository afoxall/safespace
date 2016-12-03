var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);

var triggers = ""
chrome.storage.local.get('triggers', function (triggers) {
        triggers = result.triggers;
        alert(result.triggers);
        $("#triggers").val(triggers);
        checkPage(triggers);
});

function checkPage(triggers){
    while(textNode=walk.nextNode()) {
        if (triggers.some(function(v) { return testNode.indexOf(v) >= 0; })) {
            //make a popup to say that we found a match
            alert("We found one of your triggers on this page");
        }
    }
}