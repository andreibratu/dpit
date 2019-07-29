function generate()
{
  for(i = 0; i < 10; i++)
  {
    node = document.createElement('div');
    colors = ['red', 'yellow', 'blue', 'green'];
    color = colors[Math.floor(Math.random() * colors.length)];
    node.className = color + ' ' + 'form';
    // TODO var textnode = document.createTextNode("Water");
    container = document.getElementById('container');
    container.appendChild(node);
  }
}
