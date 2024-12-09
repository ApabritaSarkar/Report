const multer = require('multer');
const path = require('path');

// Configure Multer storage
const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, 'uploads/'); // Ensure this directory exists
  // },
  destination: function (req, file, cb) {
    if (req.baseUrl.includes("report")) {
      cb(null, "uploads/missing_persons_images");
    } else if (req.baseUrl.includes("object")) {
      cb(null, "uploads/missing_objects_images");
    } else {
      cb(null, "uploads/others"); // Default or fallback folder
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueSuffix);
  },
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, JPG, and PNG are allowed.'), false);
  }
};

// Initialize Multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

module.exports = upload;
