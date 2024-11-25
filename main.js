
const button = document.querySelector('.button');

button.addEventListener('click', () => {

const city = document.querySelector('.input').value;
const APIKey = '28cf0b214d18c39b609b555fbf948941'

if(city === ''){
 return

}

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)


    .then(response => response.json())
    .then( data => {

    const cityName = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const description = document.querySelector('.desct');
    const windSpeed = document.querySelector('.wind-speed');
    const windDeg = document.querySelector('.wind');
    const icon = document.querySelector('.icon');
    const pressure = document.querySelector('.pressure');


     
    cityName.textContent = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    
    windSpeed.innerHTML = `${data.wind.speed} <span>meter/sec</span>`;
    description.textContent = data.weather[0].description;
    pressure.textContent = `${data.main.pressure} hPa`;
    windDeg.innerHTML = `${data.wind.deg} <span>  °   </span>`;
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`

    

    console.log(data);
    })
})    