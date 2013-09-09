



$(document).ready(function() {

  $("body").removeClass();





// Add class masonary if you have a conflict problems 

// $(function($) {
//   var loc = window.location.pathname;
//   console.log(loc);
//   if(loc = '/about.php') {
//     $('body').addClass('usemasonry');
//   }
// });

// // Uses masonary of about page
// if ($('body').hasClass('usemasonry')) {
//   $('.image-grid').masonry({
//     columnWidth: 200,
//     itemSelector: '.grid-image'
//   });
// }
// else {
//   console.log('no masonry');
// }




$(function($) {
  var pathname = window.location.pathname; 
  console.log(pathname);
  if(pathname == '/index.php' || pathname == '/') {
    $('footer .social-links').addClass('hide-social');
  }
});


// $('.info-open').each(function() {
//   $(this).click(function(){
// console.log('You hovered over info-open');
//     $('#project-excerpt').each(function(){

//       $(this).toggleClass('active');

//     });
//   });
// });


// Archive image hover 
$('.archive-thumb').hover(function() {
  $(this).find('img').fadeTo('medium', 0.1);
  $(this).find('h2').addClass('active');
}, function() {
  $(this).find('img').fadeTo('slow', 1);
  $(this).find('h2').removeClass();
});
// Archive image title 
// Title needs a delay so they recognise the image height
setTimeout(function() {
  $('.archive-thumb').each(function() {
    console.log($(this).find('img').innerHeight());
    $(this).find('h2').css('margin-top', -(verticalCentre(this)));
  });
}, 300);
// // Lightbox read
// $("#read").colorbox({inline:true, width:"50%"});

$('.aside-list li').each(function(){
  $(this).hover(function() {
    var index = $(this).index();
    $(this).closest(".aside-links").next().find(".link-item")
    .eq(index).add(this).toggleClass("active");

    console.log('worked');

  });
});

// slider pl


  jQuery.rsCSS3Easing.easeOutBack = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)';
  $('#slider-with-blocks-1').royalSlider({
    arrowsNav: true,
    arrowsNavAutoHide: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'bullets',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    blockLoop: true,
    loop: true,
    numImagesToPreload: 6,
    transitionType: 'fade',
    keyboardNavEnabled: true,
    block: {
      delay: 400
    }
  });


tgktg




});



// Calculates arcive pages image height

function verticalCentre(element) {
  imgHalf = $(element).find('img').height();
  paraHeight = $(element).find('h2').height();
  paraCentre = (imgHalf / 2) + (paraHeight / 2);
  return paraCentre;
}