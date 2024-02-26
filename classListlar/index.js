var tugma = document.querySelectorAll('button'),
    box = document.querySelector('.box');
    box.classList.add('kumush');
    tugma[2].classList.add('kumush', "katta");
    // tugma[2].classList.remove('kumush', "katta");

    // box.addEventListener('click', (e) =>{
    //     if(e.target && e.target.tagName == ("BUTTON")){
    //         alert("salom");
    //     }
    // });
    // box.addEventListener('click', (e) =>{
    //     if(e.target && e.target.classList.length > 0){
    //         alert("bunda class mavjud");
    //     }
    // });
    // box.addEventListener('click', (e) =>{
    //     if(e.target && e.target.classList.length == 0){
    //         alert("bunda class mavjud emas");
    //     }
    // });



// console.log(tugma[0].classList.length);
// console.log(tugma[0].classList.item(1));
// console.log(tugma[0].className);

// tugma[0].classList.add('pushti');
// console.log(tugma[0].className);

// tugma[0].classList.remove('sariq')
// console.log(tugma[0].className);

// tugma[0].addEventListener('click', (e) =>{
//     if(tugma[9].classList.contains('yashil')){
//         tugma[9].classList.remove("yashil")
//     }
//     else{
//         tugma[9].classList.add("yashil");
//     }
// });

// tugma[0].addEventListener('click', (e) => {
//     tugma[2].classList.toggle('sariq')
// });


tugma[4].addEventListener('click', (e) => {
    tugma[4].classList.toggle('pushti')
});