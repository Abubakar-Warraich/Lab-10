document.addEventListener("DOMContentLoaded", function() {
    // Change background color of body to a random color
    document.body.style.backgroundColor = getRandomColor();
  
    // Append a new paragraph
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added dynamically!";
    document.getElementById("container").appendChild(newParagraph);
  
    // Event listener for button click
    document.getElementById("changeTextBtn").addEventListener("click", function() {
      // Change text of the paragraph
      document.getElementById("message").textContent = "Text changed successfully!";
    });
  });
  
  // Function to generate random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  