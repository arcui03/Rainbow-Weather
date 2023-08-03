const APIkey = "02c4a7357925dda8a7c743727c157d57";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// const welcomesearchBox = document.querySelector(".search_wlcm input");
// const welcomesearchBtn = document.querySelector(".search_wlcm button");

const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
	const response = await fetch(APIurl + city + `&appid=${APIkey}`);
	var data = await response.json();

	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
	document.querySelector(".wind").innerHTML = Math.round((data.wind.speed) * (18 / 5)) + "Km/Hr";


	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "images/clouds.png";
	}

	else if (data.weather[0].main == "Clear") {
		weatherIcon.src = "images/clear.png";
	}
	else if (data.weather[0].main == "Rain") {
		weatherIcon.src = "images/rain.png";
	}
	else if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "images/drizzle.png";
	}
	else if (data.weather[0].main == "Mist") {
		weatherIcon.src = "images/mist.png";
	}
	else if (data.weather[0].main == "Haze") {
		weatherIcon.src = "images/haze.png";
	}

	document.querySelector(".weather").style.display = 'block';
	document.querySelector(".welcome_text").style.display = 'none';



}

searchBtn.addEventListener('click', () => {
	checkWeather(searchBox.value);    //searchbox.value will give the city name written in the search box by user
})
