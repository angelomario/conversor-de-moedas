// Dark and light mode
let send = document.getElementById("send");
let dark ="dark",border_W = "border-w",border_b = "border-black", bg_d="bg-dark",bg_w="bg-light",btn_o_d ="btn-outline-dark", transit="translate", light_shadow="light-shadow";
let bola = document.querySelector(".role");
let quadro = document.querySelector(".forma");
let dado = document.querySelectorAll(".valor");
let select = document.querySelectorAll(".seletion");
let opt = document.querySelectorAll(".seletion>option");


document.querySelector(".mode").addEventListener("click",()=>{
    mode();
});
function mode(){
    if(bola.getAttribute("class") == "role"){
        send.classList.remove(btn_o_d);
        document.body.classList.add(dark);
        send.classList.add(border_W);
        bola.classList.add(transit);
        quadro.classList.add(dark);
        quadro.classList.remove(bg_w);
        quadro.classList.add(light_shadow);
        for (let i = 0; i <= 7; i++) {
            opt[i].classList.add(dark); 
        }
        for (let x = 0; x <= 1; x++) {
            dado[x].classList.remove(border_b);
            dado[x].classList.add(border_W);
            select[x].classList.add(border_W);
        }
        
    }else{
        bola.classList.remove(transit);
        document.body.classList.remove(bg_d);

        send.classList.add(btn_o_d);
        document.body.classList.remove(dark);
        send.classList.remove(border_W);
        bola.classList.remove(transit);
        quadro.classList.remove(dark);
        quadro.classList.add(bg_w);
        quadro.classList.remove(light_shadow);
        for (let i = 0; i <= 7; i++) {
            opt[i].classList.remove(dark); 
        }
        for (let x = 0; x <= 1; x++) {
            dado[x].classList.add(border_b);
            dado[x].classList.remove(border_W);
            select[x].classList.remove(border_W);
        }

    }
}

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