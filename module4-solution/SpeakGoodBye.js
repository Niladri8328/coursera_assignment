
(function(window) {
	var byeSpeaker={};
	var speakWord = "Hello";
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " +name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);