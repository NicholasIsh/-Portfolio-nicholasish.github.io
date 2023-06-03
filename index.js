window.addEventListener("DOMContentLoaded", function() {
    // Get all links with hashes
    var links = document.querySelectorAll('a[href*="#"]');

    // Loop through the links
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the target element
            var target = document.querySelector(this.getAttribute('href'));

            // Calculate the offset to scroll slightly above the target
            var offset = target.offsetTop +150 ; // Adjust the offset as needed

            // Scroll to the target element
            window.scrollTo({
                top: offset,
                behavior: 'smooth'  // Smooth scrolling
            });
        });
    }
});