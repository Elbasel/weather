import switchPage from '../index'
import svgs from './svgs'

export default function SettingsPage() {
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    const backButton = document.createElement('button')
    backButton.innerHTML = svgs.backArrow
    backButton.addEventListener('click', () => {
        switchPage('homepage')
    })

    const heading = document.createElement('h1')
    heading.textContent = 'Check back soon!'

    wrapper.append(backButton, heading)
    return wrapper
}
