function openTab(event,tabContent){
	var i;
	var x = document.getElementsByClassName("resume");
	var tablink = document.getElementsByClassName("tablink");
	for (var i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (var i = 0; i < tablink.length; i++) {
		tablink[i].className = tablink[i].className.replace(" w3-blue" , "");
	}
	document.getElementById(tabContent+"-resume").style.display = "block";
	event.currentTarget.className += " w3-blue";
}