// document.addEventListener('DOMContentLoaded', function () {
//   const script = document.createElement('script');
//   script.src = 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.js';
//   script.integrity = 'sha512-+lT03oxUO9nbR1+2A4UB9iPhwMG/NSNmrzUzvcvzoQK8n3gm/X2ClNq+bu6i6GkmS+te++TOebda7CEdRguCgA==';
//   script.crossOrigin = 'anonymous';

//   script.onload = function () {
//     window.updateLatex = function (latexCode) {
//       const latexCodeOutput = document.getElementById('latexOutput');
//       const latexDisplayOutput = document.getElementById('codeOutput');

//       katex.render(latexCode, latexCodeOutput, { throwOnError: false });
//       latexDisplayOutput.textContent = latexCode;
//     };
//   };

//   document.head.appendChild(script);

//   // Function to handle button click
//   function handleButtonClick(latexCode) {
//     const latexCodeOutput = document.getElementById('latexOutput');
//     const latexDisplayOutput = document.getElementById('codeOutput');

//     // Render LaTeX code in the latexOutput div
//     katex.render(latexCode, latexCodeOutput, { throwOnError: false });

//     // Display the entered LaTeX code in the codeOutput div
//     latexDisplayOutput.textContent = latexCode;
//   }

//   // Get all buttons and add click event listeners
//   const buttons = document.querySelectorAll('.latex_eq button');
//   buttons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       const latexCode = button.getAttribute('data-latex');
//       handleButtonClick(latexCode);
//     });
//   });
// });

function updateLatex(latex) {
  var currentLatex = document.getElementById('latexOutput').value;
  document.getElementById('latexOutput').value = currentLatex + latex;
 }