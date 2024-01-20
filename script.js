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
      link.download = 'images.png';

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

function binaryDisplay() {
  var iconsContainer = document.getElementById('IconsContainer');
  // Create the HTML content for the images
  var BinaryHTML = `
    <img src="images/Binary ops/+.png" alt="plus" class="icon" onclick="updateLatex('+')">
    <img src="images/Binary ops/-.png" alt="minus" class="icon" onclick="updateLatex('-')">
    
  `;
  iconsContainer.innerHTML = BinaryHTML;
}

function caseDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var caseHtml=`
    <img src="images/Cases/x=abc.png" alt="" class="icon" onclick="updateLatex('+')">
  `;
  iconsContainer.innerHTML = caseHtml;
}

function fractionDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var fraction=`
  <img src="images/Fractions/d2f(x).png" alt="" class="icon" onclick="updateLatex('+')">
  
  `;
  iconsContainer.innerHTML = fraction;
}

function greekLettersDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var greek=`
    <img src="images/greek letters/alpha.png" alt="" class="icon" onclick="updateLatex('+')">
  `;
  iconsContainer.innerHTML=greek;
}

function integralDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var integral=`
  <img src="images/integral/baf(x).png" alt="" class="icon" onclick="updateLatex('+')">
  `;
  iconsContainer.innerHTML=integral;
}

function operatorDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var Operator=`
  
  <img src="images/large ops/bigcap(0_n).png" alt="" class="icon" onclick="updateLatex('+')">
  `;
  iconsContainer.innerHTML = Operator;
}

function largeOpereatorDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var operators=`
  <img src="images/Operators/f.png" alt="" class="icon" onclick="updateLatex('+')">
  `;
  iconsContainer.innerHTML = operators;
}

function subSuperDisplay(){
  var iconsContainer = document.getElementById('IconsContainer');
  var subSuper=`
  <img src="images/Sub_Super/Cab.png" alt="" class="icon" onclick="updateLatex('+')">
  `;
  iconsContainer.innerHTML = subSuper;
}