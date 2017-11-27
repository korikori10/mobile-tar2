CategoryInfo = new Object();
ProductInfo = new Object();

$(document).on('pagebeforeshow', '#DynamicList', function () {
    CategoryName = $("#DynamicList").val();
    // renderCategory is the name of the callBack function
    getCategory(CategoryName, renderCategory);
});


//$(document).on('pagebeforeshow', '#Product', function () {
//    actorName = $("DynamicList").val(); // get the value from the search Textbox
//    getActors(actorName, renderActors); // renderActors is the name of the callBack function
//});

//$(document).on('pagebeforeshow', '#movieDetails', function () {
//    $('#movie-data').empty();
//    $.each(movieInfo.result, function (i, row) {
//        if (row.id == movieInfo.id) {
//            if (row.poster_path != null)
//                $("#movieImg").attr('src', imageSitePath + row.poster_path);
//            else
//                // add a default image
//                $("#movieImg").attr('src', 'images/MovieStrip.png');
//            $('#movie-data').append('<li>Title: ' + row.original_title + '</li>');
//            $('#movie-data').append('<li>Release date: ' + row.release_date + '</li>');
//            $('#movie-data').append('<li>Popularity: ' + row.popularity + '</li>');
//            $('#movie-data').append('<li>Voting: ' + row.vote_average + '</li>');
//            $('#movie-data').listview('refresh');
//        }
//    });
//});

//$(document).on('vclick', '#movie-list li a', function () {
//    movieInfo.id = $(this).attr('data-id');
//    $.mobile.changePage("#movieDetails", { transition: "slide", changeHash: false });
//});


function renderCategory(results) {
    //this is the callBackFunc 
<<<<<<< HEAD
    resutls = $.parseJSON(results.d);
    $("#DynamicList").empty();
   CategoryInfo.result = result.results;
    $.each(result.results, function (i, row) {
        //console.log(JSON.stringify(row));
        //if (row.poster_path == null) { imageFullPath = "images/MovieStrip.png"; }
        //else { imageFullPath = imageSitePath + row.poster_path; }
        $('#DynamicList').append('<li><a href="#" data-id="' + row.id + '"><p>' + row.name + "&nbsp&nbsp&nbsp" + row.vote_average + '</p></a></li>');
    });
    $('#DynamicList').listview('refresh');
=======
    results = $.parseJSON(results.d);
    $('#DynamicList').empty();
    $.each(results, function (i, row) {
        dynamicLi = '<li> <a href="" data-id="' + row.Id + '"> <h3>' + row.Name + '</h3><span class="ui-li-count"> ' + row.ProductAmount+ '</span></a></li>'
        $('#DynamicList').append(dynamicLi);
        $('#DynamicList').listview('refresh');
    }

>>>>>>> a9b7760640ac67e05d79ab4bcec490f3e84b2e09
   
}

<<<<<<< HEAD
=======
    });

});
>>>>>>> a9b7760640ac67e05d79ab4bcec490f3e84b2e09

function renderProducts(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);
<<<<<<< HEAD
    

=======
    $('#DynamicListproducts').empty();
    $.each(results, function (i, row) {
      // console.log(JSON.stringify(row));
       if (row.ImagePath == null) { imageFullPath = "/images/no-img.jpg" }
            else { imageFullPath = row.ImagePath }
        dynamicList = '<li> <img src="'+ imageFullPath + '"/> <a href="" data-id="' + row.Id + '">  <h3>' + row.Title + '</h3><p>Price: ' + row.Price + '</br>Inventory: '+ row.Inventory + '</p></a></li>'
        $('#DynamicListproducts').append(dynamicList);
        $('#DynamicListproducts').listview('refresh');
    })
>>>>>>> a9b7760640ac67e05d79ab4bcec490f3e84b2e09
}


$(document).on('vclick', '#DynamicListproducts li a', function () {
    ProductInfo.id = $(this).attr('data-id');
    getProduct(ProductInfo, renderFullProduct);
    $.mobile.changePage("#product", {
        transition: "slide", changeHash: false

    });

});

function renderFullProduct(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);
    var attributes = "";
    $('#productPage').empty();
        if (results.ImagePath == null) { imageFullPath = "/images/no-img.jpg" }
        else { imageFullPath = results.ImagePath }
        pimginv = "<div style='text-align:center; padding-top:1em;padding-bottom:1em;'><h3>" + results.Title + "</h3></br><img src='" + imageFullPath + "'/> </br><p>Inventory: " + results.Inventory + "</p></div>"
        $('#productPage').append(pimginv);
        $.each(results.Attributes, function (i, row) {
            if (results.Attributes == null) {
                attributes = "<h4>No attributes for this product!</h4>"
            }
            else {
                attributes = "<h4>" + i + "</h4>" +"<p>" + row + "</p>"
            }
        });
        $('#productPageList').append(attributes);
   
    

}



