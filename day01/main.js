let searchCity = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let iconWeather = document.querySelector("#iconWeather")

const apiKey = "dabb592b2db356ccfdff03df2f413a5b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";

    if (data.weather[0].main == "Clouds"){
      iconWeather.classList.remove('fa-cloud-rain');
      iconWeather.classList.add('fa-cloud');
    } 
    else if(data.weather[0].main == "Clear"){
      iconWeather.classList.remove('fa-cloud-rain');
      iconWeather.classList.add('fa-sun');
    }
    else if(data.weather[0].main == "Rain"){
      iconWeather.classList.remove('fa-cloud-rain');
      iconWeather.classList.add('fa-cloud-rain');
    } 
    else if(data.weather[0].main == "Drizzle"){
      iconWeather.classList.remove('fa-cloud-rain');
      iconWeather.classList.add('fa-cloud-sun-rain');
    } 
    else if(data.weather[0].main == "Mist"){
      iconWeather.classList.remove('fa-cloud-rain');
      iconWeather.classList.add('fa-cloud-sun');
    }
    
    document.querySelector(".weather").style.display = "block";    
  }
}

searchBtn.addEventListener('click',() => {
  checkWeather(searchCity.value);
});
