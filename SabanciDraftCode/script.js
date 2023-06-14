// Get the button elements
const materialPropertiesBtn = document.querySelector("#materialPropertiesBtn");
const boundaryBtn = document.querySelector("#boundaryBtn");
const besoBtn = document.querySelector("#besoBtn");
const propBtn = document.querySelector("#propBtn");
const ocBtn = document.querySelector("#ocBtn");
const runBtn = document.querySelector("#runBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const saveBtn = document.querySelector("#saveBtn");

// Get the input element for uploading the design domain image
const designFileInput = document.querySelector("#designFile");

// Get the image element for displaying the uploaded image
const uploadedImage = document.querySelector("#uploadedImage");

// Add event listeners to the buttons
materialPropertiesBtn.addEventListener("click", handleMaterialProperties);
boundaryBtn.addEventListener("click", handleBoundary);
besoBtn.addEventListener("click", handleBeso);
propBtn.addEventListener("click", handleProp);
ocBtn.addEventListener("click", handleOC);
runBtn.addEventListener("click", handleRun);
pauseBtn.addEventListener("click", handlePause);
saveBtn.addEventListener("click", handleSave);

// Add event listener to the design file input
designFileInput.addEventListener("change", handleDesignFile);

// Event handlers
function handleMaterialProperties() {
  // Code to handle Material Properties button click
}

function handleBoundary() {
  // Code to handle Boundary button click
}

function handleBeso() {
  // Code to handle BESO button click
}

function handleProp() {
  // Code to handle PROP button click
}

function handleOC() {
  // Code to handle OC button click
}

function handleRun() {
  // Code to handle Run button click
}

function handlePause() {
  // Code to handle Pause button click
}

function handleSave() {
  // Code to handle Save button click
}

function handleDesignFile(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    uploadedImage.src = event.target.result;
  };

  reader.readAsDataURL(file);
}
