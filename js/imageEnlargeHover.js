$(document).ready(function() {

  var $links = $("#body > a");

  $links.mouseenter(function() {

    $(this).animate({
      width: "25%",
      height: "25%"},
      "fast");

    });

  $links.mouseleave(function() {

    $(this).animate({
      width: "20%",
      height: "20%"},
      "fast");

    });



});
