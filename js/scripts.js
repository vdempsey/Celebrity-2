$(document).ready(function() {
  var elonInput1 = $parseInt("input#gridRadios1").val();
  var elonInput2 = $parseInt("input#gridRadios5").val();
  var elonInput3 = $parseInt("input#gridRadios9").val();

  var inputTotal = elonInput1 + elonInput2 + elonInput3;
$(#submit)
  if (inputTotal === 9) {
    //$('#Elon').show();
    alert(inputTotal);
  //} else if (age === 18) {
  //  alert("Welcome NEW voter!");
  //  $('#adult').show();
  //} else {
  //  $('#minor').show();
  }
});
