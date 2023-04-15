window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( posicion =>{
           // console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude

           // Ubicacion actual
           //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b7c80f92eb674b4a2a76c77c2aa62f4`

           //Ubicacion por ciudad
           const url = `https://api.openweathermap.org/data/2.5/weather?q=Minamata&lang=es&units=metric&appid=8b7c80f92eb674b4a2a76c77c2aa62f4`
           //console.log(url)


            // Obtencion de Datos temperaturaValor y temperaturaDescripcion
            fetch(url)
                .then( response => { return response.json() })
                .then( data => {
                    let temp = Math.round(data.main.temp)
                        temperaturaValor.textContent = `${temp} °C`

                    let desc = data.weather[0].description
                        temperaturaDescripcion.textContent = desc.toUpperCase()

            // Obtencion de Datos Ubicacion e Iconos
                    ubicacion.textContent = (data.name)
            // Para iconos estaticos
                    /*let iconCode = data.weather[0].icon
                    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}.png`
                    console.log(urlIcon) */
            // Para Iconos Dinamicos
                    console.log(data.weather[0].main)
                    switch(data.weather[0].main) {
                        case 'Clear':
                            iconoAnimado.src = 'svgicons/animated/day.svg'
                            console.log('DESPEJADO')
                        break;
                        case 'Clouds':
                            iconoAnimado.src = 'svgicons/animated/cloudy-day-1.svg'
                            console.log('NUBES')
                        break;
                        case 'Drizzle':
                            iconoAnimado.src = 'svgicons/animated/rainy-2.svg'
                            console.log('LLOVIZNA')
                        break;
                        case 'Thunderstorm':
                            iconoAnimado.src = 'svgicons/animated/thunder.svg'
                            console.log('TORMENTA ELECTRICA')
                        break;
                        case 'Rain':
                            iconoAnimado.src = 'svgicons/animated/rain-6.svg'
                            console.log('LLUVIA')
                        break;
                        case 'Snow':
                            iconoAnimado.src = 'svgicons/animated/snowy-6.svg'
                            console.log('NIEVE')
                        break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'svgicons/animated/weather.svg'
                            console.log('ATMOSFERA')
                        break;
                        default:
                            iconoAnimado.src = 'svgicons/animated/cloudy-day-1.svg'
                            console.log('POR DEFECTO');
                    }
            // Obtencion de la velocidad del viento
                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                })
                .catch ( error => {
                    console.log(error)
                })
        })
    }
})