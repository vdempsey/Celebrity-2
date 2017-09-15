$(document).ready(function() {
  $("form").submit(function(event) {
    var elonInput1 = document.getElementById("gridRadios1");
    var elonInput2 = document.getElementById("gridRadios5");
    var elonInput3 = document.getElementById("gridRadios9");
    var lizInput1 = document.getElementById("gridRadios2");
    var lizInput2 = document.getElementById("gridRadios6");
    var lizInput3 = document.getElementById("gridRadios7");
    var mikeInput1 = document.getElementById("gridRadios3");
    var mikeInput2 = document.getElementById("gridRadios4");
    var mikeInput3 = document.getElementById("gridRadios8");
    if ((elonInput1).checked && (elonInput2).checked && (elonInput3).checked) {
      $('#elon').show();
      $('#liz').hide();
      $('#mike').hide();
      $('#unicorn').hide();
    } else if ((lizInput1).checked && (lizInput2).checked && (lizInput3).checked) {
      $('#liz').show();
      $('#elon').hide();
      $('#mike').hide();
      $('#unicorn').hide();
    } else if ((mikeInput1).checked && (mikeInput2).checked && (mikeInput3).checked) {
      $('#mike').show();
      $('#elon').hide();
      $('#liz').hide();
      $('#unicorn').hide();
    } else {
        $('#unicorn').show()
        $('#liz').hide();
        $('#elon').hide();
        $('#mike').hide();
    }

    event.preventDefault();

  });

});
