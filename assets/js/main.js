function ch() {
    var city_d = document.getElementById('city')
    var temp_d = document.getElementById('temp')
    var disc_d = document.getElementById('disc')
    var icon_d = document.getElementById('icon')
    var perc_d = document.getElementById('perc')
    var hum_d = document.getElementById('hum')
    var wind_sp_d = document.getElementById('wind_sp')
    var wind_deg_d = document.getElementById('wind_deg')

    var s_city = document.getElementById('scity').value
    var s_pin = document.getElementById('pin').value

    // "https://api.openweathermap.org/data/2.5/weather?q=kannad,431103&appid=33e5e2a4acd230567bd5e46793ac1482"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${s_city},${s_pin}&appid=33e5e2a4acd230567bd5e46793ac1482`)


        .then(response => response.json())
        .then(data => {

            var kelvin = data.main.temp
            var temp = kelvin - 273.15

            var n = temp.toString();
            var res = n.substr(0, 2);


            temp_d.innerHTML = res + "°C"

            var city = data.name
            city_d.innerHTML = "Town:- " + city

            var des = data.weather
            var desc = des[0]

            var u_desc = desc.description
            disc_d.innerHTML = u_desc

            var img = desc.icon
            icon_d.innerHTML = `<img src="http://openweathermap.org/img/w/${img}.png" alt="" style="height: 50px;width: 50px;">`

            var perc = data.main.feels_like
            perc_d.innerHTML = perc + " %"

            var hum = data.main.humidity
            hum_d.innerHTML = hum + "% Hm"

            var wind_s = data.wind.speed * 3.6
            var ne = wind_s.toString();
            var resp = ne.substr(0, 2);
            wind_sp_d.innerHTML = resp + " km/h"

        })
        .catch(err => {
            console.log(err);
        });

}
