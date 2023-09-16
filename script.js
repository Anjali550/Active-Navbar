const solid = document.getElementsByClassName("fa-solid");
let  list = document.querySelector(".list");
  let cross =  document.querySelector(".cross");
  let ham =  document.querySelector(".ham");
function navBar(){

  ham.style.display= "none";
  cross.style.display = "block";
   list.style.display = "block"; 
  
}
function hide(){
   ham.style.display= "block";
   cross.style.display = "none";
    list.style.display = "none"; 
}
    