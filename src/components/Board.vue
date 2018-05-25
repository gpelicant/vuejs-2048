<template>
	<div class="board-container">
		<span>Score : {{score}}</span>
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
		<div class="control-panel">
			<button class="button" type="submit" v-on:keyup="move" @click="startTimer">
				<span>Commencer</span>
				<span ref="minutes">00</span>:<span ref="seconds">00</span>
			</button>
			<button class="button" type="submit" v-on:click="refresh">Reinitialiser</button>
		</div>
	</div>
</template>

<script>
import board from '@/utils/board'
import store from '@/utils/store'
import timer from '@/components/Timer';

export default {
	name: 'Grid',
	computed: {},
	data() {
		return {
			grid: [],
			gridSize: 4,
			score: 0,
		}
	},
	created() {
		board.init(this.gridSize);
		this.grid = board.squares;
		this.score = board.points;
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
			this.score = board.points;
			this.$forceUpdate()
		},
		refresh(){
			board.init(this.gridSize);
			this.grid = board.squares;
			timer.methods.resetTimer();
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

.control-panel {
	display: flex;
	justify-content: center;
}

.button {
	margin-top: 2%;
	margin-left: 5px;
	width: 100px;
	height: 40px;
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