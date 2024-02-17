// Importando elementos do html para o js para que possa ser usado e manipulado ao decorrer do codigo
let searchCity = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let iconWeather = document.querySelector("#iconWeather")

// São respectivamente a chave da API e a sua url, onde será realizado a busca/retorno do valor de busca, por meio de uma função
const apiKey = "123456789";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Criação de uma função assicrona para obter e tratar o resultado do retorno do dado da API baseado na busca do usuario
async function checkWeather(city){

  // Resposta tratada, onde a constante vai receber um array/json de valores de uma "função assicrona" onde será solicitado os dados da API baseado na url, cidade e na key da api
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // Verificação caso a Api não esteja funcionando, vai aparecer a mensagem de error
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } 
  // Caso a API esteja funcionando, vai execultar o resto do bloco de codigo
  else {
    // Pega a respota e converte para um json
    let data = await response.json();
    
    // Seleceiona um elemento html e insere um valor de dentro da variavel/array data e seu campo
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/H";

    // Vai fazer alteraçoes de estados de classes dentro do html
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
    } ///
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

// Chama a função por meio de um click no elemento searchBtn
searchBtn.addEventListener('click',() => {
  checkWeather(searchCity.value);
});
