function _print(str){
	console.log("[Twitch-auto-click] " + str);
}
_print("Program Start");

var func = setInterval(function() {
	// var button = document.querySelectorAll('button.ScCoreButton-sc-ocjdkq-0.ScCoreButtonSuccess-sc-ocjdkq-5');
	var button = document.querySelectorAll('button[aria-label="領取額外獎勵"]');
	if(button.length > 0){
    	button[0].click();
		_print("button is clicked");
    }else{
    	// console.log("button not exist");
    }
},
1000);