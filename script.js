console.log(localStorage)
let inputTitle = document.querySelector('#title-input')
let inputWeightNeeded = document.querySelector('#weight-needed-input')
let inputWeight = document.querySelector('#weight-input')
let inputCostPack = document.querySelector('#cost-pack-input')
let inputSelect = document.querySelector('#type-input')
let inputButton = document.querySelector('#button')

let title = document.querySelector('#title')
let weightNeeded = document.querySelector('#weight-needed')
let weight = document.querySelector('#weight')
let costPack = document.querySelector('#cost-pack')
let cost = document.querySelector('#cost')











inputButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputTitle.value && 
        inputWeightNeeded.value && 
        inputWeight.value && 
        inputCostPack.value &&
        inputSelect.value) {
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
            costElement.innerHTML= (inputWeightNeeded.value / inputWeight.value) * inputCostPack.value

            title.appendChild(titleElement)
            weightNeeded.appendChild(weightNeededElement)
            weight.appendChild(weightElement)
            costPack.appendChild(costPackElement)
            cost.appendChild(costElement)



            
        }
    

    
}) 

