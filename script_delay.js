$(document).ready(function() { 
	setTimeout(function(){
		var checkExist = setInterval(function() {
			if ($('.single-img').length) {
				var theElem = $(".single-img");
				if(theElem.css("cursor")!="zoom-out"){
					theElem.trigger('click');
				}
				clearInterval(checkExist);
			}
		}, 30); 
	},400);
});

