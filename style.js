// mobile menu start 
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .manu-itms li");


menuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i) => {
    i.addEventListener("click", () => {
        mobileNav.classList.remove("active");
    });
});

//mobile menu end

const options = {
    threshold: 0.8,
};

const addActiveClass = (entries, observe) => {
  entries.forEach((entry) =>{
    if (entry.isIntersecting && entry.intersectionRatio >= 0.2){
        //console.log(entry.target);
        let currentActive = document.querySelector(".destop-nav a.active");

        if (currentActive) {
            currentActive.classList.remove("active")
        }

        let newActive = document.querySelector(
            `.destop-nav a[href="#${entry.target.getAttribute("id")}"]`
        );
        newActive.classList.add("active");
    }
  });
};
const observer = new IntersectionObserver(addActiveClass, options);

const sections = document.querySelectorAll('section');


sections.forEach((section) => {
    observer.observe(section);
});