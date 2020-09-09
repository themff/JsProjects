// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    //linksContainer.classList.toggle("show-links"); hardcode
/*not hardcode method / dynamic height control */
    const containerHeight = linksContainer.getBoundingClientRect().height
    //console.log(containerHeight)
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);

if(containerHeight === 0){  /*bar closed */
    linksContainer.style.height = `${linksHeight}px`
} else {
    linksContainer.style.height = 0;    //in case that the bar was open, I close it.
}
})

const navbar = document.getElementById('nav');
const topLink = document.querySelector(".top-link");
// ********** fixed navbar (appear whe srcoll down)************

window.addEventListener('scroll', function(){
    //console.log(window.pageYOffset); //this fun tells me how many pixels I scrolled down/up
    //in other words, print de Y position 
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

if(scrollHeight > navHeight){
    navbar.classList.add('fixed-nav');
} else {
    navbar.classList.remove('fixed-nav');
}

if(scrollHeight > 500){
    topLink.classList.add('show-link');
} else {
    topLink.classList.remove('show-link');
}

})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link){
    link.addEventListener('click', function (e){
        //Prevent Default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);; //currentTarget es donde yo estoy apretando
        //console.log(id); //home about etc sin el # por el slice
        const element = document.getElementById(id);
        //Calculate the heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        //console.log(position);
        if(!fixedNav){      //if is not fixed
            position = position - navHeight;
        
        }
        if(navHeight > 82){     //we mean with little screen and big navbar
            position = position + containerHeight;
        }
        window.scrollTo({
            left:0,
            top: position,
        })
        linksContainer.style.height = 0; //close the navbar when I pick an item
    })

});