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
      var promise1 = new Promise(function(resolve, reject) {
        var arr = [];
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i].zipcode);
        }
        resolve(arr);
      });
      promise1.then(function(arr) {
        if (arr.includes(ZipCode) === true) {
          $(".infoBox").text("Service Availiable");
          $("#carModel").attr("class", "visible");
        } else {
          $(".infoBox").prepend("NO service in your area ,Please try another zipcode");
          $("#chirp-area").empty();
        }
      });

    });
  });
  $("#confirm").on("click",function(event){
    event.preventDefault();
    var userAppointmentInfo = {
      year: $("#car-years").val().trim(),
      make: $("#car-makes").val().trim(),
      model: $("#car-models").val().trim(),
      trim: $("#car-model-trims option:selected").text(),
      serviceCost: $(".serviceCost").text(),
      date: $("#date-info").val().trim(),
      address: $("#address-info").val().trim(),
      city: $("#city-info").val().trim(),
      state: $("#state-info").val().trim(),
      zipCode: $("#zip").val().trim(),
      phoneNumber: $("#phone-info").val().trim()
    }
    console.log(userAppointmentInfo);
    submitUserCar(userAppointmentInfo);
  });


  function submitUserCar(userAppointmentInfo) {
    $.post("/api/userAppointmentInfo", userAppointmentInfo, function(data) {
    });
  }
});
