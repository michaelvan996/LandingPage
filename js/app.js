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
// Global variables for navigation
const section = document.querySelectorAll("section");
const navigation = document.querySelector("ul");

//Removes the active classes from the nav-links and sections using this function
function deleteActive() {
  const lists = document.querySelectorAll("li");
  let i = 0;
  while (i < section.length) {
    section[i].classList.remove("your-active-class");
    lists[i].classList.remove("active");
    i++;
  }
}

// Created  event listener at the beginning of the loop to link the navigation items to the sections for the scroll click event in the navig item menu
for (let i = 0; i < section.length; i++) {
  const lists = document.createElement("li");
  // Toggle between active and inactive states on navigational links using the addEventlistener function
  lists.addEventListener("click", (e) => {
    e.preventDefault();
    //Make the active states for the scroll animation with the smooth animation effect
    section[i].scrollIntoView({ behavior: "smooth" });
    deleteActive();
    lists.classList.add("active");
    section[i].classList.add("your-active-class");
  });
  //Making the anchor linkages to connect to the navbar and section text links
  const linkage = document.createElement("a");
  const idSection = section[i].id;
  linkage.setAttribute("href", "#" + idSection);
  linkage.innerHTML = section[i].getAttribute("data-nav");
  linkage.classList.add("menu__link");
  lists.append(linkage);
  navigation.appendChild(lists);
}
//end of click scroll coding section

//The start of function to add a scroll event listener.
window.addEventListener("scroll", (e) => {
  e.preventDefault();
  let i = 0;
  while (i < section.length) {
    let rectSection = section[i].getBoundingClientRect();
    const lists = document.querySelectorAll("li");

    console.log(section[i].id, rectSection, window.innerHeight);
    //Set condition to optimize the section visibility inside the viewport
    if (rectSection.top <= 150 && rectSection.bottom > 175) {
        section[i].classList.add("your-active-class");
      //Using nested loop with the condition statement to connect link items and sections for active and inactive states toggling
      let j = 0;
      while (j < lists.length) {
        if (
            lists[j].innerText === section[i].getAttribute("data-nav")
        ) {
            lists[j].classList.add("active");
        } else {
            lists[j].classList.remove("active");
        }
        j++;
      }
    } else {
        section[i].classList.remove("your-active-class");
    }
    i++;
  }
});
//End of scroll event coding section
