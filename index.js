var text = document.querySelector(".text");
var mySpan = document.querySelector(".mySpan");
// var menubar = document.querySelector(".menubar");
// var top_menu = document.getElementById("top_menu");
// var close_menu = document.getElementById("close_menu");
var btn = document.querySelector(".btn");
var get = document.querySelector(".get");
var ready = document.querySelector(".ready");
var aboutTarget = document.querySelector(".about");
var about = document.getElementById("about");
var faq = document.getElementById("faq");
var faqTarget = document.getElementById("FaqTarget");


btn.addEventListener("click", () => {
    mySpan.setAttribute("style", "color: black"); 
    mySpan.innerHTML = "Getting You Ready For The Jounery is a task.."
})
about.addEventListener("click", (e) => {
    e.preventDefault();
    aboutTarget.scrollIntoView();
})
faq.addEventListener("click", (e) => {
    e.preventDefault();
    faqTarget.scrollIntoView();
})

btn.addEventListener("click", () => {
    get.setAttribute("style", "display: none");
    ready.innerHTML = "Loading...";
    setTimeout(() => {
        location.assign("register.html")
    }, 3000);
})
// menubar.addEventListener("click", (e) => {
//     menubar.setAttribute("style", "display: none")
//     top_menu.setAttribute("style", "display: flex; justify-content: center; justify-items: center; background-color: rgba(255, 255, 255, 0.338);")
   

// })
// close_menu.addEventListener("click", (e) => {
//     e.preventDefault();
//     menubar.setAttribute("style", "display: block")
//     top_menu.setAttribute("style", "display: none;")
    
   

// })