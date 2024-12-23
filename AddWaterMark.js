// Define the file path for the image to open
var filePath = "/path/to/your/image.jpg";

// Define the file path for the output image
var outputFilePath = "/path/to/your/output_image.jpg";

// Open the image
var fileRef = new File(filePath);
app.open(fileRef);

// Get a reference to the active document
var doc = app.activeDocument;

// Create a new text layer for the watermark
var textLayer = doc.artLayers.add();
textLayer.kind = LayerKind.TEXT;
textLayer.textItem.contents = "© 2024 MyName"; // Your watermark text here

// Set the font size and position of the text
textLayer.textItem.size = 30; // Font size
textLayer.textItem.position = [doc.width - 200, doc.height - 50]; // Position (bottom-right corner)

// Set the font color (white in this case)
var textColor = new SolidColor();
textColor.rgb.red = 255;
textColor.rgb.green = 255;
textColor.rgb.blue = 255;
textLayer.textItem.color = textColor;

// Set the blending mode and opacity of the watermark layer
textLayer.blendMode = BlendMode.NORMAL;
textLayer.opacity = 50; // 50% opacity

// Save the image
var saveOptions = new JPEGSaveOptions();
saveOptions.quality = 12; // Set the quality of the JPEG

var outputFile = new File(outputFilePath);
doc.saveAs(outputFile, saveOptions, true, Extension.LOWERCASE);

// Close the document without saving changes
doc.close(SaveOptions.DONOTSAVECHANGES);

// Alert to indicate the script has finished
alert("Script completed successfully!");
