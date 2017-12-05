window.onload = initCatalogPage;

function initCatalogPage()
{
    var refreshLink = document.getElementById("refresh");
    refreshLink.onclick = onRefreshClick;
}

function onRefreshClick()
{
    var data = {"genre": "Management", "page": "2"};
    postRequest("/catalog_ajax.php", data, onCatalogResponse);
}

function onCatalogResponse(response)
{
    if (response) {
        var html = "";
        for (var i = 0; i < response.books.length; ++i) {
            var book = response.books[i];
            html += "<li>" +
                      "<span>" + book.author + "</span> &dash; " +
                      "<span>" + book.title + "</span>" +
                    "</li>";
        }
       document.getElementById("catalog").innerHTML = html;
    }
}
