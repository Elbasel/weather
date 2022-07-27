import './styles/index.scss'

const apiKey = '4b1d3b381d9370cb1209f53b25b46f83'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=${apiKey}`
const forecastApiURl = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=${apiKey}`

async function getWeatherData(cityName) {
    let requestUrl = apiURL.replace('cityName', cityName)
    requestUrl += '&units=metric'

    return await (await fetch(requestUrl)).json()
}

async function setTodayWeatherUI(cityName) {
    const tempData = await getWeatherData(cityName)
    const mainTemperatureElement = document.querySelector('h2')
    const mainTemperatureTextElement = document.querySelector(
        'body > main > div > p.text',
    )
    mainTemperatureElement.textContent = Math.round(tempData.main.temp)
    mainTemperatureTextElement.textContent = tempData.weather[0].main
}

async function getForecastData(cityName) {
    let requestUrl = forecastApiURl.replace('cityName', cityName)
    requestUrl += '&units=metric'
    return await (await fetch(requestUrl)).json()
}

async function getForecastDataClean(cityName) {
    const forecastData = new Map()
    const tempData = await getForecastData(cityName)
    for (const day of tempData.list) {
        // convert from seconds to milliseconds
        let date = new Date(day.dt * 1000)
        let dayNum = date.getDate()
        if (!forecastData.get(dayNum)) {
            forecastData.set(dayNum, {
                minTemp: day.main.temp_min,
                maxTemp: day.main.temp_max,
            })
        } else {
            // get the minimum temp and max temp among the response list
            if (forecastData.get(dayNum).minTemp > day.main.temp_min) {
                forecastData.get(dayNum).minTemp = day.main.temp_min
            }

            if (forecastData.get(dayNum).maxTemp < day.main.temp_max) {
                forecastData.get(dayNum).maxTemp = day.main.temp_max
            }
        }
    }

    return forecastData
}

async function setForecastDataUI(cityName) {
    const todayMinMaxElement = document.querySelector(
        'body > div > div:nth-child(1) > p.temp',
    )
    const tomorrowMinMaxElement = document.querySelector(
        'body > div > div:nth-child(2) > p.temp',
    )
    const afterTomorrowMinMaxElement = document.querySelector(
        'body > div > div:nth-child(3) > p.temp',
    )

    const afterTomorrowNameElement = document.querySelector(
        'body > div > div:nth-child(3) > p.day',
    )

    const forecastData = await getForecastDataClean(cityName)
    const today = new Date()
    let afterTomorrowDateName = new Date()
    afterTomorrowDateName.setDate(afterTomorrowDateName.getDate() + 2)
    afterTomorrowDateName = afterTomorrowDateName.toLocaleDateString('en-us', {
        weekday: 'long',
    })

    afterTomorrowNameElement.textContent = afterTomorrowDateName

    forecastData.forEach((value, day) => {
        let minMaxWeather = `${Math.round(value.maxTemp)}° / ${Math.round(
            value.minTemp,
        )}°`
        switch (day - today.getDate()) {
            case 0:
                todayMinMaxElement.textContent = minMaxWeather
                break
            case 1:
                tomorrowMinMaxElement.textContent = minMaxWeather
                break
            case 2:
                afterTomorrowMinMaxElement.textContent = minMaxWeather
                break
        }
    })
}

setTodayWeatherUI('Cairo')
setForecastDataUI('Cairo')
