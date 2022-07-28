import switchPage from '../index'
import svgs from './svgs'
import '../styles/home.scss'

function getDayAfterTomorrowName() {
    const afterTomorrowDayName = new Date()
    afterTomorrowDayName.setDate(afterTomorrowDayName.getDate() + 2)
    return afterTomorrowDayName.toLocaleDateString('en-us', {
        weekday: 'long',
    })
}

function Header(cityName) {
    const header = document.createElement('header')

    const addCityButton = document.createElement('button')
    addCityButton.innerHTML = svgs.plus
    addCityButton.addEventListener('click', () => {
        switchPage('addCityPage')
    })

    const cityNameHeading = document.createElement('h1')
    cityNameHeading.textContent = cityName[0].toUpperCase() + cityName.slice(1)

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

function Main(temp, weatherText) {
    const main = document.createElement('main')

    function weatherDiv() {
        const weatherDiv = document.createElement('div')
        weatherDiv.className = 'weather'

        const h2Temp = document.createElement('h2')
        h2Temp.textContent = temp

        const degreeSuffix = document.createElement('p')
        degreeSuffix.className = 'degree'
        degreeSuffix.textContent = '°C'

        const weatherStatusText = document.createElement('p')
        weatherStatusText.className = 'text'
        weatherStatusText.textContent = weatherText

        weatherDiv.append(h2Temp, degreeSuffix, weatherStatusText)
        return weatherDiv
    }

    main.append(weatherDiv())
    return main
}

function ForecastDiv(todayMinMax, tomorrowMinMax, dayAfterTomorrowMinMax) {
    const forecastDiv = document.createElement('div')
    forecastDiv.className = 'forecast'

    function Row(dayName, minTemp, maxTemp) {
        const row = document.createElement('div')
        row.className = 'row'

        const svgDiv = document.createElement('div')
        svgDiv.className = 'svg'

        const day = document.createElement('p')
        day.className = 'day'
        day.textContent = dayName

        const temp = document.createElement('p')
        temp.className = 'temp'
        temp.textContent = `${minTemp}° / ${maxTemp}°`

        row.append(svgDiv, day, temp)
        return row
    }

    forecastDiv.append(
        Row('Today', todayMinMax.minTemp, todayMinMax.maxTemp),
        Row('Tomorrow', tomorrowMinMax.minTemp, tomorrowMinMax.maxTemp),
        Row(
            getDayAfterTomorrowName(),
            dayAfterTomorrowMinMax.minTemp,
            dayAfterTomorrowMinMax.maxTemp,
        ),
    )
    return forecastDiv
}

function Home(cityName, currentTemp, weatherText, forecastData) {
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    wrapper.append(
        Header(cityName),
        Main(currentTemp, weatherText),
        ForecastDiv(forecastData[0], forecastData[1], forecastData[2]),
    )
    return wrapper
}

export default Home
