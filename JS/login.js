


    document.querySelector("form").addEventListener("submit", submitFunc);

    document.querySelector("#mobile").addEventListener("click", submitFunc1);
    document.querySelector("#facebook").addEventListener("click", submitFunc2);
    document.querySelector("#google").addEventListener("click", submitFunc3);

    function clearmessage(){
      document.getElementById("pTag").innerText = "";
    }

    function submitFunc(){
     event.preventDefault();

     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var detail = JSON.parse(localStorage.getItem("data"));
     console.log(detail);

     if(email == ""){
      //window.location.href = "SignUp.html"
      var p = document.getElementById("pTag").innerText = "Please Enter a Valid Email";
     }
     else{
    
    var check = false;
    var emailcheck = false;
     detail.filter(function(elem){
      if(elem.email == email){
        emailcheck = true;
      }
      if( elem.email == email && elem.password == password){
        // alert("success")
        // window.location.href = "index.html";
        check = true;
      }
      else{
        // alert("Check Credentials");
        check = false;
      }
     })
     if(check){
        alert("You are successfully logged in")
        window.location.href = "index.html";
        // var name = document.createElement("div");
        // name.innerText = email;
        // name.innerText = email;
        // windows.parent.document.getElementById("right").append(name);
        
     }
     else{
      if(emailcheck == false){
        alert("Email Does Not found, Please SIGN-UP First");
        window.location.href = "SignUp.html";
      }
      else{
        alert("Wrong Credentials Entered");
      }
    }
        
     }
      }
    function submitFunc1(){
        alert("yes its mobile")
    }

  function submitFunc2(){
window.location.href = "https://www.facebook.com/"

  }
  function submitFunc3(){
    window.location.href = "https://www.google.com/"
  }