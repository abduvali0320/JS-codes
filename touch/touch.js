const box = document.querySelector('.box');

box.addEventListener('touchstart',(e) =>{
    e.preventDefault;
    console.log("chertildi");
});


box.addEventListener('touchmove',(e) =>{
    e.preventDefault;
    console.log("x = " + e.targetTouches[0].pageX);
    console.log("y = " + e.targetTouches[0].pageY);
    console.log("yuryapti");

});


box.addEventListener('touchend',(e) =>{
    e.preventDefault;
    // console.log("qo'yib yuborildi");
    alert("qoyib yubordingiz")
});