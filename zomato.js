let signin=document.querySelector(".signin_popup");
let loginbox=document.querySelector(".loginbox");
let cross=document.querySelector(".cross");

signin.addEventListener("click",function(){
    popup();
})
cross.addEventListener("click",function(){
    removepopup();
})
 loginbox.classList.remove("opacity")

function popup()
{
    loginbox.classList.add("opacity")
}
function removepopup()
{
    loginbox.classList.remove("opacity");
}