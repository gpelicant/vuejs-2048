<template>
	<div class="board-container">
		<table class="grid">
			<tr class="tile" v-for="(x, index) in grid" :key="index" :index="index">
				<td class="line" v-for="(y,index) in x" :key="index" :index="index">
					<div class="tile-container" v-if="y != 0">
						<div class="number">{{y}}</div>
					</div>
				</td>
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
			gridSize: 4,
		}
	},
	created() {
		board.init(this.gridSize);
		this.grid = board.squares;
	},
	methods: {
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

.tile-container{
	background: #FFC107;
	width: 75%;
	height: 75%;
	margin: 10%;
	position: relative;
}

.number{
	position: absolute;
	left: 43%;
	top: 38%;
}

.line{
	width: 100px;
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