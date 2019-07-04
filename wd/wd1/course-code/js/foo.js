function updateSubTitle()
{
  document.getElementById('sub-title').innerHTML = "Wow!";
  document.getElementById('sub-title').style.visibility = 'hidden';
}

function undoSubTitle()
{
  document.getElementById("sub-title").innerHTML = "Hagi";
}
