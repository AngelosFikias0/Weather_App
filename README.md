# Real-Time Weather Dashboard

> **A dynamic, mobile-first weather application consuming the OpenWeatherMap API to provide instant meteorological data and adaptive UI feedback.**

This application serves as a practical implementation of **Async/Await JavaScript** and **REST API orchestration**. It translates raw JSON data into a visual experience, featuring a temperature-aware UI that changes its aesthetic based on real-time climate conditions.

---

## 📌 System Workflow

The app functions by capturing user input, querying a remote server, and dynamically updating the Document Object Model (DOM).



```text
       [ User Input ]
       (City Name Search)
              |
      (Async Fetch Request)
              v
     [ OpenWeatherMap API ]
    (Real-time Data Fetch)
              |
              v
     [ JSON Data Parsing ]
    (Temp, Icon, Conditions)
              |
              v
     [ Dynamic UI Update ]
    (DOM Rendering & BG Color)
```

---

## 🚀 Key Features

* **Global Search:** Query weather data for any city worldwide using the OpenWeatherMap geolocation engine.
* **Real-Time Data Streams:** Instant display of temperature (Celsius/Fahrenheit), weather descriptions, and status icons.
* **Contextual UI (Dynamic Background):** The interface visually reflects the climate. The background color shifts automatically based on temperature thresholds:
    * 🔴 **Hot (>30°C):** Vibrant Red/Orange.
    * 🟡 **Warm (20°C - 30°C):** Sunlit Yellow.
    * 🟢 **Mild (10°C - 20°C):** Refreshing Green.
    * 🔵 **Cold (<10°C):** Cool Blue/Cyan.
* **Responsive Layout:** Fully optimized for desktops, tablets, and smartphones using CSS Flexbox/Grid.

---

## 🧰 Technical Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | HTML5, CSS3 (Custom Properties) |
| **Logic** | JavaScript (ES6+), Fetch API |
| **External Service** | OpenWeatherMap REST API |
| **Version Control** | Git |

---

## 🛠️ Installation & Setup

### Prerequisites
* A modern web browser.
* An API Key from [OpenWeatherMap](https://openweathermap.org/api).

### Step-by-Step Setup
1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/AngelosFikias0/Weather_App.git](https://github.com/AngelosFikias0/Weather_App.git)
    cd Weather_App
    ```
2.  **Configure your API Key:**
    Open `Weather_App.js` and update the `apiKey` constant:
    ```javascript
    const apiKey = "YOUR_API_KEY_HERE";
    ```
3.  **Launch:**
    Simply open `index.html` in your browser.

---

## 📊 Engineering Highlights

* **Error Handling:** Implemented `try-catch` blocks and HTTP response validation (e.g., handling 404 "City Not Found") to ensure a smooth user experience.
* **Async/Await Patterns:** Utilized modern asynchronous patterns to prevent UI blocking during data retrieval.
* **State-Driven Design:** The UI state (background and icons) is directly driven by the numerical data returned from the API.

---

## 📄 License
This project is open-source and available under the **MIT License**.

---
**Developed by Angelos Fikias** *Bridging data and design through modern JavaScript.*
