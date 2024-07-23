# Weather App

## Description

This Weather App leverages HTML, CSS, and JavaScript to deliver real-time weather updates globally through the OpenWeatherMap API. It provides current temperature, weather conditions, and an appropriate weather icon. The app features a dynamic background color that changes according to the temperature, enhancing visual context. With its user-friendly search interface, users can easily access weather information for any city, making it both functional and intuitive.

## Features

- **City Search:** Enter the name of a city to get current weather information.
- **Real-Time Data:** Shows temperature, weather description, and icon.
- **Dynamic Background:** Background color changes based on temperature:
  - **Red** for very hot temperatures
  - **Orange** for hot temperatures
  - **Yellow** for warm temperatures
  - **Light Green** for mild temperatures
  - **Blue** for cool temperatures
  - **Light Blue** for cold temperatures
- **Responsive Design:** User-friendly interface suitable for various devices.

## Technologies Used

- **API:** [OpenWeatherMap API](https://openweathermap.org/api)
- **Languages:** HTML, CSS, JavaScript
- **Styling:** Custom CSS

## Setup Instructions

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox)
- An API key from OpenWeatherMap

### Installation

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd weather-app

2. **Obtain API Key:**
Obtain API Key:
Sign up at OpenWeatherMap and generate your API key.

3. **Update API Key in the Code:**
Open Weather_App.js and replace the placeholder API key with your own:
const apiKey = 'YOUR_API_KEY_HERE';

4. **Open the Application:**
- Open index.html in your preferred web browser to launch the app.

5. **Search for Weather:**
-Enter the name of a city into the input field and click the "Search" button.

6. **View Results:**
-The app will display the city’s name, current temperature, and weather description.
-An icon representing the current weather will be shown.
-The background color will adjust according to the temperature.
