if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"Z|",
					"Z |",
					"Z I|",
					"Z I |",
					"Z I D|",
					"Z I D |",
					"Z I D A|",
					"Z I D A |",
					"Z I D A R|",
					"Z I D A R |",
					"Z I D A R U .|",
					"Z I D A R U . |",
					"Z I D A R U . X Y Z|",
					"Z I D A R U  . X Y Z |",
					"Z I D A R U . X Y Z|"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}