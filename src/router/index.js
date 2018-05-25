import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Scores from '@/components/Scores'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    {
      path: '/scores',
      name: 'Scores',
      component: Scores
    }
  ]
})
