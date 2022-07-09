const url = 'https://api.openweathermap.org/data/2.5/'
const key = '6e747a5c54ace82780a7e1d8f2a3dfdd'
const cityName = 'Amsterdam'

$.getJSON(`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`, function(data) {
    $("#weather").html(`<i class="fa-solid fa-cloud-sun text-gray-500 inline-flex ml-1 mr-2"></i><span class="text-capitalize">${data.weather[0].description}</span> in ${data.name}`);
});

