

var currentPage = 0;
var limit = 10;
var totalPages;

// Get the total number of pages
$.get("https://dummyjson.com/posts", function(data) {
    totalPages = Math.ceil(data.total / limit);
});


function updatePage(skip) {
    $.get("https://dummyjson.com/posts?limit=" + limit + "&skip=" + skip, function(data) {
        $("#post-list").empty();
        for (var i = 0; i < data.posts.length; i++) {
            $("#post-list").append("<div class='post'>" + data.posts[i].title + "</div>");
        }
        currentPage = Math.floor(skip / limit) + 1;
        $("#page-number").text(currentPage + " of " + totalPages);

    });
}


$("#previous").click(function() {
    if (currentPage > 1) {
        updatePage((currentPage - 2) * limit);
    }
});
$("#next").click(function() {
    if (currentPage < totalPages) {
        updatePage(currentPage * limit);
    }
});

// Initialize the page
updatePage(0);
