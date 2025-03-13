// Initialize GSAP timeline for page load animation
const tlMaster = gsap.timeline();

// Fade in animations
tlMaster
  .to("#stageBlock", { duration: 1, autoAlpha: 0 }, 1)
  .from("#section", { duration: 0.5, autoAlpha: 0, y: "+=100px", ease: Back.easeOut }, 1.24);

// Logo spinner animation
const startAnim = gsap.to(".spinner", {
  rotation: "+=360",
  ease: "power1.in",
  duration: 0.5,
  onComplete: () => loopAnim.play()
});

// Continuous logo spin
const loopAnim = gsap.to(".spinner", {
  rotation: "+=360",
  ease: "none",
  duration: 25,
  repeat: -1,
  paused: true
});

// Initialize marquee
function initMarquee() {
  const marqueeTrack = document.querySelector('.marquee-track');
  const marqueeContent = document.querySelector('.marquee-content');
  
  // Create the infinite scroll animation
  gsap.to(marqueeTrack, {
    x: `-${marqueeContent.offsetWidth}`,
    duration: 20,
    ease: "none",
    repeat: -1,
    // Ensure smooth looping
    onComplete: () => gsap.set(marqueeTrack, { x: 0 }),
    onRepeat: () => gsap.set(marqueeTrack, { x: 0 })
  });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
});

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