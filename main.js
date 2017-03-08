document.getElementByClassName("w3-item-bar").click = function(){

};

function openTab(event,tabContent){
	var i;
	var x = document.getElementByClassName("resume");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(tabContent+"-resume").style.display = "block";
}