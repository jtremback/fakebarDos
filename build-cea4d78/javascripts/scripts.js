$(document).ready(function(){

  $('.dropdown-toggle').dropdown()
  $('.magicontrols *').tooltip({placement: 'bottom', delay: { show: 500, hide: 100 }, fade: true})
  $('.lock-icon').tooltip({placement: 'bottom', delay: { show: 500, hide: 100 }, fade: true})

  $(".writer .lock-icon").addClass('icon-hidden');

  $('.visibility li.vis-group').not('.inactive').click(function(){
    $('.visibility li.vis-public').removeClass('selected');
    $('.visibility li.vis-private').removeClass('selected');
    $('.visibility .dropdown-toggle').text('Groups');
    $(this).parent().parent().parent().find('.lock-icon').removeClass('icon-hidden').addClass('unlocked');
    $(this).toggleClass('selected');
  });

  $('.visibility li.vis-public').not('.inactive').click(function(){
    $('.visibility li').removeClass('selected');
    $('.visibility .dropdown-toggle').text('Public');
    $(this).parent().parent().parent().find('.lock-icon').addClass('icon-hidden');
    $(this).toggleClass('selected');
  });

  $('.visibility li.vis-private').not('.inactive').click(function(){
    $('.visibility li').removeClass('selected');
    $('.visibility .dropdown-toggle').text('Private');
    $(this).parent().parent().parent().find('.lock-icon').removeClass('icon-hidden').removeClass('unlocked');
    $(this).toggleClass('selected');
  });

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
  $(".reply-icon").click(function(){
    $(this).parent().parent().parent().find(".writer").eq(0).slideToggle();
  });

  $(".writer .annotator-cancel").click(function(){
    $(this).parents(".writer").slideUp()
  });

//FLAGGER
  $(".flag-dialog").hide();
  $(".flag-icon").click(function(){
    $(this).parent().parent().find(".flag-dialog").eq(0).slideToggle();
  });

  $(".flag-dialog .annotator-cancel").click(function(){
    $(this).parents(".flag-dialog").slideUp()
  });

//SHARER
  $(".share-dialog").hide();
  $(".share-icon").click(function(){
    var dialog = $(this).parent().parent().find(".share-dialog").eq(0);
    dialog.slideToggle("fast");
    dialog.find("input").select();
  });

//FAVER
  $(".fave-icon").click(function(){
    $(this).toggleClass("checked");
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
