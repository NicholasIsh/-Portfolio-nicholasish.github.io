window.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('a[href*="#"]');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();

            var target = document.querySelector(this.getAttribute('href'));

            var offset = target.offsetTop +150 ; 

            
            window.scrollTo({
                top: offset,
                behavior: 'smooth'  
            });
        });
    }
});

function toggleSortOrder() {
    var articlesContainer = document.querySelector(".BlogSection");
    var articles = Array.from(articlesContainer.querySelectorAll("article"));
  
    
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
    articlesContainer.innerHTML = "";
    articles.forEach(function (article) {
      articlesContainer.appendChild(article);
    });
  }


