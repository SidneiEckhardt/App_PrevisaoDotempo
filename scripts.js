

const key= "af249787f219ca5c42088d424fefa9f3"
function colocarDadosNaTela(dados){
      document.querySelector(".cidade").innerHTML="Tempo em " + dados.name
      document.querySelector(".temp").innerHTML="Temperatura Agora em " + Math.floor(dados.main.temp) + "°C"
      document.querySelector(".texto-previsao").innerHTML=dados.weather[0].description
      document.querySelector(".umidade").innerHTML="Umidade Relativa do Ar em " + dados.main.humidity+ " %"
      document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
      document.querySelector(".temp-min").innerHTML= Math.floor (dados.main.temp_min) + "°C Min"
      document.querySelector(".temp-max").innerHTML= Math.floor (dados.main.temp_max) + "°C Máx"
      document.querySelector(".pais").innerHTML=dados.sys.country
      console.log(dados)
    }

      async function buscarCidade(cidade){
    const dados= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados)
    
}

function cliqueiNoBotao(){
    const cidade= document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}