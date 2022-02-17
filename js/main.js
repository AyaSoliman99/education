// ===================menu 
let menuBtn=document.getElementById("menu-btn");
let menu= document.querySelector(".menu");
let closeMenu=document.querySelector("#close-menu");

menuBtn.addEventListener("click",()=>{
    menu.style.cssText="left:50% ;box-shadow: 0 0 0 100vw rgb(0 0 0 / 80%);";
});
closeMenu.addEventListener("click",()=>{
    menu.style.cssText="left:-200%;box-shadow: 0 0 0 0vw rgb(0 0 0 / 80%);";
});

// ==================form icon
let formBtn=document.getElementById("login-icon");
let form=document.querySelector(".login-form");
let closeForm=document.getElementById("close-form");


formBtn.addEventListener("click",()=>{
    form.style.cssText="right:0px ;box-shadow: 0 0 0 100vw rgb(0 0 0 / 80%);";
});


closeForm.addEventListener("click",()=>{
    form.style.cssText="right:-700%;box-shadow: 0 0 0 0vw rgb(0 0 0 / 80%);";
});

// =====================Accordion


let accordionBtns=document.querySelectorAll(".Accordion .accordion-box button");

let accordionContnets=document.querySelectorAll(".Accordion .accordion-box .content");
let accordionArrows=document.querySelectorAll(".Accordion .accordion-box button i");

[...accordionBtns].forEach((button,ind)=>{
    button.addEventListener("click",function(){
        accordionContnets.forEach(content=>{
            content.classList.remove("active-accordion")
        });
        accordionContnets[ind].classList.add("active-accordion");
    });
} );

[...accordionBtns].forEach((button,ind)=>{
    button.addEventListener("click",function(){
        accordionArrows.forEach(arrow=>{
            arrow.classList.remove("active-i")
        });
        accordionArrows[ind].classList.add("active-i");
    })
} );




// ====================Scroll to top
let upIcon=document.querySelector(".up-icon");

window.addEventListener("scroll",function() {
    if(window.scrollY >= 400){
        upIcon.style.cssText="right:20px; transform:scale(1)";
    }else{
        upIcon.style.cssText="right:-60px; transform:scale(0)";
    }
})

upIcon.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    });
}