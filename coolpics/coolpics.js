document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("button");
    const navMenu = document.querySelector("nav ul");

    
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("hide");
    });

    
    function handleResize() {
        if (window.innerWidth > 1000) {
            navMenu.classList.remove("hide");
        } else {
            navMenu.classList.add("hide");
        }
    }

    
    window.addEventListener("resize", handleResize);

    handleResize();
});

