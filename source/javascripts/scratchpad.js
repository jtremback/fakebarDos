  //THREAD COLLAPSER
  $("#wrapper2").bind("scroll", function(event){
    var counter = 0;

    $("#wrapper2 .hyp-detail").each(function(){

      if ($(window).scrollTop() >= $(this).offset().top) {
        $(this).parents(".hyp-detail").eq(0).addClass("collapsed");
        ++counter;
      }

      if ($(window).scrollTop() <= $(this).offset().top) {
        $(this).parents(".hyp-detail").eq(0).removeClass("collapsed");
      }

    });

    counter = counter - 1;

    if (counter <= 0) {
      $(".margin-counter").hide();
    } else {
      $(".margin-counter").show().html("+" + (counter));
    }

  });
