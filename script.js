function moveAndDisappear() {
    // Get the button element
    var button = document.getElementById("disappearingButton");
  
    // Set new random position within the visible boundaries
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;
  
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
  
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  
    // Hide the button
    button.style.display = "none";
  
    // Show the button after a delay (you can adjust the delay as needed)
    setTimeout(function() {
      button.style.display = "inline-block";
    }, );
}

function yes() {
    const div1 = document.getElementsByClassName("no1")[0];
    const div2 = document.getElementsByClassName("no2")[0];
    const text = document.querySelector('.text');
  
    // Hide elements
    div1.style.display = 'none';
    div2.style.display = 'block';
    text.style.display = 'none';
}  