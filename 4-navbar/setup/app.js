// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector(".nav-toggle"); //search the nav-toggle button en el html y me lo traigo
const links = document.querySelector(".links"); //me traigo la clase links

navToggle.addEventListener("click", function(){
    //console.log(links.classList.contains("links"));
  /*  if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links"); 
    } */

    links.classList.toggle("show-links");
}) 