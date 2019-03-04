(() => {
	//console.log('fired! ready to jam');

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

		//grb the div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add("playing");
	}

	function removePlayingClass(event) {
		//debugger;
		
		if (event.propertyName !== "transform") {
			return;
		}
		else {
			// rmove the playing class here fro the active div
			//console.log('transition is done', (${event.propertyName}));
			//this.classList.remove("playing");
			event.target.classList.remove('playing');
		}
		
	}

	const keys = Array.from(document.querySelectorAll('.key'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	window.addEventListener("keydown", playDrumKitSound);

})();