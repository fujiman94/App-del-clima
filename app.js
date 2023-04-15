window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let velocidadViento = document.getElementById('velocidad-viento')

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( posicion =>{
           // console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude

           // Ubicacion actual
           //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b7c80f92eb674b4a2a76c77c2aa62f4`

           //Ubicacion por ciudad
           const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=8b7c80f92eb674b4a2a76c77c2aa62f4`
           console.log(url)
        })
    }
})