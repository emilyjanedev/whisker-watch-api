import multer, { memoryStorage } from "multer";
import path from "path";

// const storage = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, "./public/images");
//   },
//   filename: (_req, file, cb) => {
//     const extname = path.extname(file.originalname);
//     const basename = path.basename(file.originalname, extname);
//     cb(null, `${basename}${extname}`);
//   },
// });
const upload = multer({ storage: memoryStorage() });

export { upload };
