$(document).on("scroll", function(){
  var distanceScrolled = $(document).scrollTop();
  var $win = $(window);
  var winH = $win.height();
  var winW = $win.width();

  // $("img.one").css("left", distanceScrolled-(300*winW)*0.02);

  if (distanceScrolled > winW*3.3){
    $("img.one").css("left", (distanceScrolled-(winW*3.3))*1.5);
    $("img.two").css("left", (distanceScrolled-(winW*3.3))*1.125);
    $("img.three").css("left", (distanceScrolled-(winW*3.3))*0.75);
    $("img.four").css("left", (distanceScrolled-(winW*3.3))*0.375);
  }
  if (distanceScrolled > winW*3.4){
    $("img.two.bottom").css("z-index", "99");
  }
  else{
    $("img.two.bottom").css("z-index", "96");
  }
  if (distanceScrolled> winW*3.5){
    $("img.one").css("left", "30vw");
    $("img.two").css("left", "22.5vw");
    $("img.three").css("left", "15vw");
    $("img.four").css("left", "7.5vw");
  }
})
