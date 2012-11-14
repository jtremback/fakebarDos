
function init () {
  $('[data-object*="dialog"]').hide();
}


// function showReply() {  
//   $(this).parents('[data-object="detail"]').eq(0).find('[data-object="reply-dialog"]')
//   .eq(0).slideToggle();
// }

// function showFlag() {
//   $(this).parents('[data-object="detail"]').eq(0).find('[data-object="flag-dialog"]').eq(0)
//   .slideToggle();
// }

// function showShare() {
//   var el = $(this).parents('[data-object="detail"]').eq(0).find('[data-object="share-dialog"]').eq(0);
//   el.slideToggle("fast");
//   el.find("input").select();
// }


function showDialog (that, type) {
  var _detail = that.parents('[data-object="detail"]').eq(0),
      _annotation = that.parents('[data-object="annotation"]').eq(0),

      _dialog = _detail.find('[data-object="' + type + '-dialog"]').eq(0),

      _body = _detail.find('[data-object="body"]').eq(0),
      _username = _detail.find('[data-object="username"]').eq(0),
      _time = _detail.find('[data-object="time"]').eq(0),

      _textarea = _dialog.find('textarea'),

      _origname = _username.text(),
      _origtext = _body.text(),

      _deployed,

      _cancel = _dialog.find('[data-action="cancel"]'),
      _save = _dialog.find('[data-action="save"]'); 

  if(type === "edit") {
    _textarea.text(_body.text());
    _body.slideUp();
    _dialog.slideDown();

    var cancelFunc = function() {
      _body.slideDown();
      _dialog.slideUp();
    }

    var saveFunc = function() {
      _body.html(_textarea.val()+"<p class='tertiarytext'>Edited just now. (<a data-action='original'>original</a>)</p>");
      _body.slideDown();
      _dialog.slideUp();
    }

  } else if(type === "delete") {
    _username.text('[deleted]');
    _body.slideUp();
    _dialog.slideDown();

    var cancelFunc = function() {
      _body.slideDown();
      _dialog.slideUp();
      _username.text(_origname);
    }

    var saveFunc = function() {
      _body.html("<p>Reason: <em>"+_textarea.val()+"</em></p>");
      _time.text("deleted just now")
      _body.slideDown();
      _dialog.slideUp();
    }

  } else {
    _dialog.slideToggle();
    console.log("else")
    var cancelFunc = function() {
      _body.slideDown();
      _dialog.slideUp();
    }
  }


  $('[data-object*="dialog"]').not(_dialog).slideUp();



  _cancel.click(function(){
    console.log(cancelFunc);
    cancelFunc();
  });

  _save.click(function(){
    console.log(saveFunc);
    saveFunc();
  });
}

// function showEdit(that, type) {
//   var _annotation = that.parents('[data-object="annotation"]').eq(0);
//   var _dialog = _annotation.find('[data-object="edit-dialog"]').eq(0);
//   var _body = _annotation.find('[data-object="body"]');
//   var _bodytext = _body.text();
//   var _textarea = _dialog.find('textarea');
//   var _message = _dialog.find('[data-object="message"]')

//   var _save = _dialog.find('[data-action="save"]');
//   var _cancel = _dialog.find('[data-action="cancel"]');
//   console.log(that);

//   if (type === "edit") {
//     _body.slideUp();
//     _textarea.text(_bodytext);
//     _save.text('Edit'); 
//   } else if (type === "delete") {
//     _message.text("Are you sure you want to delete your annotation?")
//     _body.slideUp();
//     _textarea.hide();
//     _save.text('Delete');
//   } else if (type === "amend") {
//     _message.text("Amend your annotation to correct errors or add information.")
//     _textarea.attr("placeholder", "Amendment...")
//     _save.text('Amend');
//   } else if (type === "retract") {
//     _body.slideUp();
//     _message.text("Retracting an annotation may impact your reputation. Please state the reason you are retracting the annotation.")
//     _textarea.attr("placeholder", "I'm retracting this annotation because...")
//     _save.text('Retract');
//   }

//   _dialog.slideDown();
// }

// function showDelete() {
//   $(this).parents('[data-object="annotation"]').find('[data-object="delete-dialog"]').eq(0)
//   .slideToggle();
// }

// function hideDialog() {
//   $(this).parents('[data-object*="dialog"]')
//   .slideUp();
//   $(this).parents('[data-object="annotation"]').find('[data-object="body"]').slideDown();
//   console.log($(this).parents('[data-object*="dialog"]'));
// }


function favoriteThis() {
  $(this).toggleClass("checked");
}



$(document).ready(function(){

  $('.dropdown-toggle').dropdown()
  $('.magicontrols *').tooltip({placement: 'top', delay: { show: 200, hide: 200 }, fade: true})
  $('.lock-icon').tooltip({placement: 'bottom', delay: { show: 500, hide: 100 }, fade: true})

  $(".writer .lock-icon").addClass('icon-hidden');

  init();

  //EVENTS

  // $('[data-action="cancel"]').on("click", hideDialog);
  $('[data-action="edit"]').click(function(){
    showDialog($(this), "edit");
  });
  $('[data-action="delete"]').click(function(){
    showDialog($(this), "delete");
  });
  $('[data-action="reply"]').click(function(){
    showDialog($(this), "write");
  });
  $('[data-action="flag"]').click(function(){
    showDialog($(this), "flag");
  });
  $('[data-action="share"]').click(function(){
    showDialog($(this), "share");
  });
  // $('[data-action="delete"]').click(function(){
  //   showEdit($(this), "delete");
  // });
  // $('[data-action="amend"]').click(function(){
  //   showEdit($(this), "amend");
  // });
  // $('[data-action="retract"]').click(function(){
  //   showEdit($(this), "retract");
  // });

//VIS MENU
  var VisGroup = '[data-action="vis-group"]';
  var VisPublic = '[data-action="vis-public"]';
  var VisPrivate = '[data-action="vis-private"]';

  $(VisGroup).not('.inactive').click(function(){
    $(VisPublic).removeClass('selected');
    $(VisPrivate).removeClass('selected');
    $('.visibility .dropdown-toggle').text('Groups');
    $(this).parents(Detail).find('.lock-icon').removeClass('icon-hidden').addClass('unlocked');
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



//VIEW SHOWING
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
