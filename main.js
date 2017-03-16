window.onload = function()
{
	runProgressBar("chi",100);
	runProgressBar("tai",90);
	runProgressBar("eng",71);
}
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

function runProgressBar(lang,param){
	var elem = document.getElementById(lang+"-bar");
	var width = 1;
	var progress = setInterval(run,10);
	function run(){
		if (width == param-20) {
			clearInterval(progress);
			progress = setInterval(run,100);
		}
		else if(width == param-3){
			clearInterval(progress);
			progress = setInterval(run,1000);
		}
		else if (width == param) {
			clearInterval(progress);
		}
		else{
			width++;
			elem.style.width = width + "%";
		}
	}
}