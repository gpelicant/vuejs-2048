import axios from 'axios'

// getScores : https://leaderboard.lp1.eu/api/json
// addScore : https://leaderboard.lp1.eu/api/{nickname}/{score}/{time}

export default axios.create({
  baseURL: 'https://leaderboard.lp1.eu/api/'
})
