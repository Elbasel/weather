import switchPage from '../index'
import svgs from './svgs'
import '../styles/settings.scss'

export default function SettingsPage() {
    const wrapper = document.createElement('div')
    wrapper.className = 'radio-wrapper'

    const backButton = document.createElement('button')
    backButton.innerHTML = svgs.backArrow
    backButton.addEventListener('click', () => {
        switchPage('homepage')
    })

    const settingsHeading = document.createElement('h1')
    settingsHeading.textContent = 'Settings'

    const tempUnitHeading = document.createElement('h2')
    tempUnitHeading.textContent = 'Temperature Units'

    function Radio() {
        let units = localStorage.getItem('units') || 'metric'

        function RadioGroup(name, value, checked = false) {
            const radioGroup = document.createElement('div')
            radioGroup.className = 'radio-group'

            const label = document.createElement('label')
            label.setAttribute('for', value)
            label.textContent = value

            const input = document.createElement('input')
            input.type = 'radio'
            input.name = name
            input.id = value
            input.value = value === 'C' ? 'metric' : 'imperial'
            input.checked = checked

            input.addEventListener('click', (e) => {
                localStorage.setItem('units', e.target.value)
            })

            radioGroup.append(label, input)
            return radioGroup
        }
        const radio = document.createElement('div')
        radio.className = 'radio'

        let celsius = units === 'metric' ? true : false
        console.log(celsius)
        radio.append(
            RadioGroup('units', 'C', celsius),
            RadioGroup('units', 'F', !celsius),
        )
        return radio
    }

    wrapper.append(backButton, settingsHeading, tempUnitHeading, Radio())
    return wrapper
}
