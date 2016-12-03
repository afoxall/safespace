
//var textNode, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);

var triggers = ["Hack"]

walk(document.body, triggers);
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

	if (triggers.some(function(t) { return val.includes(t)})) {
            //make a popup to say that we found a match
            alert("We found one of your triggers on this page");
        }
    
}
/*    
    while(walk.nextNode()) {
        var node = walk.currentNode();
        if (triggers.some(function(v) { return node.indexOf(v) >= 0; })) {
            //make a popup to say that we found a match
            alert("We found one of your triggers on this page");
        }
    }
}*/