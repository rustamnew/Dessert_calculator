console.log(localStorage)
let inputTitle = document.querySelector('#title-input')
let inputWeightNeeded = document.querySelector('#weight-needed-input')
let inputWeight = document.querySelector('#weight-input')
let inputCostPack = document.querySelector('#cost-pack-input')
//let inputSelect = document.querySelector('#type-input')
let inputButton = document.querySelector('#button')

let title = document.querySelector('#title')
let weightNeeded = document.querySelector('#weight-needed')
let weight = document.querySelector('#weight')
let costPack = document.querySelector('#cost-pack')
let cost = document.querySelector('#cost')

let subtotal = document.querySelector('#subtotal')
let addToTotal = document.querySelector('#addToTotal')
let total = document.querySelector('#total')

let sum = 0
let additional = 100
let totalSum = 0


let addToTable = () => {
    let titleElement = document.createElement('li')
    titleElement.classList.add('material__item')
    titleElement.innerHTML= inputTitle.value

    let weightNeededElement = document.createElement('li')
    weightNeededElement.classList.add('material__item')
    weightNeededElement.innerHTML= inputWeightNeeded.value

    let weightElement = document.createElement('li')
    weightElement.classList.add('material__item')
    weightElement.innerHTML= inputWeight.value

    let costPackElement = document.createElement('li')
    costPackElement.classList.add('material__item')
    costPackElement.innerHTML= inputCostPack.value

    let costElement = document.createElement('li')
    costElement.classList.add('material__item')
    costElement.innerHTML= Math.ceil((inputWeightNeeded.value / inputWeight.value) * inputCostPack.value)

    title.appendChild(titleElement)
    weightNeeded.appendChild(weightNeededElement)
    weight.appendChild(weightElement)
    costPack.appendChild(costPackElement)
    cost.appendChild(costElement)

    
}

let calcSum = () => {
    sum = 0
    totalSum = 0
    
    for (let i = 1; i < cost.children.length; i++) {
        number = Math.ceil(Number(cost.children[i].innerHTML))
        sum += number
    }
    totalSum = sum + additional
    subtotal.innerHTML = sum
    total.innerHTML = totalSum
}

inputButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputTitle.value && 
        inputWeightNeeded.value && 
        inputWeight.value && 
        inputCostPack.value //&& inputSelect.value
        ) {
            
            addToTable()
            calcSum()
        }
        
    

    
}) 

