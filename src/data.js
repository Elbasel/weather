const apiKey = '4b1d3b381d9370cb1209f53b25b46f83'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=${apiKey}`
const forecastApiURl = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=${apiKey}`

async function getWeatherData(cityName, units = 'metric') {
    let requestUrl = apiURL.replace('cityName', cityName)
    requestUrl += `&units=${units}`
    return await (await fetch(requestUrl)).json()
}

async function getForecastData(cityName, units = 'metric') {
    let requestUrl = forecastApiURl.replace('cityName', cityName)
    requestUrl += `&units=${units}`
    return await (await fetch(requestUrl)).json()
}

async function getForecastDataClean(cityName, units = 'metric') {
    const forecastData = new Map()

    const tempData = await getForecastData(cityName, units)
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

    console.log(forecastData)

    return forecastData
}

export { getWeatherData, getForecastDataClean }
