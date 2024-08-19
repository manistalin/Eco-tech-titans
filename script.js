// Trigger file upload when the Google Lens button is clicked
const uploadButton = document.getElementById('uploadButton');
const uploadInput = document.getElementById('upload');

uploadButton.addEventListener('click', () => {
    uploadInput.click();
});

uploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Simulate image recognition and display results
        alert("Image uploaded. Recognizing crop...");
        displayResults("Recognized Crop");  // Simulate recognized crop
    }
});

function displayResults(cropName) {
    const results = document.getElementById('results');
    results.innerHTML = `
        <h2>${cropName}</h2>
        <p><strong>Water Footprint Level:</strong> 3000 liters/ton</p>
        <p><strong>Soil Moisture:</strong> 45%</p>
        <p><strong>Weather:</strong> Sunny, 28°C</p>
    `;
}


