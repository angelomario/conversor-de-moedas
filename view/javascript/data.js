let url="https://economia.awesomeapi.com.br/last/";
let btn_load=document.querySelector("#send");
btn_load.addEventListener("click",()=>{

    let moedas={
        de: document.querySelector("#de").value,
        para:document.querySelector("#para").value
    }
    url="https://economia.awesomeapi.com.br/last/"+moedas.de+"-"+moedas.para;
    console.log(url)
});

