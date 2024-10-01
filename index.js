let btn = document.querySelectorAll("button")[0];
let btn1 = document.querySelectorAll("button")[1];
let back = document.querySelector(".main");
let a=document.querySelector("#o")

btn.addEventListener("click", function() {
    back.classList.remove("main");
    back.classList.add("main1");
    a.innerHTML="Dark Mode";
    a.style.color="white";
});

btn1.addEventListener("click", function() {
    back.classList.remove("main1");
    back.classList.add("main");
    a.innerHTML="Light Mode";
    a.style.color="black";

});
