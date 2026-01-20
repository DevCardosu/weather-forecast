const key = 'SUA_API_KEY_AQUI' // adicione sua API key


function dadosScreen(dados) {
    if (dados.cod !== 200) {
        alert('Cidade não encontrada ou erro na API')
        return
    }

    document.querySelector('.cidade').innerHTML = `Tempo em ${dados.name}`
    document.querySelector('.temp').innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector('.textoPrevisao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector('.imgPrevisao').src =
        `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function searchCity(cidade) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&units=metric&lang=pt_br`
    )

    const dados = await response.json()
    dadosScreen(dados)
}

function clickButton() {
    const cidade = document.querySelector('.inputCity').value.trim()
    if (!cidade) return
    searchCity(cidade)
}