// Function to update the LaTeX code
function updateLatex(latexCode) {
  // Display the LaTeX code in the textarea

}

//Download image
function downloadImage() {
  var textareaContent = document.getElementById('latexOutput');

  // Use html2canvas to capture the content of the textarea
  html2canvas(textareaContent).then(function(canvas) {
      // Convert the canvas to data URL
      var dataURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      var link = document.createElement('a');
      link.href = dataURL;
      link.download = 'latexOutput.png';

      // Trigger a click event to download the image
      link.click();
  });
}

// function updateLatex(latexCode) {
//   const latexCodeOutput = document.getElementById('latexOutput');
//   const latexDisplayOutput = document.getElementById('codeOutput');
//   var currentLatex = document.getElementById('latexOutput').value;
//   document.getElementById('latexOutput').value = currentLatex + latexCode;
//   // Render LaTeX code in the latexOutput div
//   katex.render(latexCode, latexCodeOutput, { throwOnError: false });

//   // Display the entered LaTeX code in the codeOutput div
//   latexDisplayOutput.textContent = latexCode;
//   // Render LaTeX code in the codeOutput div
//   katex.render(latexCode, latexDisplayOutput, { throwOnError: false });
// }

// Function to update the LaTeX code
function updateLatex(latexCode) {
  const latexCodeOutput = document.getElementById('latexOutput');
  const latexDisplayOutput = document.getElementById('codeOutput');

  // Display the LaTeX code in the textarea
  var currentLatex = document.getElementById('latexOutput').value;
  document.getElementById('latexOutput').value = currentLatex + latexCode;

  // Render LaTeX code in the latexOutput div
  katex.render(document.getElementById('latexOutput').value, latexCodeOutput, { throwOnError: false });

  // Display the entered LaTeX code in the codeOutput div
  latexDisplayOutput.textContent = document.getElementById('latexOutput').value;

  // Render LaTeX code in the codeOutput div
  katex.render(document.getElementById('latexOutput').value, latexDisplayOutput, { throwOnError: false });
}
