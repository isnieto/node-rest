// Nivell 3
// Exercici 1: Afegeixi un endpoint /upload per a pujar un fitxer al servidor de tipus png, jpg o gif i
// retorni un missatge d'error en cas que no coincideixi amb aquestes extensions
const multer = require("multer");

// Setup Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Destination where the files should be stored on disk
    cb(null, "uploads/");
  },
});

const uploadFileFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("gif")
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: uploadFileFilter,
}).single("myFile");


module.exports = upload;

