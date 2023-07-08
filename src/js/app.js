// Variaveis globais
const btnGerar = document.querySelector(".trocarCor");
const corExibida = document.querySelector(".corContainer");
const cor = document.getElementById("cor");
const corHistory = document.getElementById("corHistory");
let corGuardada = '';

//Botão para gerar a cor
btnGerar.addEventListener('click',()=>{
const base = '0123456789abcdef';

let resultado = '#';

    for(let i = 0; i < 6 ;i++){
        resultado += base.charAt(Math.floor(Math.random()*16));
    }

corExibida.textContent = resultado;
document.body.style.backgroundColor = resultado;

cor.style.color = resultado;
corGuardada = resultado;
corHistory.innerHTML += `<span style="background:${resultado};">${resultado}</span>`;

});

// Botão para copiar a cor
document.getElementById("cor").addEventListener('click',()=>{
    if(corGuardada == ''){}else{
    navigator.clipboard.writeText(corGuardada)
    cor.style.color = '#00e600';
    cor.innerHTML = 'Copiado &#10003;';
    setTimeout(() => {
    cor.style.color = corGuardada;
    cor.textContent = 'Copiar cor para Ctrl+V';
    }, 2000);
    }
});
