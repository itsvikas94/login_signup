let password=document.getElementById("password");
let visibility=document.getElementById("visibility");

let secondpassword=document.getElementById("secondpassword");

let is_show=true;
visibility.addEventListener("click",function(){
    if(is_show){
        password.setAttribute('type','text');
        secondpassword.setAttribute('type','text');
    }
    else{
        password.setAttribute('type','password');
        secondpassword.setAttribute('type','password');
    }
    is_show=!is_show;
});

