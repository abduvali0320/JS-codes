let daqiqa = 25;
let soniya = "00";
let i = 0;
let interval;

var daqiqaQosh = document.querySelector('#daqiqa'),
    soniyaQosh = document.querySelector('#soniya'),
    boshla = document.querySelector("#boshla"),
    qaytadan = document.querySelector("#qaytadan");


    
function template(){
    daqiqaQosh.innerHTML = daqiqa;
    soniyaQosh.innerHTML = soniya;
}

function start(){
    daqiqa = 24;
    soniya = 59;

    daqiqaQosh.innerHTML = daqiqa;
    soniyaQosh.innerHTML = soniya;

    var daqiqaInterval = setInterval(daqiqaTimer, 6000);
    var soniyaInterval = setInterval(soniyaTimer, 100);

    function daqiqaTimer(){
        daqiqa = daqiqa - 1;
        daqiqaQosh.innerHTML = daqiqa;
        
    }

    function soniyaTimer(){
        soniya = soniya - 1;
        soniyaQosh.innerHTML = soniya;
        
        if(soniya <= 0){
            if(daqiqa <= 0){
                clearInterval(daqiqaInterval);
                clearInterval(soniyaInterval);
            }
            soniya = 59;
        }
    }
}

function qayta(){
    daqiqa = 25;
    soniya = "00";

    daqiqaQosh.innerHTML = daqiqa;
    soniyaQosh.innerHTML = soniya;

    clearInterval(daqiqaInterval);
    clearInterval(soniyaInterval);
}



bollem = true;
boshla.addEventListener('click', (e) => {
    start();

    if(bollem){
        boshla.innerHTML = "to'xta";
        boshla.style.backgroundColor = "blue";
        bollem = false;
    }
    else{
        boshla.innerHTML = "boshla";
        boshla.style.backgroundColor = "red";
        bollem = true;
    }

}); 

qaytadan.addEventListener('click', (e) => {
    qayta();
});
































// function tortburchak(boyi, eni){
//     this.boyi = boyi;
//     this.eni = eni;
//     this.nomi = "tortburchak";
// }

// tortburchak.prototype.korsat = function(){
//     let yuzi = this.boyi * this.eni,
//         peremetri = 2 * (this.boyi + this.eni);

//     console.log("yuzi " + yuzi);
//     console.log("peremetri " + peremetri);
//     console.log(this.nomi);
// }

// var tort = new tortburchak(10, 15),
//     besh = new tortburchak(5, 4);
//     tort.korsat()
//     besh.korsat()





// class tortburchak{
//     constructor(boyi, eni){
//         this.boyi = boyi;
//         this.eni = eni;
//         this.nomi = "tortburchak";
//     }
//     korsat(){
//         console.log(this.nomi);
//     }
// }

// var tort = new tortburchak(20, 25);

// tort.korsat()


// class Kvadrat extends tortburchak{
//     constructor(uzunligi){
//         super(uzunligi, uzunligi)
//     }
//     yuzi(){
//         console.log(this.boyi * this.eni);
//         console.log(this.nomi = "kvadrat");
//     }
// }

// let kvadrat = new Kvadrat(10);
// kvadrat.yuzi()


// class Forma {
//     constructor(rasm, nomi, izoh, narx, otaElement){
//         this.rasm = rasm;
//         this.nomi = nomi;
//         this.izoh = izoh;
//         this.narx = narx;
//         this.valyuta = 10670;
//         this.ota = document.querySelector(otaElement);
//         this.somDoll();
//     }

//     somDoll() {
//         this.narx = this.narx * this.valyuta;
//     }

//     render(){
//         let element = document.createElement("div");
//         element.innerHTML = `
//         <div class="container">
//             <div class="rasm"><img src="${this.rasm}" alt=""></div>
//             <div class="nomi">${this.nomi}</div>
//             <div class="izoh">${this.izoh}</div>
//             <div class="narx">${this.narx}</div>
//         </div>
//         `;
//         this.ota.append(element);
//     }
// }

// let yanglik = new Forma("https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
//     "yanglik2",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste incidunt sed voluptatum error accusantium labore, nulla, necessitatibus ex fugiat quos, laboriosam unde consequuntur! Dignissimos reprehenderit molestias quisquam at aspernatur?",
//     120,
//     ".ota-div"
// )

// let yanglik2 = new Forma("https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=",
//     "yanglik2",
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste incidunt sed voluptatum error accusantium labore, nulla, necessitatibus ex fugiat quos, laboriosam unde consequuntur! Dignissimos reprehenderit molestias quisquam at aspernatur?",
//     120,
//     ".ota-div"
// )

// yanglik.render();
// yanglik2.render();