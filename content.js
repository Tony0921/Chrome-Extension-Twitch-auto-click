// var button = document.getElementsByClassName("tw-button tw-button--success");

var func = setInterval(function() {
	var button = document.querySelectorAll('button.ScCoreButton-sc-ocjdkq-0.ScCoreButtonSuccess-sc-ocjdkq-5');
    console.log(button);
	if(button.length > 0){
    	console.log("button exist");
    	button[0].click();
    }else{
    	console.log("button not exist");
    }
},
1000);