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
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewPort(section){
         section=section.getBoundingClientRect();
        return(
            section.left>=0&&
            section.top>=0&&
            section.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&
            section.right<=(window.innerWidth||document.documentElement.clientWidth)
        )
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavBar() {
    sections.forEach(function (section) {

        const liItem = document.createElement("li");
        const ItemName = section.getAttribute("data-nav");
        liItem.innerHTML = `<a href=#${section.id} class=menu__link>${ItemName}</a>`;
        fragment.appendChild(liItem);
    });
    document.body.querySelector("#navbar__list").appendChild(fragment);

}

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
const list=document.getElementById("navbar__list");
list.addEventListener("click",function(event)
{
    event.preventDefault();
    setActiveLink(event.target);//this functuion to highligth the selected item
    const sectionId =event.target.getAttribute("href");
    const section=document.querySelector(sectionId);
    console.log(section);
    section.scrollIntoView({behavior : "smooth"});
})

/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener("scroll",setActiveClass);
// Build menu 
createNavBar();
// Scroll to section on link click

// Set sections as active
function setActiveClass()
{
    sections.forEach(function(section)
    {
        if(isInViewPort(section))
        {
            section.classList.add("your-active-class")
        }
        else{
            if(section.classList.contains("your-active-class"))
                section.classList.remove("your-active-class");

        }
    })

}
// Set links as active this function to permanently highlit the selected item
function setActiveLink(item)
{
    const allLinks=document.querySelectorAll(".menu__link__active");
    allLinks.forEach(function(link)
    {
        if(link.classList.contains("menu__link__active"))
            link.classList.remove("menu__link__active")
        
    });
  item.classList.add("menu__link__active");
}
