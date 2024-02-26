function sonTop(gacha){
  let tasodif = Math.floor(Math.random() * gacha);
  // console.log(tasodif);
  let a = 0;
  while(a < Math.ceil(Math.log2(gacha))) {
    a++;
    let taxmin = +prompt(`men 0 dan ${gacha} son o'yladim topingchi`);
    if(taxmin > tasodif){
      console.log(` ${taxmin}; siz kiritgan son katta  `);
    }
    else if(taxmin < tasodif) {
      console.log(`${taxmin}; siz kiritgan son kichik  `);
    }
    else {
      console.log(` tabriklaryman! siz ${a} ta urunishda topdingiz son ${tasodif} edi `);
      break;
    }
  }
}
sonTop(100);