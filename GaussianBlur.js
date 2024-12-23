// Define the file path for the image to open
var filePath = "/path/to/your/image.jpg";

// Define the file path for the output image
var outputFilePath = "/path/to/your/output_image.jpg";

// Open the image
var fileRef = new File(filePath);
app.open(fileRef);

// Apply Gaussian Blur
var doc = app.activeDocument;
doc.activeLayer.applyGaussianBlur(5); // Apply Gaussian Blur with a radius of 5 pixels

// Save the image
var saveOptions = new JPEGSaveOptions();
saveOptions.quality = 12; // Set the quality of the JPEG

var outputFile = new File(outputFilePath);
doc.saveAs(outputFile, saveOptions, true, Extension.LOWERCASE);

// Close the document without saving changes
doc.close(SaveOptions.DONOTSAVECHANGES);

// Alert to indicate the script has finished
alert("Script completed successfully!");
