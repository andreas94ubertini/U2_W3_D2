const form = document.getElementById('form')
const inputField = document.getElementById('name')
const addBtn = document.getElementById('add')
const removeBtn = document.getElementById('remove')
const divDisplay = document.getElementById('display')

const addNewName = function () {
    const toAdd = inputField.value
    localStorage.setItem('name', toAdd)
    showName()
    form.reset()
}
const deleteName = function () {
    localStorage.removeItem('name')
    console.log('eliminato')
    showName()
}
removeBtn.addEventListener("click", deleteName)
const showName = function () {
    if (localStorage.getItem('name')) {
        divDisplay.innerHTML = ''
        let newP = document.createElement('p')
        newP.innerText = localStorage.getItem('name')
        divDisplay.appendChild(newP)
    } else {
        console.log('nessun nome trovato')
        divDisplay.innerHTML = ''
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addNewName()
})
addBtn.addEventListener('click', addNewName)
showName()
let crono = null
if (sessionStorage.getItem('time passed')) {
   crono = parseInt(JSON.parse(sessionStorage.getItem('time passed')))
}else{
    crono = 0
}
const sessionCounter = function () {
    crono++
    sessionStorage.setItem('time passed', crono)
    console.log('ciao')
}
setInterval(sessionCounter, 1000)
