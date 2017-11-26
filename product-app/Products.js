CategoryInfo = new Object();
ProductInfo = new Object();

$(document).on('pagebeforeshow', '#home', function () {
    getCategory(renderCategory);
});


function renderCategory(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);
    $.each(results, function (i, row) {
        dynamicLi = '<li> <a href="" data-id="' + row.Id + '"> <h3>' + row.Name + '</h3><span class="ui-li-count"> ' + row.ProductAmount+ '</span></a></li>'
        $('#DynamicList').append(dynamicLi);
        $('#DynamicList').listview('refresh');
    }

   
    )
}
$(document).on('vclick', '#DynamicList li a', function () {
    CategoryInfo.id = $(this).attr('data-id');
    getProductsByCat(CategoryInfo, renderProducts);
    $.mobile.changePage("#category", {
        transition: "slide", changeHash: false

    });
    //var CategoryInfo = {
    //    id: null,
    //    result:null
    //}
});


function renderProducts(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);
    $.each(results, function (i, row) {
        dynamicLi = '<li> <a href="" data-id="' + row.Id + '"> <h3>' + row.Name + '</h3><span class="ui-li-count"> ' + row.ProductAmount+ '</span></a></li>'
        $('#DynamicList').append(dynamicLi);
        $('#DynamicList').listview('refresh');
    })
}


function renderFullProduct(results) {
    //this is the callBackFunc 
    results = $.parseJSON(results.d);

  

}





