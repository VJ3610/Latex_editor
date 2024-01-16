// script.js
document.addEventListener('DOMContentLoaded', function() {
  const codeInput = document.getElementById('codeInput');
  const latexOutput = document.getElementById('latexOutput');
  const codeOutput = document.getElementById('codeOutput');

  codeInput.addEventListener('input', function() {
    // Display LaTeX symbols in the latex_eq div
    latexOutput.innerHTML = codeInput.value;
  });

  // You can integrate a code execution mechanism here and display the output in the latex_out div
});
