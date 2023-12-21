import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // Write your code here
});

export default multer({ storage });
