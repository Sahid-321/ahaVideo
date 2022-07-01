


    document.querySelector("form").addEventListener("submit", submitFunc);

    document.querySelector("#loginbutton").addEventListener("click", loginfunction);

    document.querySelector("#mobile").addEventListener("click", submitFunc1);
    document.querySelector("#facebook").addEventListener("click", submitFunc2);
    document.querySelector("#google").addEventListener("click", submitFunc3);


    var email = document.getElementById("email").value;

var span = document.createElement("span");
span.innerText = "Enter Password:";
var password = document.createElement("input");
password.setAttribute("type","password");
password.setAttribute("placeholder","Password")
password.setAttribute("id","password")

function loginfunction(){
  window.location.href = "Login.html";
}

document.querySelector(".inputBox").append(span,password)

    function submitFunc(){
     event.preventDefault();
     var email = document.getElementById("email").value ;
     var password = document.getElementById("password").value;
      if(email == ""|| password == ""){
          alert("ENTER DETAILS FIRST");
      }else{
          // localStorage.setItem
          var arr = JSON.parse(localStorage.getItem("data"))|| [];


var user = {
email: email,
password: password,

}
arr.push(user);
localStorage.setItem("data", JSON.stringify(arr));
alert("SIGN UP SUCCESSFUL");
window.location.href = "Login.html";


var plandetail={plan:'Telugu Quarterly Plan',price:'99'}
    localStorage.setItem("plandetail",JSON.stringify(plandetail));

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