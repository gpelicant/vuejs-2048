<template>
	<div>
		<h4>Affichage des scores de l'API</h4>
		<table>
			<thead>
				<tr>
					<th>Pseudo</th>
					<th>Score</th>
					<th>Temps</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(score, index) in orderedScores" :key="index" :index="index">
					<td>{{ score.nickname }}</td>
					<td>{{ score.score }}</td>
					<td>{{ score.time }}</td>
				</tr>
			</tbody>
		</table>
	</div>	
</template>

<script>
import http from '@/utils/http'
import _ from 'lodash'

export default {
	name: 'Scores',
	data() {
		return {
			scores: []
		}
	},
	methods: {
		loadScores() {
			http
				.get('json')
				.then(resp => {
					this.scores = resp.data
				})
				.catch(err => console.log(err))
		}
	},
	created() {
		this.loadScores()
	},
	computed: {
		orderedScores: function() {
			return _.orderBy(this.scores, 'score', 'desc')
		}
	}
}

</script>