// Navbar Active
const selectNav = document.querySelectorAll('li a span');
selectNav.forEach(span => {
    span.addEventListener("click",()=>{
        resetselectNav();
        span.classList.add("active");
    })
});
function resetselectNav() {
    selectNav.forEach(span => {
        span.classList.remove("active"); 
    });
}