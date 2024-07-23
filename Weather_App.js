const apiKey = 'fdd5b40ad31596aa172ef23b6b1d745c';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const weatherIconElement = document.getElementById('weatherIcon');

searchButton.addEventListener('click', () => {
    document.body.style.backgroundColor = '#b6b2b2';
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            if (temperatureElement.textContent.trim() !== '') {
                weatherIconElement.classList.add('weatherIconS');}

            const temp = data.main.temp;
            document.body.style.transition = 'background-color 0.3s ease-in-out';
            if (temp > 35) {
                document.body.style.backgroundColor = 'red';
            } else if (temp > 25) {
                document.body.style.backgroundColor = 'orange';
            } else if (temp > 18) {
                document.body.style.backgroundColor = 'yellow';
            } else if (temp > 14) {
                document.body.style.backgroundColor = 'lightgreen';
            } else if (temp > 8) {
                document.body.style.backgroundColor = 'rgb(72, 72, 224)';
            } else if (temp > 0) {
                document.body.style.backgroundColor = 'rgb(115, 115, 216)';
            } else {
                document.body.style.backgroundColor = 'lightskyblue';
            }

            const localTime = new Date((data.dt + data.timezone * 1000) * 1000); 
            const hours = localTime.getHours();  

            const dayOrNight = (hours >= 6 && hours < 20) ? 'd' : 'n';

            const weatherCodes = {
                200: '11', 201: '11', 202: '11', 210: '11', 211: '11',
                212: '11', 221: '11', 230: '11', 231: '11', 232: '11',
                300: '09', 301: '09', 302: '09', 310: '09', 311: '09',
                312: '09', 313: '09', 314: '09', 321: '09',
                500: '10', 501: '10', 502: '10', 503: '10', 504: '10',
                511: '13', 520: '09', 521: '09', 522: '09', 531: '09',
                600: '13', 601: '13', 602: '13', 611: '13', 612: '13',
                613: '13', 615: '13', 616: '13', 620: '13', 621: '13',
                622: '13',
                701: '50', 711: '50', 721: '50', 731: '50', 741: '50',
                751: '50', 761: '50', 762: '50', 771: '50', 781: '50',
                800: '01',
                801: '02', 802: '03', 803: '04', 804: '04'
            };

            const weatherId = data.weather[0].id;
            const iconCode = weatherCodes[weatherId] ? `${weatherCodes[weatherId]}${dayOrNight}` : '01d';

            weatherIconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="${data.weather[0].description}">`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            locationElement.textContent = '';
            temperatureElement.textContent = '';
            descriptionElement.textContent = 'City not found';
            weatherIconElement.classList.remove('weatherIconS');
            weatherIconElement.innerHTML = '';
            document.body.style.transition = 'background-color 0.3s ease-in-out';
            document.body.style.backgroundColor = 'lightgray';
        });
}