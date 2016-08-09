var g = G$('John', 'Doe');

//g.greet().HTMLGreeting(greeting, true);

$("#login").click(function() {
    var loginGrtr = G$("stefan", "geamana");
    $("#logindiv").hide();
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();

      });