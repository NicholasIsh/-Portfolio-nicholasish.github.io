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



// Function to toggle the sort order
function toggleSortOrder() {
    var articlesContainer = document.querySelector(".BlogSection");
    var articles = Array.from(articlesContainer.querySelectorAll("article"));
  
    // Check the current sorting order
    var currentOrder = articlesContainer.getAttribute("data-sort-order");
    if (currentOrder === "ascending") {
      articles.reverse();
      articlesContainer.setAttribute("data-sort-order", "descending");
      
      var buttons = document.getElementsByClassName("sortButton");

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = '<img src="/Images/ascending.png" alt="Sort Descending">';
        }
    } else {
        articles.reverse();
      articlesContainer.setAttribute("data-sort-order", "ascending");
      
      var buttons = document.getElementsByClassName("sortButton");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].innerHTML = '<img src="/Images/descending.png" alt="Sort Descending">';
}
    }
  
    // Reorder the articles
    articlesContainer.innerHTML = "";
    articles.forEach(function (article) {
      articlesContainer.appendChild(article);
    });
  }


