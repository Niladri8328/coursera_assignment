
(function(window) {
	var byeSpeaker={};
	var speakWord = "Hello";
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " +byeSpeaker.name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
