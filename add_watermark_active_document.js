// Add watermark to an image in Photoshop
#target photoshop

try {
    // Ensure a document is open
    if (!app.documents.length) {
        throw new Error("Please open a document before running this script.");
    }

    // Access the active document
    var doc = app.activeDocument;

    // Save the initial settings
    var originalUnit = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;

    // Define watermark text and properties
    var watermarkText = "Your Watermark";
    var fontSize = 48;
    var opacity = 50;

    // Add a new text layer
    var textLayer = doc.artLayers.add();
    textLayer.kind = LayerKind.TEXT;
    textLayer.textItem.contents = watermarkText;

    // Set text properties
    textLayer.textItem.size = fontSize;
    textLayer.textItem.position = [doc.width / 2, doc.height / 2]; // Center position
    textLayer.textItem.justification = Justification.CENTER;

    // Adjust opacity
    textLayer.opacity = opacity;

    // Add blending options (optional, for a subtle effect)
    var blendingOptions = textLayer.layerEffects;
    blendingOptions.applyPatternOverlay = true;
    blendingOptions.patternOverlay.scale = 100;
    blendingOptions.patternOverlay.opacity = 20;

    // Restore the original unit settings
    app.preferences.rulerUnits = originalUnit;

    alert("Watermark added successfully!");
} catch (e) {
    alert("Error: " + e.message);
}
