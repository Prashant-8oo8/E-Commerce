const multer = require("multer");
const fs = require("fs");
const path = require("path");

const allowedCategories = ["avatars", "products", "banners"]; // define your allowed categories

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const category = req.body.category;
        if (!allowedCategories.includes(category)) {
            return cb(new Error("Invalid category"), null);
        }

        const dir = path.join(__dirname, "public", category);
        fs.mkdirSync(dir, { recursive: true });
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + Date.now() + ext);
    }
});

const upload = multer({ storage });

module.exports = upload;
