// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'inject_code') {
    	injectZoomScript("script_delay.js");
    }
});

injectZoomScript("script.js");

function injectZoomScript(script){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(script);
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head || document.documentElement).appendChild(s);
}