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


$("#userCarData").on("click", function (event) {
  $('html, body').animate({
    scrollTop: ($("#serviceTable").offset().top - 100)
  }, 2000);
  event.preventDefault();
  var model = $("#car-makes").val().trim()
  servicesInfo(model);
});

$("#submit3").on("click", function (event) {
  $('html, body').animate({
  scrollTop: ($("#app").offset().top - 100)
}, 2000);
event.preventDefault();
});


function servicesInfo(make){

  // Ajax call for services is happenning over here 
  $.get("/api/services/" + make, function(data){
  $("#serviceMake").text(data[0].car_make);
var brake_price = parseInt(data[0].brake_price);
$('#serviceTable').append('<input  type="checkbox" name="channelcost"  onClick="test(this);"  value="' + brake_price + '"> Break Service: $<span id="brakePrice">' + brake_price + '</span><br>');

var oil_price = parseInt(data[0].oil_price);
$('#serviceTable').append('<input type="checkbox" name="channelcost"  onClick="test(this);"  value="' + oil_price + '"> Oil Service: $<span id="oilPrice">' + oil_price + '</span><br>');

var tire_rotation_price = parseInt(data[0].tire_rotation_price);
$('#serviceTable').append('<input type="checkbox" name="channelcost"  onClick="test(this);"  value="' + tire_rotation_price + '"> tire_rotation Service: $<span id="tire_rotationPrice">' + tire_rotation_price + '</span><br>');


var transmission_price = parseInt(data[0].transmission_price);
$('#serviceTable').append('<input type="checkbox" name="channelcost"  onClick="test(this);"  value="' + transmission_price + '"> Transmission Service: $<span id="transmissionPrice">' + transmission_price + '</span><br>');

var gasket_price = parseInt(data[0].gasket_price);
$('#serviceTable').append('<input type="checkbox" name="channelcost"  onClick="test(this);"  value="' + gasket_price + '"> Valve Gasket Replacement: $<span id="gasketPrice">' + gasket_price + '</span><br>');
$('#serviceTable').append('<p> Total price for services:  $</p> <p class="serviceCost"> 0 </p>')
});

}

var total = 0;
    function test(item){
        if(item.checked){
           total+= parseInt(item.value);
        }else{
           total-= parseInt(item.value);
        }
        $(".serviceCost").text(total);
    }

