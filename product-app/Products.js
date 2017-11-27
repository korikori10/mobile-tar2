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
   
}


function renderProducts(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);
    

}


function renderFullProduct(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);

  

}



