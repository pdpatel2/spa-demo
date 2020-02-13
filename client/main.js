const getPizzaButton = document.getElementById('get-pizza')
const postPizzaButton = document.getElementById('post-pizza')

import {getPizzas, postPizza} from './pizza'

getPizzaButton.addEventListener('click', getPizzas)
postPizzaButton.addEventListener('click', postPizza)
