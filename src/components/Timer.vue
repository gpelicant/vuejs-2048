<script>
	
// https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
export default {
	name: 'Timer',
	data() {
		return {
			interval: '',
		}
	},
	methods: {
		setTimer(minutes, seconds) {
			let totalSeconds = 0;
			this.interval = setInterval(setTime, 1000);

			function setTime() {
				++totalSeconds;
				minutes.innerHTML = pad(parseInt(totalSeconds / 60));
				seconds.innerHTML = pad(totalSeconds % 60);
			}
			function pad(val) {
				let valString = val + "";
				if (valString.length < 2) {
					return "0" + valString;
				} else {
					return valString;
				}
			}
		},
		resetTimer(minutes, seconds) {
			clearInterval(this.interval);
			minutes.innerHTML = "00";
			seconds.innerHTML = "00";
		}
	}
}

</script>