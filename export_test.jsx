#target illustrator
// Export ACTIVE doc's artboards EXACTLY as-is, to the mounted folder for inspection.
(function () {
  try {
    var doc = app.activeDocument;
    var opts = new PDFSaveOptions();
    opts.saveMultipleArtboards = true;
    opts.artboardRange = "1-" + doc.artboards.length;
    opts.preserveEditability = false;
    doc.saveAs(new File("/Users/deliaakbari/Documents/Claude/Projects/my360wealth/RIZE_asis.pdf"), opts);
    alert("Exported " + doc.artboards.length + " artboards AS-IS\ndoc: " + doc.name);
  } catch (e) { alert("err: " + e); }
})();
