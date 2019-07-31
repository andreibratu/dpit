let API_URL = 'https://jsonplaceholder.typicode.com/todos'
var todos = [];

// Init below;
var feed;
var all_button;
var done_button;
var not_done_button;

var once = true;

// Display modes
let ALL = 0;
let DONE = 1;
let NOT_DONE = 2;

// Function is called when HTML is loaded
document.addEventListener("DOMContentLoaded", function(event) {
  console.log('Fired up!')

  // Outside, variables might
  // be set before the page is loaded
  // Beware the JS async
  feed = document.getElementById('feed');
  all_button = document.getElementById('all');
  done_button = document.getElementById('done');
  not_done_button = document.getElementById('not-done');
  // ----
  all_button.addEventListener('click', function() {
    displayChanged(ALL);
  });
  done_button.addEventListener('click', function() {
    displayChanged(DONE);
  });
  not_done_button.addEventListener('click', function() {
    displayChanged(NOT_DONE)
  });

  // Fetch the todos
  fetch(API_URL)
  .then(response => response.json())
  .then(json_array => {
    todos = json_array;
    // Set init display mode and populate feed
    // Beware the async in JS!
    displayChanged(ALL);
  });
});

function clearFeed()
{
  // Clear feed element before repopulating
  // feed.innerHTML = '' would have worked,
  // SO explained that it is bad practice
  while (feed.firstChild)
  {
    feed.removeChild(feed.firstChild);
  }
}

function setFeed(objects)
{
  // Set feed to display TODOs in array
  clearFeed();
  console.log('CHILDREN', feed.children);
  objects.forEach(json => {
    card = document.createElement('div');
    card.className = "card bg-white d-flex justify-center m-1";

    text = document.createTextNode(json.title);

    card.appendChild(text);
    feed.appendChild(card);
  })
}

function displayChanged(mode)
{
  console.log(mode);
  switch (mode)
  {
    case ALL:
      // Pass a copy of the entire array
      setFeed(todos.filter(json => true));
      break;
    case DONE:
      // Pass only done tasks
      setFeed(todos.filter(json => json.completed));
      break;
    case NOT_DONE:
      // You guessed it
      setFeed(todos.filter(json => !json.completed));
      break;
  }
}
