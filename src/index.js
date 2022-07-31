import { Home, refreshData, displayError } from './views/home'
import AddCityDiv from './views/addCity'
import SettingsPage from './views/settings'
import { getWeatherData, getForecastDataClean } from './data'

import './styles/settings.scss'

async function getData(cityName, units) {
    const weatherData = await getWeatherData(cityName, units)
    const forecastData = await getForecastDataClean(cityName, units)

    const todayMinMax = {}
    const tomorrowMinMax = {}
    const dayAfterTomorrowMinMax = {}

    const today = new Date()

    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)

    const dayAfterTomorrow = new Date()
    dayAfterTomorrow.setDate(today.getDate() + 2)

    forecastData.forEach((value, dayNum) => {
        if (dayNum === today.getDate()) {
            todayMinMax.minTemp = Math.round(value.minTemp)
            todayMinMax.maxTemp = Math.round(value.maxTemp)
        } else if (dayNum === tomorrow.getDate()) {
            tomorrowMinMax.minTemp = Math.round(value.minTemp)
            tomorrowMinMax.maxTemp = Math.round(value.maxTemp)
        } else if (dayNum === dayAfterTomorrow.getDate()) {
            dayAfterTomorrowMinMax.minTemp = Math.round(value.minTemp)
            dayAfterTomorrowMinMax.maxTemp = Math.round(value.maxTemp)
        }
    })

    return {
        currentTemp: Math.round(weatherData.main.temp),
        weatherText: weatherData.weather[0].main,
        forecast: [todayMinMax, tomorrowMinMax, dayAfterTomorrowMinMax],
    }
}

async function switchPage(pageName, ...args) {
    let units = localStorage.getItem('units') || 'metric'

    if (pageName != 'refreshData') {
        document.body.innerHTML = ''
    }
    let component

    if (pageName === 'homepage') {
        let cityName = args[0] || localStorage.getItem('cityName')
        let weatherData
        try {
            weatherData = await getData(cityName, units)

            if (args[0]) {
                localStorage.setItem('cityName', args[0])
            }

            component = Home(
                cityName,
                weatherData.currentTemp,
                weatherData.weatherText,
                weatherData.forecast,
                units === 'metric' ? 'C' : 'F',
            )
        } catch (error) {
            console.log(error)
            displayError('Not a valid city name!', 5000)

            cityName = localStorage.getItem('cityName')
            weatherData = await getData(cityName, units)
            component = Home(
                cityName,
                weatherData.currentTemp,
                weatherData.weatherText,
                weatherData.forecast,
                units === 'metric' ? 'C' : 'F',
            )
        }
    } else if (pageName === 'refreshData') {
        const weatherData = await getData(
            localStorage.getItem('cityName'),
            localStorage.getItem('units'),
        )
        refreshData(
            weatherData.currentTemp,
            weatherData.weatherText,
            weatherData.forecast[0],
            weatherData.forecast[1],
            weatherData.forecast[2],
        )
    } else if (pageName === 'addCityPage') {
        component = AddCityDiv()
    } else if (pageName === 'settingsPage') {
        component = SettingsPage()
    }

    if (pageName != 'refreshData') {
        document.body.append(component)
    }
}

switchPage('homepage', localStorage.getItem('cityName') || 'Cairo')

export default switchPage
