
    document.querySelector("form").addEventListener("submit", submitFunc);

    document.querySelector("#mobile").addEventListener("click", submitFunc1);
    document.querySelector("#facebook").addEventListener("click", submitFunc2);
    document.querySelector("#google").addEventListener("click", submitFunc3);



    function submitFunc(){
     event.preventDefault();

     var email = document.getElementById("email").value;

     var detail = JSON.parse(localStorage.getItem("data"));

     if(email == ""){
      //window.location.href = "SignUp.html"
      var p = document.getElementById("pTag").innerText = "Please Enter a Valid Email";
     }else{
      window.location.href = "SignUp.html"
     }
    
     detail.filter(function(elem){

      if( elem.email == email){
        window.location.href = "index.html";
        alert("success")
   
      }
      
      
     })
    


   




    
  
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
