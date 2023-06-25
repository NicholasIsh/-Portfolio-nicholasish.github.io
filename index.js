window.addEventListener("DOMContentLoaded", function() {
  var links = Array.from(document.querySelectorAll('a[href*="#"]'));
  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          var target = document.querySelector(this.getAttribute('href'));
          var offset = target.offsetTop + 110;
          window.scrollTo({top: offset, behavior:'smooth'});
      });
  });
});

function toggleSortOrder() {
  var articlesContainer = document.querySelector(".blogSection");
  var articles = Array.from(articlesContainer.querySelectorAll("article"));
  var currentOrder = articlesContainer.getAttribute("data-sort-order");
  if (currentOrder === "ascending") {
    articles.reverse();
    articlesContainer.setAttribute("data-sort-order", "descending");
    var buttons = Array.from(document.getElementsByClassName("sortButton"));
    buttons.forEach(function(button) {button.innerHTML = '<img src="/Images/ascending.png" alt="Sort Descending">';});
  } else {
    articles.reverse();
    articlesContainer.setAttribute("data-sort-order", "ascending");
    var buttons = Array.from(document.getElementsByClassName("sortButton"));
    buttons.forEach(function(button) {button.innerHTML = '<img src="/Images/descending.png" alt="Sort Descending">';});
  }
  articlesContainer.innerHTML = "";
  articles.forEach(function(article) {articlesContainer.appendChild(article);});
}

  function openPage(page) {
    window.location.href = page;
}


