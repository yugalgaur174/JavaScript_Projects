const apiKey = "73efce543a5b0acffe2e2849b41d45e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").style.display="none";

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c ";
    document.querySelector(".humidity").innerHTML = data.main.humidity + ".%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/cloudy.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/sun.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/heavy-rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Fog") {
        weatherIcon.src = "images/fog.png";
    }

    document.querySelector(".weather").style.display="block";
}

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
