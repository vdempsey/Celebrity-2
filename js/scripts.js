$(document).ready(function() {
  $("form").submit(function(event) {
    var elonInput1 = document.getElementById("gridRadios1");
    var elonInput2 = document.getElementById("gridRadios5");
    var elonInput3 = document.getElementById("gridRadios9");

    if ((elonInput1).checked && (elonInput2).checked && (elonInput3).checked) {
      $('#elon').show();
    }

    event.preventDefault();

  });
});
