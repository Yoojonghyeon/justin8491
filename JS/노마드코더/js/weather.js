const API_KEY = "e93c6d8d336d0cfb17e00e053fc8c03b";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("위치 정보 확인", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}`;
    });
}

function onGeoError() {
  alert("위치정보를 찾지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
