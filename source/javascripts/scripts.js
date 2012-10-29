$.belowthefold = function(element, settings) {
    var fold = $(window).height() + $(window).scrollTop();
    return fold <= $(element).offset().top;
};

$.abovethetop = function(element, settings) {
    var top = $(window).scrollTop();
    return top >= $(element).offset().top + $(element).height();
};

$(document).ready(function(){

  $(".summary").click(function(event){
    $("#wrapper2").addClass("out");
    $("#wrapper1").addClass("compressed");
    $("#wrapper3").addClass("compressed");
    event.stopPropagation();    
  });

  $(".history").click(function(event){
    $("#wrapper3").addClass("shown");
    event.stopPropagation();    
  });

  $(".thispage").click(function(event){
    $("#wrapper3").removeClass("shown");
    event.stopPropagation();    
  });

  $(document).click(function(event) {
    $("#wrapper2").removeClass("out");
    $("#wrapper1").removeClass("compressed");
    $("#wrapper3").removeClass("compressed");
    $(".heatmap-pointer").removeClass("flip");
  });

  $("#wrapper2").click(function(event) {
    event.stopPropagation();
  });

//FLIPPER
  $(".heatmap-pointer.side").click(function(event){
    event.stopPropagation();
    $(this).addClass("flip");
  });


//THREAD COLLAPSER
  var groups = [];
  var nodes = $("#wrapper2 .paper").children(".annotator-listing").children(".detail")
  while (nodes.children(".annotator-listing").children(".detail").length) {
    groups.push(nodes);
    console.log(nodes);
    nodes = nodes.children(".annotator-listing").children(".detail");
  };

  // groups[1].children(".nothread").css("border", "1px solid blue");



  $("#wrapper2").bind("scroll", function(){

    var i = 0;

    while (
          //there are still groups in the array that have not been processed
          i < groups.length
          //get all .nothreads in current group
          && groups[i].children(".nothread")
          //return only those that are below the top of the screen
          .filter(function(){return $(this).offset().top > 0 
          //and above the bottom
          && ($(this).offset().top + $(this).height()) < $(window).height()})
          //stop the loop if there are some below the top of the screen and above the bottom
          .length == 0
          ) 
      {
        groups[i].parent().parent().addClass("squished");

        if (i <= 0) {
          $("#wrapper2 .margin-counter").hide();
        } else {
          $("#wrapper2 .margin-counter").show().html("+" + (i));
        }

        i++;
      }

    while (i < groups.length){
      groups[i].parent().parent().removeClass("squished");
      console.log("unsquishing");
      i++
    }
  });

});

// groups contain collections of all details on a certain level


// groups = []
// nodes = paper.children(annotator-listing).children(detail)
// while nodes.children(annotator-listing).children(detail).length
//   groups.push(nodes)
//   nodes = nodes.children(annotator-listing).children(detail)

// onscroll
//   i = 0 
//   while groups[i].each(data offscreen)
//     groups[i].addClass("squished")
//     i++

//   while i <  groups.length
//     groups[i].removeClass("squished")
//     i++





  // //THREAD COLLAPSER
  // //If no annotation bodies at a certain level are on screen, squish the level.
  // var scroller = $("#wrapper2");
  // var nothread = scroller.find(".nothread");
  // var detail = scroller.find(".detail")

  // //set data about the depth of each .detail
  // detail.each(function(){
  //   var depth = $(this).parentsUntil($(".paper"), ".detail").length;
  //   $(this).data("depth", depth);
  //   console.log(depth);
  // });
 
  // //do this every scroll event 
  // scroller.bind("scroll", function(event){
  //   var win_top = 0
  //   var scroller_top = scroller.scrollTop();
  //   var targ_top = nothread.offset().top;


  //   //set data about whether each .nothread is on or off screen
  //   nothread.each(function(){
  //     if ($(this).offset().top < win_top){
  //       $(this).data("offscreen", "true");
  //       console.log("offscreening");
  //     } else {
  //       $(this).data("offscreen", "false");
  //       console.log("onscreening");
  //     }
  //   });

  //   //if all nothreads in each detail are offscreen, and all nothreads in every detail with the same
  //   //level are offscreen, collapse all details with that level.
  //   detail.each(function(){
  //     if ($(this).children(".nothread").data )
  //   });

    // target.each(function(){
    //   var depth = target.parentsUntil($(".detail"), ".paper").length;
    //   var all_at_depth = target.filter(function(){ $(this).parentsUntil($(".detail"), ".paper").length == depth; });
    //   if ($(this).data("offscreen") === "true"){
    //     all_at_depth.addClass("squished");
    //     console.log("squishing");
    //   }
    // });

  // });

  // //THREAD COLLAPSER
  // $("#wrapper2").bind("scroll", function(event){
  //   var winTop = $(window).scrollTop();
  //   var target = $("#wrapper2 .detail");

  //   target.each(function(){
  //     if ((winTop >= elTop) ) {
  //       $(this).parents(".detail").eq(0).data("squish", "true");
  //     } else {
  //       $(this).parents(".detail").eq(0).data("squish", "false");
  //     }

  //   });

  //   target.each(function(){
  //     if ($(this).data("squish") === "true") {
  //       $(this).addClass("squished");
  //       console.log("squishing")
  //     } else {
  //       $(this).removeClass("squished");
  //     }
  //   });

  // });


  //   //THREAD COLLAPSER
  // $("#wrapper2").bind("scroll", function(event){
  //   var counter = 0;
  //   console.log($(window).scrollTop());
  //   $("#wrapper2 .detail").each(function(){

  //     if ($(window).scrollTop() >= $(this).offset().top) {
  //       $(this).parents(".detail").eq(0).addClass("collapsed");
  //       ++counter;
  //       console.log($(this).offset().top);
  //     }

  //     if ($(window).scrollTop() <= $(this).offset().top) {
  //       $(this).parents(".detail").eq(0).removeClass("collapsed");
  //     }

  //   });

  //   counter = counter - 1;

  //   if (counter <= 0) {
  //     $(".margin-counter").hide();
  //   } else {
  //     $(".margin-counter").show().html("+" + (counter));
  //   }
  // });


