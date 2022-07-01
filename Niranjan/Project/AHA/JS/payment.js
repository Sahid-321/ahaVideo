var planDetails = JSON.parse(localStorage.getItem("planDetail"));

let planname = document.querySelector('#planName')
planname.innerText = planDetails.plan

var price = document.querySelector('#planPrice')
price.innerText = ('₹ '+parseInt(planDetails.price)+' /-')

document.querySelector("#bill1").innerHTML = ('₹ '+parseInt(planDetails.price)+' /-')
document.querySelector("#bill2").innerHTML = ('₹ '+parseInt(planDetails.price)+' /-')
document.querySelector("#bill3").innerHTML = ('₹ '+parseInt(planDetails.price)+' /-')

document.querySelector("#productBill").innerHTML = ('Total Price:₹ '+parseInt(planDetails.price)+' /-')

document.querySelector("#paybtn").addEventListener("click",payFn)

function payFn(){
    alert("Your have subscribed with the product....Enjoy Watching...!");
    window.location.href="../HTML/home.html"
}
    