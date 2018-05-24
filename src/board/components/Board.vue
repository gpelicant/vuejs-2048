<template>
	<div class="grid">
		<div class="tile-container">
			<div class="tile" v-for="n in grid.length" :key="n"></div>
		</div>
	</div>
</template>

<script>
import Board from '@/board/board';

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
		Board.init(this.gridSize);
		// this.grid = Board.squares;
		for (var i = 0; i < this.line; i++) {
			// debugger;
			this.grid.push(new Array(this.line));
			for (var j = 0; j < this.line; j++) {
				this.grid[i][j] = (i+j);
			}
		}
		console.log(this.grid);
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