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
