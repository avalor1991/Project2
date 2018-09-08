$(document).ready(function() {
  //Create a variable for the CarQuery object.  You can call it whatever you like.
  var carquery = new CarQuery();

  //Run the carquery init function to get things started:
  carquery.init();
  
  //Optional: Pass sold_in_us:true to the setFilters method to show only US models. 
  carquery.setFilters( {sold_in_us:true} );

  //Optional: initialize the year, make, model, and trim drop downs by providing their element IDs
  carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims');

  //Optional: set the onclick event for a button to show car data.
  $('#cq-show-data').click(  function(){ carquery.populateCarData('car-model-data'); } );

  //Optional: initialize the make, model, trim lists by providing their element IDs.
  carquery.initMakeModelTrimList('make-list', 'model-list', 'trim-list', 'trim-data-list');
  
  //Optional: set minimum and/or maximum year options.
  carquery.year_select_min=1980;
  carquery.year_select_max= "present";
});

// $("#cq-show-data").on("click", function (event) {
//   // It helps to prevent from submitting traditional method of form 
//   event.preventDefault();
//   var userCarInfo = {
//     year: $("#car-years").val().trim(),
//     make: $("#car-makes").val().trim(),
//     model: $("#car-models").val().trim(),
//     trim: $("#car-model-trims option:selected").text()
//   }

//   var userInfo = {
//     firstName: $("#userFirstName").val().trim(),
//     lastName: $("#userLastName").val().trim(),
//     email: $("#userEmail").val().trim()
//   }

//   console.log(userInfo);
//   submitUserCar(userCarInfo);
//   submitUserInfo(userInfo);

// });

// function submitUserCar(userCarInfo) {
//   $.post("/api/userCarInfo", userCarInfo, function(data) {
//     // window.location.href = "/";
//     console.log(data);
//   });
// }
// function submitUserInfo(userInfo) {
//   $.post("/api/userInfo", userInfo, function(data) {
//     console.log(data);
//   });
// }
$("#userCarData").on("click", function (event) {
  // It helps to prevent from submitting traditional method of form 
  event.preventDefault();
  var userCarInfo = {
    year: $("#car-years").val().trim(),
    make: $("#car-makes").val().trim(),
    model: $("#car-models").val().trim(),
    trim: $("#car-model-trims option:selected").text()
  }
  console.log(userCarInfo.make);
  // submitUserCar(userCarInfo);
  servicesInfo(userCarInfo.make);
});

function submitUserCar(userCarInfo) {
  $.post("/api/userCarInfo", userCarInfo, function(data) {
    // window.location.href = "/";
    // console.log(data);
  });
}

function servicesInfo(make){
  // var queryURL = "/api/services/" + make;
  // console.log(queryURL);
  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //    console.log(response[0].car_make);
  //    var promiseData = response[0].car_make;
  //    console.log("Here is promiseData which is taken from response.data"+promiseData);

  // });
  $.get("/api/services/" + make, function(data){
  console.log(data);
  });
}
