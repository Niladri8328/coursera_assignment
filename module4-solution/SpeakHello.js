(function(window) {
	var helloSpeaker={};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " +helloSpeaker.name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
