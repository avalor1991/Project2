$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();

    $.get("/api/zipcodes", function(list) {
      console.log(list);
      var ZipCode = parseInt(
        $("#zip")
          .val()
          .trim()
      );
      console.log(ZipCode);
      var promise1 = new Promise(function(resolve, reject) {
        var arr = [];
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i].zipcode);
        }
        resolve(arr);
      });
      promise1.then(function(arr) {
        console.log(arr);
        if (arr.includes(ZipCode) === true) {
          $(".infoBox").text("Service Availiable");
          $("#carModel").attr("class", "visible");
        } else {
          $(".infoBox").prepend("NO service in your area ,Please try another zipcode");
          $("#chirp-area").empty();
        }
      });

    });
    // $()
  });
});
