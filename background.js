// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]dribbble.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?dribbble\.com/;

var last_url = "";

chrome.tabs.onUpdated.addListener(function (tabs,tab){
	if (urlRegex.test(tab.url)) {
		chrome.tabs.getSelected(null,function(tab) {
			if(last_url != tab.url){
				chrome.tabs.sendMessage(tabs, {text: 'inject_code'});
				last_url = tab.url;
			}
		});
	}
});