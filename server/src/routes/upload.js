// const express = require('express');
// const router = express.Router();

// app.use(express.static('client/build'));

// const path = require('path')
// const multer = require('multer')
// const storage = multer.diskStorage ({
//     destination: (req, file, cb) => {
//         cb(null, 'Uploads')
//     },

//     filename: (req, file, cb) => {
//         console.log(file)
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage: storage})

// router.get('/admin/upload', async (req, res) => {
//     res.render("upload");
// });

// router.post("admin/upload", upload.single('image'), (req, res) => {
//     res.send("Image Uploaded");
// })

// module.exports = router;