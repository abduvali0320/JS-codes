// let container = document.querySelector('.container'),
//     qizil = document.querySelector('.qizil_och'),
//     sariq = document.querySelector('.sariq_och'),
//     yashil = document.querySelector('.yashil_och');

//     var amal = 0;
// let vaqt = setInterval(() => {
//     if(amal == 0){
//         qizil.classList.remove('qizil_och');
//         qizil.classList.add('qizil');
    
//         amal++;
//         console.log(amal);
//     }
//     else{
//         let vaqt_1 = setInterval(() => {
//             qizil.classList.add('qizil_och')
//             qizil.classList.remove('qizil')
//         }, 5000); 
//     }
// }, 500);

// let vaqt2 = setInterval(() => {
//     if(amal == 1){
//         sariq.classList.remove('sariq_och');
//         sariq.classList.add('sariq');

//         amal++;
//         console.log(amal);
//     }
//     else{
//         vaqti_2 = setInterval(() => {
//             sariq.classList.add('sariq_och')
//             sariq.classList.remove('sariq')
//         },0);
//     }
// }, 3000);

// let vaqt3 = setInterval(() => {
//     if(amal == 2){
//         yashil.classList.remove('yashil_och');
//         yashil.classList.add('yashil');

//         amal ++;
//         console.log(amal);
//     }
//     else{
//         vaqt_3 = setInterval(() => {
//             yashil.classList.add('yashil_och');
//             yashil.classList.remove('yashil')
//         }, 1000);
//     }
// }, 6000);

let box = document.querySelectorAll('.box');
let boolen = true;
    box.forEach(element => {
        element.addEventListener('click' ,(e) => {
            e.preventDefault();
            if(boolen == true){
                e.target = element.innerHTML = 'x';
                boolen = false;
            }
            else{
                element.innerHTML = "o";
                console.log(boolen);
                boolen = true
            }
        });
    });