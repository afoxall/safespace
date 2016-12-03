
//var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);

var triggers = {"Hack": false};

walk(document.body, triggers);
var numfound = 0;

//check if any of the things in the array are true
for(key in triggers){
    if(triggers[key]){
        numfound += 1;
    }
}


if(numfound > 0){
    alert("We found " + numfound + " of your triggers on this site.");

    chrome.runtime.sendMessage({"type": "warning", "triggers": triggers }, function(response) {
           console.log(response.farewell);
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


function walk(node, triggers)
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
				walk(child, triggers);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node, triggers);
			break;
	}
}

function handleText(textNode, triggers)
{
	var val = textNode.nodeValue;

 
    for(key in triggers){
        if(val.includes(key)){
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


