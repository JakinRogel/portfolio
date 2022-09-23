$(function(){
    $("#contact").load("contact.html"); 
    $("#footer").load("footer.html");

    $("#contactDisplay").click(function(){
    $("#contact").show();
    $("#contactBtn").hide();
    $("#footer").hide();
  })
  });