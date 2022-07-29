import switchPage from '../index'
import svgs from './svgs'
import '../styles/addCityPage.scss'

export default function AddCityDiv() {
    const addCityDiv = document.createElement('div')
    addCityDiv.className = 'add-page'

    const backButton = document.createElement('button')
    backButton.innerHTML = svgs.backArrow
    backButton.addEventListener('click', () => {
        switchPage('homepage')
    })

    const heading = document.createElement('h1')
    heading.textContent = 'Add a City'

    const citiesDiv = document.createElement('div')
    citiesDiv.className = 'cities'

    addCityDiv.append(backButton, heading, Form(), citiesDiv)

    return addCityDiv
}

function Form() {
    const form = document.createElement('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        switchPage('homepage', document.querySelector('input').value)
    })
    const headDiv = document.createElement('div')
    headDiv.className = 'head'

    const searchInput = document.createElement('input')
    searchInput.setAttribute('type', 'search')

    headDiv.append(searchInput)
    headDiv.innerHTML += '\n' + svgs.searchIcon

    form.append(headDiv)

    return form
}
