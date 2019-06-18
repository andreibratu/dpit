new Pageable("#container", {
  orientation: "vertical", // or horizontal
  swipeThreshold: 50, // swipe / mouse drag distance (px) before firing the page change event
  freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
  infinite: false, // enable infinite scrolling (from 0.4.0)
  events: {
      wheel: true, // enable / disable mousewheel scrolling
      mouse: true, // enable / disable mouse drag scrolling
      touch: true, // enable / disable touch / swipe scrolling
      keydown: true, // enable / disable keyboard navigation
  },
});

var subtitle = document.getElementById('subtitle');
let oldText = subtitle.innerHTML;
let newText = "FUTURE BELONGS TO THE BOLD";

function curious() {
  subtitle.innerHTML = newText;
}

function notCurious() {
  subtitle.innerHTML = oldText;
}

// particlesJS('particles-js', {
//   "particles": {
//     "number": {
//       "value": 80,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 5,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "repulse"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true,
//   "config_demo": {
//     "hide_card": false,
//     "background_color": "#b61924",
//     "background_image": "",
//     "background_position": "50% 50%",
//     "background_repeat": "no-repeat",
//     "background_size": "cover"
//   }
// }
// );
