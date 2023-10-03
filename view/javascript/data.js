let url="https://economia.awesomeapi.com.br/last/";
let btn_load=document.querySelector("#send");
btn_load.addEventListener("click",()=>{
    let de = document.querySelector("#de").value, para=document.querySelector("#para").value;
    let moedas={
        de,
        para,
        money:de + para
    }
    url="https://economia.awesomeapi.com.br/last/"+moedas.de+"-"+moedas.para;
    fetch(url).then((response)=>{
        return response.json();
    }).then((dados)=>{
        console.log(dados.rates.high);
    })
    console.log(url)
});

