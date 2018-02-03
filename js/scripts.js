$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var name = ($("#name").val());
    var timeOfDay = ($("#availability").val());
    var dayOfWeek = ($("#day").val());
    alert("Thank you " + name + ", your appointment has been schedule for " + timeOfDay + " on " + dayOfWeek);
  });
});
