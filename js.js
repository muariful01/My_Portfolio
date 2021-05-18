const mobileClick = document.querySelector("#mobileMenuClick");

mobileClick.addEventListener("click", function () {

 
    


    this.querySelector("i").classList.toggle("fa-times");

    const menuWrapper = document.querySelector(".menu");

    
    menuWrapper.classList.toggle("showMainMenu");


})

const dropdownLi = document.querySelectorAll("li.dropdown");
 
dropdownLi.forEach(function (e) {
    
    e.querySelector("a").innerHTML +='<i style="color:white;float:right" class="fas fa-chevron-down"></i>';
    


    e.addEventListener("click", function (event) {

        this.querySelector("a i").classList.toggle("fa-chevron-up");

        this.querySelector("ul").classList.toggle("show");
        
        event.stopPropagation();
    });


});

let menuBar = document.querySelector('#header');

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){ 
        var header = document.querySelector("header")
        menuBar.classList.toggle("fixedNav", window.scrollY > 1000);
    })
    
})


var scroll = new SmoothScroll('a[href*="#"]',{
    speed:500,
    speedAsDuration: true
});
