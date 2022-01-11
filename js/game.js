const tvary = document.getElementById('tvary');
const statistika = document.getElementById('statistika');
const tlacitko = document.getElementById('tlacitko');
let hod = 1;
let hody = [];
let timer = false;

function animace(){
    hod = Math.ceil(Math.random() * 6);
    tvary.src = 'img/obrazek' + hod + '.png';
}

tlacitko.addEventListener('click', function(){
    if (!timer){
        timer = setInterval(animace, 150);
        tlacitko.innerText = 'zastav';
    }else{
        clearInterval(timer);
        timer= false;
        tlacitko.innerText = 'spusť';
        hody.push(hod);
        vypisVysledku();

        if(hod == 1){
            window.alert("že to je kapka");
        }else  if(hod == 2){
            window.alert("že to je měsíc");
        }else  if(hod == 3){
            window.alert("že to je trojúhelník");
        }else  if(hod == 4){
            window.alert("že to je čtverec");
        }else  if(hod == 5){
            window.alert("že to je hvězda");
        }else  if(hod == 6){
            window.alert("že to je osmiúhelník");
        }
       

    }
})

function suma(){
    let sum = 0;
    for (let i =0; i < hody.length; i++){
        sum += hody[i]
    } 
    return sum;
}

function max(){
    let maximum = 1
    hody.forEach(function(value,index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min(){
    let minimum = 6
    hody.forEach(function(value,index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}

function vypisVysledku(){
    statistika.innerHTML =`<p>počet rohu: ${hod}</p>`;
    statistika.innerHTML +=`<p>Počet opakování: ${hody.length}</p>`;
    statistika.innerHTML +=`<p>Součet: ${suma()}</p>`;
    statistika.innerHTML +=`<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;
    statistika.innerHTML +=`<p>Maximum: ${max()}</p>`;
    statistika.innerHTML +=`<p>Minimum: ${min()}</p>`;
}






