import multer from "multer";
import path from "path";

const tempDir = path.join(new URL(import.meta.url).pathname, "../", "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

export default upload;
