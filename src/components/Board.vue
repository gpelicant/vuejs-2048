<template>
	<div class="board-container">
		<table class="grid">
			<tr class="tile" v-for="(n, index) in grid" :key="index">
				<td v-for="index in n" :key="index"></td>
			</tr>
		</table>
		<button class="begin-button" type="submit" v-on:keyup="move">Commencer</button>
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
			line: 4 // also column
		}
	},
	created() {
		board.init(this.gridSize);
		this.initGrid();
	},
	methods: {
		initGrid() {
			for (var i = 0; i < this.line; i++) {
				this.grid[i] = [];
				for (var j = 0; j < this.line; j++) {
					this.grid[i][j] = i + j;
				}
			}
		},
		move(event) {
			switch(event.key) {
				case 'ArrowUp':
					board.move('up');
					break;
				case 'ArrowDown':
					board.move('down');
					break;
				case 'ArrowLeft':
					board.move('left');
					break;
				case 'ArrowRight':
					board.move('right');
					break;
			}
		}
	}
}

</script>

<style>

.board-container{
	position: absolute;
	left: 40%;
}

.grid {
	width: 400px;
	height: 400px;
	background: #4527A0;
}

.tile {
	width: 40px;
	height: 40px;
	background: #B2EBF2;
}

.begin-button{
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
.begin-button:hover{
	color: #4527A0;
}


</style>