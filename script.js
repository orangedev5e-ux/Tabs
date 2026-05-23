const fBtn = document.querySelector(".ftab");
const sBtn = document.querySelector(".stab");
const tBtn = document.querySelector(".ttab");
const frBtn = document.querySelector(".frtab");

const fInfo = document.querySelector(".fpara");
const sInfo = document.querySelector(".spara");
const tInfo = document.querySelector(".tpara");
const frInfo = document.querySelector(".frpara");



function hideAll(){
  fInfo.style.display="none";
  sInfo.style.display="none";
  tInfo.style.display="none";
  frInfo.style.display="none";
  
}


fBtn.addEventListener('click',function(){
  hideAll();
  fInfo.style.display="block";
});

sBtn.addEventListener('click',function(){
  hideAll();
  sInfo.style.display="block";
});

tBtn.addEventListener('click',function(){
  hideAll();
  tInfo.style.display="block";
});

frBtn.addEventListener('click',function(){
  hideAll();
  frInfo.style.display="block";
});






