/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');

const navbarList = document.querySelector('.navbar__list');

let list;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//Loop to set number of navbar sections needed
for (let i = 1; i <= sections.length; i++) {
    // Creating an <li> element according to number of sections 
    list = document.createElement('li');
    // insert textContent related to number of section
    list.innerHTML = `Section ${i}`;
    // adding a 'menu__link' class to the <li> element
    list.setAttribute('class', 'menu__link');
    // setting  Style cursor : pointer for the each <li> element 
    list.setAttribute('style', 'cursor : pointer');
    // append the <li> element to the <ul> element  
    navbarList.appendChild(list);
}


const navSections = document.querySelectorAll('.menu__link');

// Add class 'active' to section when near top of viewport

//Loops over sections' array to addEventListener
sections.forEach((section, index) => {

    window.addEventListener('scroll', () => {

        const scrolled = window.scrollY;

        const offset_Top = section.offsetTop;
        //Removing intial Active id and class respectively 
        navSections[index].removeAttribute('id', 'active');

        section.classList.remove('your-active-class');
        //Checking if the section is in view
        if (scrolled >= offset_Top - (0.25 * window.innerHeight) && scrolled <= offset_Top + (0.50 * window.innerHeight)) {
            //Adding Active class and id respectively
            section.classList.add('your-active-class');

            navSections[index].setAttribute('id', 'active');

        }
    });
});

navSections.forEach((nav, index) => {

    nav.addEventListener('click', function () {
        // On click scroll into view of selected section from navbar
        sections[index].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
        });
    });
});

// loop over navbar Sections & adding an eventListener


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

//To Top Button
const Topbutton = document.querySelector('.Topbutton');

window.addEventListener('scroll', () => {

    if (window.scrollY > 500) {
        Topbutton.setAttribute('style', 'display : inline-block');
    } else {
        Topbutton.style.display = 'none';
    }

});

Topbutton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


//Hamburger menu
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click' , ()=>{
    navbarList.classList.toggle('nav-active');
    hamburger.classList.toggle('active-icon');
})