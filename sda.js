function active1() {
    document.querySelector(".lgn").style.color="rgb(11, 239, 11)";
    document.querySelector(".sgn-up").style.color="white";
    document.querySelector(".inputs1").style.display="block";
    document.querySelector(".inputs2").style.display="none";
    document.querySelector(".forgot_pass").style.display="block";
    
}
function active2() {
    document.querySelector(".lgn").style.color="white";
    document.querySelector(".sgn-up").style.color="rgb(11, 239, 11)";
    document.querySelector(".inputs1").style.display="none";
    document.querySelector(".inputs2").style.display="block";
    document.querySelector(".forgot_pass").style.display="none";
    
}
function check(){
    //document.querySelector(".passcode").type="text";
    console.log("chk");
    var getPasword = document.getElementById("passcode");  
  if (getPasword.type === "password") {  
    getPasword.type = "text";  
    console.log(pass);
  } else {  
    getPasword.type = "password"; 
    console.log("red");
 }
}
function check2(){
  //document.querySelector(".passcode").type="text";
  console.log("chk");
  var getPasword = document.getElementById("passcd");  
if (getPasword.type === "password") {  
  getPasword.type = "text";  
  console.log(pass);
} else {  
  getPasword.type = "password"; 
  console.log("red");
}
}