$(document).ready(function() { 
	if ($('.single-img').length) {
		var theElem = $(".single-img");
		if(theElem.css("cursor")!="zoom-out"){
			theElem.trigger('click');
		}
	}
});

