let cross =document.querySelector(".cross")
let hamburger =document.querySelector(".hamburger")
let ham =document.querySelector(".ham")
let side =document.querySelector(".sideBar")

// console.log(cross,hamburger,ham,side);

hamburger.addEventListener("click",()=>{
    side.classList.toggle("sideBarGo");
    if(side.classList.contains("sideBarGo")){
        ham.style.display = "inline"
        cross.style.display = "none"
       
    }else{
        ham.style.display = "none"
        setTimeout(()=>{
            cross.style.display = "inline"

        },300)
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".readbtn");
    
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const blogItem = this.closest(".blogItem");
            const hiddenContent = blogItem.querySelector(".hideContent");
            
            if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
                hiddenContent.style.display = "block";
                this.textContent = "Read Less";
            } else {
                hiddenContent.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});
