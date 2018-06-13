$(document).ready(function() {

  var $links = $("#body > a");

  $links.mouseenter(function() {
    TweenLite.to(this, .1, {scale: 1.1});
    });

  $links.mouseleave(function() {
  TweenLite.to(this, .1, {scale: 1});
    });
});
