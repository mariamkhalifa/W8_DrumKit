(() => {
	console.log('fired! ready to jam');

	function playDrumKitSound(event) {
		//debugger;
		//select theg corresponding audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		//console.log(audio);

		//debugging / error handling
		// if we don;t hae a matching audio element, then kill the function
		if (!audio) { return; } // return stops code execution  // ! is a "not" operator

		//rewind audio on every click
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumKitSound);

})();