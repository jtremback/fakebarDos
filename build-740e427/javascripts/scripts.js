$(document).ready(function(){

  $('.dropdown-toggle').dropdown()

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

//HOVERER
  $(".detail").mouseover(function(event){
    $(this).addClass("hover");
    event.stopPropagation();
  });

  $(".detail").mouseout(function(event){
    $(this).removeClass("hover");
    event.stopPropagation();
  });

//REPLIER
  $(".writer").hide();
  $(".reply").click(function(){
    $(this).parent().parent().find(".writer").eq(0).show();
  });

  $(".writer .annotator-cancel").click(function(){
    $(this).parents(".writer").hide()
  });

//SHOWURL
  $(".showurl").click(function(){
    $(this).html('https://hypothes.is/h/a/9eje9ejedoido').select();
  })

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
