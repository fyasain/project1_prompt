// var counter = 0, // to keep track of current slide
//     $items = $('.jcfc-slideshow figure'), // a collection of all of the slides, caching for performance
//     numItems = $items.length; // total number of slides

// // this function is what cycles the slides, showing the next or previous slide and hiding all the others
// var showCurrent = function(){
//     var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
//   $items.removeClass('show'); // remove .show from whichever element currently has it
//   $items.eq(itemToShow).addClass('show');    
// };

// // add click events to prev & next buttons 
// $('.next').on('click', function(){
//     counter++;
//     showCurrent(); 
// });
// $('.prev').on('click', function(){
//     counter--;
//     showCurrent(); 
// });

// // if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
// if('ontouchstart' in window){
//   $('.jcfc-slideshow').swipe({
//     swipeLeft:function() {
//       counter++;
//       showCurrent(); 
//     },
//     swipeRight:function() {
//       counter--;
//       showCurrent(); 
//     }
//   });
// }
// var counter = 0, // to keep track of current slide
//     $items = $('.jcfc-slideshow figure'), // a collection of all of the slides, caching for performance
//     numItems = $items.length; // total number of slides

// // this function is what cycles the slides, showing the next or previous slide and hiding all the others
// var showCurrent = function(){
//     var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
//   $items.removeClass('show'); // remove .show from whichever element currently has it
//   $items.eq(itemToShow).addClass('show');    
// };

// $('.next').on('click', function(){
//     counter++;
//     showCurrent(); 
// });
// $('.prev').on('click', function(){
//     counter--;
//     showCurrent(); 
// });


    //reviews
  
    //partners logo
    $(".jcfc-slideshow").slick({
      autoplay: true,
      autoplaySpeed: 2500,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
     
      fade: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    // =========== groups ===================

$(function(){
    let date = new Date();
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    // console.log(`${months[date.getMonth()]}, ${date.getFullYear()}`);
    $(".date").html(
      `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()} <br/>`
    );
  }); 


   

    
    
    
    
  
    
  


