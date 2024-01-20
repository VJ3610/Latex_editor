// Function to update the LaTeX code
function updateLatex(latexCode) {
  const latexCodeOutput = document.getElementById('latexOutput');
  const latexDisplayOutput = document.getElementById('codeOutput');

  // Display the LaTeX code in the textarea
  var currentLatex = latexCodeOutput.value;
  latexCodeOutput.value = currentLatex + latexCode;

  // Render LaTeX code in the latexOutput div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the codeOutput div
  latexDisplayOutput.textContent = latexCodeOutput.value;

  // Render LaTeX code in the codeOutput div
  katex.render(latexCodeOutput.value, latexDisplayOutput, { throwOnError: false });
}

// Add an input event listener to the latexOutput textarea
document.getElementById('latexOutput').addEventListener('input', function () {
  const latexCodeOutput = document.getElementById('latexOutput');
  const latexDisplayOutput = document.getElementById('codeOutput');

  // Render LaTeX code in the latexOutput div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the codeOutput div
  latexDisplayOutput.textContent = latexCodeOutput.value;

  // Render LaTeX code in the codeOutput div
  katex.render(latexCodeOutput.value, latexDisplayOutput, { throwOnError: false });
});

// Add an input event listener to the latexOutput textarea for manual typing
document.getElementById('latexOutput').addEventListener('input', function () {
  const latexCodeOutput = document.getElementById('latexOutput');
  const latexDisplayOutput = document.getElementById('codeOutput');

  // Render LaTeX code in the latexOutput div
  katex.render(latexCodeOutput.value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the codeOutput div
  latexDisplayOutput.textContent = latexCodeOutput.value;

  // Render LaTeX code in the codeOutput div
  katex.render(latexCodeOutput.value, latexDisplayOutput, { throwOnError: false });
});


function downloadImage() {
  var codeOutput = document.getElementById('codeOutput');

  // Use html2canvas to capture the content of the textarea
  html2canvas(codeOutput).then(function(canvas) {
      // Convert the canvas to data URL
      var dataURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      var link = document.createElement('a');
      link.href = dataURL;
      link.download = 'imagess.png';

      // Trigger a click event to download the image
      link.click();
  });
}

// latex icon visibllity
function display() {
  var latexEqDisplay = document.querySelector('.latex_eq_display');
  latexEqDisplay.style.display = (latexEqDisplay.style.display === 'none') ? 'block' : 'none';

  if (latexEqDisplay.style.display === 'block') {
    // If the display is set to block, add the images dynamically
    addImagesToContainer();
  }
}

function toggleImages() {
  var iconsContainer = document.getElementById('IconsContainer');

  // Create the HTML content for the images
  var BinaryHTML = `
      <img src="images/Binary ops/+.png" alt="plus" class="icon" onclick="updateLatex('+')">
      <img src="images/Binary ops/-.png" alt="minus" class="icon" onclick="updateLatex('-')">
  `;
  var casesHtml=`
      
  `
  // Set the innerHTML of the container
  iconsContainer.innerHTML = BinaryHTML;
}