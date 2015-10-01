$(document).ready(function() {
    $.ajax({
      url: "https://api.myjson.com/bins/2sadq?pretty=1",
      dataType: "json",
      success: function(response) {
        $.each(response.apartments, function(i, apartment) {
            var listing = "<a href='#' class='list-group-item'><h4 class='list-group-item-heading'>" + apartment.description + " / " + apartment.bedrooms +  " BR / " + apartment.price +"</h4><p class='list-group-item-text'>" + apartment.neighborhood + "</p></a>"
            $(".apartments").append(listing);
        });
      },
      error: function(error) {
        console.log(error);
      }
    });

    $(".filter").click(function() {
      var city = $(this).attr("id");
    });
});


