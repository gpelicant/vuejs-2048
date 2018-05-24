<template>
	<div class="board-container">
		<table class="grid">
			<tr class="tile" v-for="n in grid" :key="n">
				<td v-for="index in n" :key="index"></td>
			</tr>
		</table>
		<button type="submit" v-on:keyup="move">Commencer</button>
	</div>
</template>

<script>
import board from '@/utils/board';

export default {
	name: 'Board',
	// components: 
	data() {
		return {
			grid: [],
			gridSize: 16,
			line: 4
		}
	},
	created() {
		board.init(this.gridSize);
		// this.grid = board.squares;
		for (var i = 0; i < this.line; i++) {
			// debugger;
			this.grid[i] = [];
			for (var j = 0; j < this.line; j++) {
				this.grid[i][j] = i + j;
				console.log(this.grid);
			}
		}
		// console.log(this.grid);
	},
	methods: {
		move(event) {
			board.move(event.key);
		}
	}
}

</script>

<style>

.grid {
	width: 400px;
	height: 400px;
	background: purple;
}	
.tile {
	width: 40px;
	height: 40px;
	background: red;
}

</style>