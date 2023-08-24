// Dark and light mode
document.querySelector(".mode").addEventListener("click",()=>{
    let send = document.getElementById("send");
    let bola = document.querySelector(".role");
    let quadro = document.querySelector(".forma");
    let dado = document.querySelectorAll(".valor");
    let select = document.querySelectorAll(".seletion");
    if(bola.getAttribute("class") == "role"){
        send.classList.remove("btn-outline-dark");

        document.body.classList.add("dark");
        bola.classList.add("translate");
        quadro.classList.add("dark");
        quadro.classList.remove("bg-light");

        select[0].classList.add("border-w");
        select[1].classList.add("border-w");
        dado[0].classList.remove("border-black");
        dado[1].classList.remove("border-black");
        dado[0].classList.add("border-w");
        dado[1].classList.add("border-w");

        send.classList.add("border-w");
        
    }else{
        bola.classList.remove("translate");
        document.body.classList.remove("bg-dark");

    }
});


// Configurando a API

//  "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"

/*
URL: https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/aplicacao#!/

https ://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/[codigo_recurso]?$format=json&[Outros Parâmetros]
*/

/*
https://cdn.moeda.info/api/latest.json

Source: https://moeda.info/pages/api?base=USD&symbols=BRL
{
    "base": "USD",
    "rates": {
        "AED": 3.67297,
        "AFN": 89.647021,
        "ALL": 104.709024,
        "AMD": 476.665393,
        "ANG": 1.789593,
        "AOA": 597.455,
        "ARS": 99.2347,
        "AUD": 1.338279,
        [supporting 183+ currencies ...]
    },
}

Source: https://moeda.info/pages/api

*/

/*let url="https://cdn.moeda.info/api/latest";
fetch(url).then((content)=>{
    return content.json();
    console.log(content);
}).then(dados=>{
    console.log(dados);
})*/