$(document).on("scroll", function(){
  var distanceScrolled = $(document).scrollTop();
  var $win = $(window);
  var winH = $win.height();
  var winW = $win.width();

  $(".zero").css("top", distanceScrolled*-1.75);
  $(".one").css("top", distanceScrolled*-1.6);
  $(".two").css("top", distanceScrolled*-1.45);
  $(".three").css("top", distanceScrolled*-1.3);
  $(".four").css("top", distanceScrolled*-1.15);
  $(".five").css("top", distanceScrolled*-1);
  $(".six").css("top", distanceScrolled*-0.85);
  $(".seven").css("top", distanceScrolled*-0.7);
  $(".eight").css("top", distanceScrolled*-0.55);
  $(".nine").css("top", distanceScrolled*-0.4);
  $(".ten").css("top", distanceScrolled*-1.25);
})
