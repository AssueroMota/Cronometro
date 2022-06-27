var sec=00;
var min=00;
var horas=00;
var intervalo;




//funcoes

function iniciou(){
    intervalo = setInterval(contador,1000);
}

function pausou(){
    clearInterval(intervalo);
}
function acabou(){
    clearInterval(intervalo);
    sec=00;
    min=00;
    document.getElementById('relogio').innerText='00:00:00';
}
function contador(){
    sec++;
if (sec==60){
    min++;
    sec=0;
    if (min==60){
        horas++;
        min=0;
}
}


    document.getElementById('relogio').innerText=calculodotempo(horas)+':'+calculodotempo(min)+':'+calculodotempo(sec);

}


function calculodotempo(digit){
        if(digit<10){
            return('0'+digit)
        }else{
            return(digit)
        }
    }

