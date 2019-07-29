function generate()
{
  container = document.getElementById('container');
  for(i = 0; i < 4; i++)
  {
    // texty_boi = document.createElement('p')
    // texty_boi.innerText = i;
    // texty_boi.style.color = 'white'

    node = document.createElement('div');
    colors = ['red', 'yellow', 'blue', 'green'];
    color = colors[Math.floor(Math.random() * colors.length)];
    node.innerHTML = i;
    node.className = color + ' ' + 'form';
    node.style.cssText = "text-align: center; color: white;"
    // node.appendChild(texty_boi)

    container.appendChild(node);
  }
}
