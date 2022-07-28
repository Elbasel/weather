import switchPage from '../app'
import svgs from './svgs'
import '../styles/home.scss'

function getDayAfterTomorrow() {
    const afterTomorrowDayName = new Date()
    afterTomorrowDayName.setDate(afterTomorrowDayName.getDate() + 2)
    return afterTomorrowDayName.toLocaleDateString('en-us', {
        weekday: 'long',
    })
}

function Header() {
    const header = document.createElement('header')

    const addCityButton = document.createElement('button')
    addCityButton.innerHTML = svgs.plus
    addCityButton.addEventListener('click', () => {
        switchPage('addCityPage')
    })

    const cityNameHeading = document.createElement('h1')
    cityNameHeading.textContent = 'Cairo'

    const refreshButton = document.createElement('button')
    refreshButton.className = 'refresh'
    refreshButton.innerHTML = svgs.refresh

    const settingsButton = document.createElement('button')
    settingsButton.innerHTML = svgs.settings
    settingsButton.addEventListener('click', () => {
        switchPage('settingsPage')
    })

    header.append(addCityButton, cityNameHeading, refreshButton, settingsButton)

    return header
}

function Main() {
    const main = document.createElement('main')

    function weatherDiv() {
        const weatherDiv = document.createElement('div')
        weatherDiv.className = 'weather'

        const h2Temp = document.createElement('h2')
        h2Temp.textContent = '$$'

        const degreeSuffix = document.createElement('p')
        degreeSuffix.className = 'degree'
        degreeSuffix.textContent = '°C'

        const weatherStatusText = document.createElement('p')
        weatherStatusText.className = 'text'
        weatherStatusText.textContent = '{text}'

        weatherDiv.append(h2Temp, degreeSuffix, weatherStatusText)
        return weatherDiv
    }

    main.append(weatherDiv())
    return main
}

function ForecastDiv() {
    const forecastDiv = document.createElement('div')
    forecastDiv.className = 'forecast'

    function Row(dayName) {
        const row = document.createElement('div')
        row.className = 'row'

        const svgDiv = document.createElement('div')
        svgDiv.className = 'svg'

        const day = document.createElement('p')
        day.className = 'day'
        day.textContent = dayName

        const temp = document.createElement('p')
        temp.className = 'temp'
        temp.textContent = '$$° / $$°'

        row.append(svgDiv, day, temp)
        return row
    }

    forecastDiv.append(
        Row('Today'),
        Row('Tomorrow'),
        Row(getDayAfterTomorrow()),
    )
    return forecastDiv
}

function Home() {
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    wrapper.append(Header(), Main(), ForecastDiv())
    return wrapper
}

export default Home
