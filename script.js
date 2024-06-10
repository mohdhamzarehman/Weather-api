document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'cd1a042e13fb08be29aa5f16d7f33807';

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    document.getElementById('cityName').textContent = data.name;
                    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
                    document.getElementById('weatherDisplay').classList.remove('hidden');
                } else {
                    alert('City not found!');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again later.');
            });
    } else {
        alert('Please enter a city name.');
    }
});
