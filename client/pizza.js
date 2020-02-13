//1) fetch the pizzas from our database using AJAX
//2) create list elements using fetched pizzas

const ul = document.getElementById('pizza-ul')

export const getPizzas = async () => {
  // console.log('function to GET pizzas')
  const response = await window.fetch('/api/pizzas')
  const pizzas = await response.json()

  pizzas.forEach(pizza => {
    const li = document.createElement('li')
    li.innerText = pizza.name
    ul.appendChild(li)
  })
}

export const postPizza = async () => {
  // console.log('function to POST pizzas')
  const newPizza = {name: 'mushroom'}
  const response = await window.fetch('/api/pizzas', {
    method: 'POST',
    body: JSON.stringify(newPizza),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const mushroomPizza = await response.json()
  const li = document.createElement('li')
  li.innerText = mushroomPizza.name
  ul.appendChild(li)
}
