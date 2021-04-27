
import crypto from "crypto";
import multer from "multer";
import path from "path";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");
export default {
    tmpFolder,
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename: (request, file, callback) => {
            const filehash = crypto.randomBytes(10).toString("hex");
            const fileName = `${filehash}-${file.originalname}`;

            return callback(null, fileName);
        },
    }),
};