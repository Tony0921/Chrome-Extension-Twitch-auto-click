var func = setInterval(function() {
	var button = document.querySelectorAll('button.ScCoreButton-sc-ocjdkq-0.ScCoreButtonSuccess-sc-ocjdkq-5');
	if(button.length > 0){
    	button[0].click();
		console.log("button is clicked");
    }else{
    	// console.log("button not exist");
    }
},
1000);