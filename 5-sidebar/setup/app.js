//we are going to select the toggle, the close and the sidebar


const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//now we add the event listeners

toggleBtn.addEventListener("click",function(){
   /* console.log(sidebar.classList);
    if(sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    } else {
        sidebar.classList.add("show-sidebar");
    } */
    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})