import Home from './views/home'
import { getWeatherData, getForecastDataClean } from './data'

async function switchPage(pageName, ...args) {
    document.body.innerHTML = ''
    let component

    if (pageName === 'homepage') {
        const cityName = args[0]
        const weatherData = await getWeatherData(cityName)
        const forecastData = await getForecastDataClean(cityName)

        // const data = new Map()
        // data.set(28, { minTemp: 10, maxTemp: 20 })
        // data.set(29, { minTemp: 20, maxTemp: 30 })
        // data.set(30, { minTemp: 30, maxTemp: 40 })

        const todayDayNum = new Date().getDate()

        const todayMinMax = {}
        const tomorrowMinMax = {}
        const dayAfterTomorrowMinMax = {}

        forecastData.forEach((value, dayNum) => {
            let diff = dayNum - todayDayNum
            if (diff === 0) {
                todayMinMax.minTemp = Math.round(value.minTemp)
                todayMinMax.maxTemp = Math.round(value.maxTemp)
            } else if (diff === 1) {
                tomorrowMinMax.minTemp = Math.round(value.minTemp)
                tomorrowMinMax.maxTemp = Math.round(value.maxTemp)
            } else if (diff === 2) {
                dayAfterTomorrowMinMax.minTemp = Math.round(value.minTemp)
                dayAfterTomorrowMinMax.maxTemp = Math.round(value.maxTemp)
            }
        })

        component = Home(
            cityName,
            Math.round(weatherData.main.temp),
            weatherData.weather[0].main,
            [todayMinMax, tomorrowMinMax, dayAfterTomorrowMinMax],
        )
    }

    document.body.append(component)
}

switchPage('homepage', 'Cairo')

export default switchPage
