// Dark and light mode
document.querySelector(".mode").addEventListener("click",()=>{
    let bola = document.querySelector(".role");
    if(bola.getAttribute("class") == "role"){
        bola.classList.add("translate");
        document.body.classList.add("bg-dark");
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

Source: https://moeda.info/pages/api
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

let url="https://cdn.moeda.info/api/latest.json";
fetch(url).then((data)=>{
    console.log(data);
})