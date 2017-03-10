var barButton = document.getElementByClassName("w3-item-bar");

for (var i = 0; i < barButton.length; i++) {
	barButton[i].addEventListener("click",openTab(event,this.id));
}

function openTab(event,tabContent){
	var i;
	var x = document.getElementByClassName("resume");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	document.getElementById(tabContent+"-resume").style.display = "block";
}