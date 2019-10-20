$(document).on("scroll", function(){
  var distanceScrolled = $(document).scrollTop();
  var $win = $(window);
  var winH = $win.height();
  var winW = $win.width();

  $(".comma").css("top", distanceScrolled*-2);
  $(".first").css("top", distanceScrolled*-2);
  $(".introparagraph").css("right", distanceScrolled*-2.7);
  $(".herein").css("left", distanceScrolled*-6.5);
  $(".aboutlink").css("left", distanceScrolled*-2);
  $(".contactlink").css("right", distanceScrolled*-2);
  $("img.downarrow").css("top", distanceScrolled*-1.5);
  // $("img.downarrow").css("opacity", 100-distanceScrolled*3);

  if (distanceScrolled < winW*0.07){
    $(".aboutlink").css("top", 0);
    $(".contactlink").css("top", 0);
  }

  if (distanceScrolled >= winW*0.07){
    $(".aboutlink").css("top", (distanceScrolled-0.07*winW)*-3);
    $(".contactlink").css("top", (distanceScrolled-0.07*winW)*-3);
  }

  if (distanceScrolled <= winW*0.205){
    $(".name").css("font-size", "6.5vw");
    $(".name").css("letter-spacing", "0.4vw");
    $(".name").css("line-height", "1");
    $(".name").css("position", "relative");
    $(".name").css("left", distanceScrolled*-1.05);
    $(".name").css("top", 0);
  }

  if (distanceScrolled > winW*0.205){
    $(".name").css("font-size", 0.065*winW-(distanceScrolled-0.205*winW)*0.04/0.305);
    $(".name").css("letter-spacing", 0.004*winW-(distanceScrolled-0.205*winW)*0.0026/0.305);
    $(".name").css("line-height", "1");
    $(".name").css("position", "absolute");
    $(".name").css("left", "-22vw");
    $(".name").css("top", distanceScrolled*1-winW*0.205);
  }

  if (distanceScrolled >= winW*0.51) {
    $(".name").css("font-size", "2.5vw");
    $(".name").css("letter-spacing", "0.14vw");
    $(".name").css("line-height", "1");
    $(".name").css("position", "fixed");
    $(".name").css("top", "1.6vw");
    $(".name").css("left", "5vw");
  }

  if (distanceScrolled >= winW*0.53) {
  $(".aboutlink").css("left", "-10vw");
  $(".contactlink").css("right", "-10vw");
}

  if (distanceScrolled >= winW*0.53) {
    $(".barmenu").css("position", "fixed");
    $(".barmenu").css("left", "18vw");
    $(".barmenu").css("top", "1.5vw");
  }
  else{
    $(".barmenu").css("position", "relative");
    $(".barmenu").css("left", "15vw");
  }

  if (distanceScrolled >= winW*0.53) {
    $(".whitebar").css("position", "fixed");
  }
  else{
    $(".whitebar").css("position", "relative");
  }
})
