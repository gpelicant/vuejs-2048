<template>
	<div class="board-container">
		<table class="grid">
			<tr class="tile" v-for="(x, index) in grid" :key="index" :index="index">
				<td class="line" v-for="(y, index) in x" :key="index" :index="index">
					<div class="tile-container" v-if="y != 0"
						v-bind:style="{backgroundColor: y === 2 || y === 4 ? '#FFC107' 
							: y === 8 || y === 16 ? '#FF6F00' 
							: y === 32 || y === 64 ? '#E65100' 
							: y === 128 || y === 256 ? '#BF360C'
							: y === 512 || y === 1024 ? '#5D4037'
							: '#757575'}">
						<span class="number">{{ y }}</span>
					</div>
				</td>
			</tr>
		</table>
		<button class="timer-button" type="submit" @click="startTimer">Timer</button>
		<span ref="minutes">00</span>:<span ref="seconds">00</span>
		<button class="begin-button" type="submit" v-on:keyup="move">Commencer</button>
		<button class="refresh-button" type="submit" v-on:click="refresh">Reinitialiser</button>
	</div>
</template>

<script>
import board from '@/utils/board'
import store from '@/utils/store'
import timer from '@/components/Timer';

export default {
	name: 'Board',
	computed: {},
	data() {
		return {
			grid: [],
			gridSize: 4
		}
	},
	created() {
		board.init(this.gridSize);
		this.grid = board.squares;
	},
	methods: {
		startTimer() {
			timer.methods.setTimer(this.$refs.minutes, this.$refs.seconds);
		},
		move(event) {
			switch(event.key) {
				case 'ArrowUp':
					board.move('left');
					break;
				case 'ArrowDown':
					board.move('right');
					break;
				case 'ArrowLeft':
					board.move('up');
					break;
				case 'ArrowRight':
					board.move('down');
					break;
			}

			store.commit('setGrid', this.grid);
			this.$forceUpdate()
		},
		refresh(){
			board.init(this.gridSize);
			this.grid = board.squares;
		}
	}
}

</script>

<style>

.board-container {
	position: absolute;
	left: 40%;
}

.grid {
	width: 400px;
	height: 400px;
	background: #263238;
}

.tile {
	width: 40px;
	height: 40px;
	background: #CFD8DC;
}

.tile-container {
	color: #fff;
	font-weight: 600;
	width: 75%;
	height: 75%;
	margin: 10%;
	position: relative;
}

.number {
	line-height: 70px;
}

.line {
	width: 100px;
	height: 100px;
}

.begin-button, .refresh-button, .timer-button {
	margin-top: 2%;
	height: 40px;
	width: 100px;
	background: #fff;
	border: 1px solid #676767;
	border-radius: 2px;
	font-size: 14px;
	font-weight: 600;
	color: #676767;
}
.begin-button:hover {
	color: #4527A0;
}


</style>