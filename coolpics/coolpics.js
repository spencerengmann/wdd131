document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("button");
    const navMenu = document.querySelector("nav ul");

    
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("hide");
    });

    
    function handleResize() {
        if (window.innerWidth > 1000) {
            navMenu.classList.remove("hide");
            menuButton.style.display = "none";
        } else {
            navMenu.classList.add("hide");
            menuButton.style.display = "";
        }
    }

    
    window.addEventListener("resize", handleResize);

    handleResize();
});


document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const images = document.querySelectorAll('.focusable');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const content = document.getElementById('content');

    
    images.forEach(image => {
        image.addEventListener('click', function(event) {
          
            modal.style.display = 'flex';
           
            modalImage.src = event.target.src;
            
            content.classList.add('blur-background');
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        // Remove the blur effect from the background content
        content.classList.remove('blur-background');
    });

    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            content.classList.remove('blur-background');
        }
    });
});
