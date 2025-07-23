function validaSenha(){
    let senha = document.getElementById("senha_usuario").value;
 
    if (senha.length >= 8) {
        document.getElementById("val1").style.color = "blue";
    }else{
        document.getElementById("val1").style.color = "gray";
    }

 const regex_num = /[0-9]/;

 if(regex_num.test(senha)){
    document.getElementById("val2").style.color = "blue";
 }else{
    document.getElementById("val2").style.color = "gray";
 }
 
 const regex_mai= /[A-Z]/;

 if(regex_num.test(senha)){
    document.getElementById("val3").style.color = "blue";
 }else{
    document.getElementById("val3").style.color = "gray";
 }
 const regex_min= /[a-z]/;

 if(regex_num.test(senha)){
    document.getElementById("val4").style.color = "blue";
 }else{
    document.getElementById("val4").style.color = "gray";
 }

 const regex_car= /[!@#$%^&*]/;

 if(regex_num.test(senha)){
    document.getElementById("val5").style.color = "blue";
 }else{
    document.getElementById("val5").style.color = "gray";
 }

}
 