var buttons = document.querySelectorAll("button");
var player = "o";

function logPlayer(){
	console.log(player);
	if(player === "o"){
		player ="x";
	} else{
		player = "o";
	}

	this.innerHTML = player;
}


for (var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", logPlayer);
}



