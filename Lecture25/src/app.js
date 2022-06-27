import './app.css'

import $ from 'jquery'
import TodosController from './controller/TodosController'

$(() => {
    new TodosController($('.container'))
})