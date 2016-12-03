
//var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);

chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'clear_page') {
        walk(document.body, request.triggers, cleanText);
    }
}
);
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'go_back') {
        window.history.back();
    }
}
);
var triggers = {"Hack": false,"banana":false};

walk(document.body, triggers, searchText);

var numfound = 0;

//check if any of the things in the array are true
for(key in triggers){
    if(triggers[key]){
        numfound += 1;
    }
}

if(numfound > 0){
    //alert("We found " + numfound + " of your triggers on this site.");
    chrome.runtime.sendMessage({"type": "create_warning", "triggers": triggers, "num":numfound }, function(response) {
        walk(document.body, triggers, cleanText);
    });
}


//setTimeout(function () {
//    walk(document.body, triggers);
//    }, 1000);
/*
chrome.storage.local.get('triggers', function (triggers) {
        triggers = result.triggers;
        alert(result.triggers);
        $("#triggers").val(triggers);
        checkPage(triggers);
});
*/


function walk(node, triggers, func)
{
	// Source: http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child, triggers, func);
				child = next;
			}
			break;

		case 3: // Text node
			func(node, triggers);
			break;
	}
}

function searchText(textNode, triggers)
{
	var val = textNode.nodeValue;
 
    for(key in triggers){
        if(val.toLowerCase().includes(key.toLowerCase())){
            triggers[key] = true;
        }
    }
    /*       
    }        
	if (triggers.keys.some(function(t) { return val.includes(t)})) {
            //make a popup to say that we found a match
            triggers[t] = true;
        }
 */   
}

function cleanText(textNode,triggers){
    var v = textNode.nodeValue;

    for(key in triggers){
        var regEx = new RegExp(key, "ig");
        v = v.replace(regEx, "*".repeat(key.length));
    }
	textNode.nodeValue = v;
}

function goback() {
    // Do something, eg..:
    window.history.back();
};

