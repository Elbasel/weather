import './styles/index.scss'

const apiKey = '4b1d3b381d9370cb1209f53b25b46f83'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=cityName&appid=${apiKey}`
const forecastApiURl = `https://api.openweathermap.org/data/2.5/forecast?q=cityName&appid=${apiKey}`

const refreshButton = document.querySelector('body > header > button.refresh')
const mainWeatherDisplay = document.querySelector('h2')
const mainWeatherText = document.querySelector('.text')
const forecastArea = document.querySelector('.forecast')
const mainArea = document.querySelector('main')
const addCityButton = document.querySelector(
    'body > header > button:nth-child(1)',
)

const cityList = JSON.parse(localStorage.getItem('cityList')) || ['Cairo']
localStorage.setItem('cityList', JSON.stringify(cityList))

const addPageHTML = `
<div class="add-page">
<button id="back-button" type="button">
    <svg viewBox="0 0 24 24">
        <path
            fill="currentColor"
            d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
        />
    </svg>
</button>
<h1>Add a City</h1>
<form action="">
    <div class="head">
        <input type="search" />
        <svg id="search-icon" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
        </svg>
    </div>
</form>
<div class="cities">
</div>
</div>
`

async function getWeatherData(cityName) {
    let requestUrl = apiURL.replace('cityName', cityName)
    requestUrl += '&units=metric'

    return await (await fetch(requestUrl)).json()
}

async function setTodayWeatherUI(cityName) {
    const tempData = await getWeatherData(cityName)
    const todayMinMaxElement = document.querySelector(
        'body > div > div:nth-child(1) > p.temp',
    )
    const todayMinMax = `${Math.round(tempData.main.temp_max)}° / ${
        Math.round(tempData.main.temp_min) + 3
    }°`
    const mainTemperatureElement = document.querySelector('h2')
    const mainTemperatureTextElement = document.querySelector(
        'body > main > div > p.text',
    )
    const cityNameElement = document.querySelector('h1')
    mainTemperatureElement.textContent = Math.round(tempData.main.temp)
    mainTemperatureTextElement.textContent = tempData.weather[0].main
    cityNameElement.textContent = cityName[0].toUpperCase() + cityName.slice(1)
    todayMinMaxElement.textContent = todayMinMax
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

refreshButton.addEventListener('click', () => {
    setTodayWeatherUI('Cairo')
    setForecastDataUI('Cairo')
    refreshButton.classList.remove('rotate')
    // mainWeatherDisplay.classList.remove('fade-in')
    // mainWeatherText.classList.remove('fade-in')
    mainArea.classList.remove('fade-in')
    forecastArea.classList.remove('fade-in')
    setTimeout(() => {
        refreshButton.classList.add('rotate')
        // mainWeatherDisplay.classList.add('fade-in')
        // mainWeatherText.classList.add('fade-in')
        mainArea.classList.add('fade-in')
        forecastArea.classList.add('fade-in')
    }, 100)
})

function switchPage(page) {
    document.body.innerHTML = localStorage.getItem(page)
    if (page === 'addpage') {
        document.querySelector('#back-button').addEventListener('click', () => {
            switchPage('homepage')
        })
        const citiesArea = document.querySelector('.cities')

        for (const city of JSON.parse(localStorage.getItem('cityList'))) {
            citiesArea.innerHTML += `
            <div class="city">
            <div class="name">${city[0].toUpperCase() + city.slice(1)}</div>
        </div>`
        }

        const citiesDivs = document.querySelectorAll('.city')
        citiesDivs.forEach((element) => {
            element.addEventListener('click', (e) => {
                let cityName
                if (e.target.classList.contains('name')) {
                    cityName = e.target.textContent
                } else {
                    cityName = e.target.querySelector('.name').textContent
                }
                switchPage('homepage')
                setTodayWeatherUI(cityName).catch((error) => displayError())
                setForecastDataUI(cityName).catch((error) => displayError())
            })
        })
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            const cityName = document.querySelector('input').value
            if (!cityList.includes(cityName)) {
                cityList.push(cityName)
                localStorage.setItem('cityList', JSON.stringify(cityList))
            }
            switchPage('homepage')
            setTodayWeatherUI(cityName).catch((error) => displayError())
            setForecastDataUI(cityName).catch((error) => displayError())
        })
    } else if (page === 'homepage') {
        document
            .querySelector('body > header > button:nth-child(1)')
            .addEventListener('click', () => {
                switchPage('addpage')
            })
    }
}
function displayError(error) {
    const errorDiv = document.createElement('div')
    errorDiv.classList.add('error-div')
    errorDiv.textContent = 'Not a valid city name!'
    document.body.append(errorDiv)

    setTimeout(() => {
        errorDiv.style.display = 'none'
    }, 5000)
}

await setTodayWeatherUI('Cairo')
await setForecastDataUI('Cairo')
localStorage.setItem('homepage', document.body.innerHTML)
localStorage.setItem('addpage', addPageHTML)

addCityButton.addEventListener('click', () => {
    switchPage('addpage')
})

// switchPage('addpage')
