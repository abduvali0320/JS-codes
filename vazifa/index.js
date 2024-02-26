const text = document.querySelector(".kinolar ol"),
      form = document.querySelector("form"),
      kino_qosh = document.querySelector('#kino_qosh');
    
  
    kino_nom ={
        kino:["i am legend" , "mistetel", "kjgcaigc", "salhcah"]
    };
    
    function massivniKerakliJoygaKirit(kinoMassiv, qayergaKirsin){
        qayergaKirsin.innerHTML ="";
        kinoMassiv.sort();
        kinoMassiv.forEach((qiymat) => {
            qayergaKirsin.innerHTML +=`<li> ${qiymat} <button class="ochirish">x</button></li>`
        });
        document.querySelectorAll('.ochirish').forEach((item, i) =>{
            item.addEventListener('click', (e)=>{
                kinoMassiv.splice(i,1);
                massivniKerakliJoygaKirit(kino_nom.kino, text)
            });
        });
    }
 massivniKerakliJoygaKirit(kino_nom.kino, text)
    
   function kiritganSozniMassivgaQosh(qaysiMassivgaQoshsin, qoshilganMAssivjoyi, qayerdanKirtitlsin){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        var manba = qayerdanKirtitlsin.value;
        if(manba){ 
            if(manba.length > 10){
                manba = manba.slice(0, 10) + "...";
            }
            qaysiMassivgaQoshsin.push(manba)
            massivniKerakliJoygaKirit(kino_nom.kino, text)
        }
        form.reset()
    });
   }
   
   kiritganSozniMassivgaQosh (kino_nom.kino, text, kino_qosh)

// const tugma = document.querySelectorAll('.ochirish'),
//       text2 = document.querySelector(".kinolar ol li");
      
//     console.log(text2);
    
//     tugma.forEach(item =>{
//         item.addEventListener('click', (e) =>{
//             text2.remove()
//         });
//     });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // console.log(document.head.childNodes);
    // console.log(document.body.childNodes);
    
    // var text = document.querySelector(".korilganlar ol li")
    // console.log(text.nextElementSibling);
    // console.log(document.querySelector("[data-qiymat='3']"));
// console.log(document.querySelector("[data-qiymat='3']").previousElementSibling);

// console.log(text.parentElement);


