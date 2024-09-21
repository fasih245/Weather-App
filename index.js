let button = document.querySelector("#search-btn")
let input = document.querySelector("#city-search")

let Name = document.querySelector("#city-Name")
let Condition = document.querySelector("#city-Condition")
let cityTime = document.querySelector("#city-Time")
let cityTemp = document.querySelector("#city-Temp")
let cityIcon = document.querySelector("#icon")

async function getData(cityName) {
    let promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f303d3d12a294953986131518241409&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}

button.addEventListener('click', async()=>{
    let val = input.value
    getData(val);
    const result = await getData(val)
    console.log (result)
    Name.innerHTML = `${result.location.name},<br> ${result.location.region}`
    Condition.innerHTML=`${result.current.condition.text} `
    cityIcon.innerHTML=`<img src="${result.current.condition.icon}" alt="condition Icon">`
    cityTime.innerHTML= `${result.location.localtime}`
    cityTemp.innerHTML = `${result.current.temp_c}C<sup>o</sup>   /   ${result.current.temp_f}F<sup>o</sup> `  
})

// http://api.weatherapi.com/v1/current.json?key=f303d3d12a294953986131518241409&q=London&aqi=yes