console.log(gsap);


const tlMaster = gsap.timeline();

tlMaster.to("#stageBlock", {duration:1, autoAlpha:0},1);
tlMaster.from("#section", {duration:0.5, autoAlpha:0, y:"+=100px", ease:Back.easeOut },1.24)


const startAnim = gsap.to(".spinner", {
    rotation: "+=360", 

    ease: "power1.in", 
    duration: 0.5, 
    onComplete: () => loopAnim.play() 
  });


gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"});

  
  const loopAnim = gsap.to(".spinner", {
    rotation: "+=360", 
    ease: "none", 
    duration: 25, 
    onComplete: () => {
      if(ready) {
        stopAnim.play();
      } else {
        loopAnim.play(0);
      }
    },
    paused: true
  });
  
  let ready = false;
  
  const endRot = 180;
  
//   const stopAnim = gsap.to(".spinner", {
//     rotation: `+=${360 + endRot}`,
//     duration: 0.6,
//     paused: true
//   });

// // let currentScroll = 0;
// let isScrollingDown = true;



// gsap.set(".marquee__inner", {xPercent: -50});

// window.addEventListener("scroll", function(){
  
//   if ( window.pageYOffset > currentScroll ) {
//     isScrollingDown = true;
//   } else {
//     isScrollingDown = false;
//   }
   
//   gsap.to(tween, {
//     timeScale: isScrollingDown ? 1 : -1
//   });
  
//   currentScroll = window.pageYOffset
// });










$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});