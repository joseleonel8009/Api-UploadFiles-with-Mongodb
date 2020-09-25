const router = require('express').Router();
const Upload = require('express-fileupload');
const File = require('../Models/FileModel');

router.use(Upload());

router.post('/', async(req, res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send({ message: 'No files Uploades' });
    }
    var file = req.files.file;
    var filename = file.name;
    const fileUp = new File({
        name: filename
    });
    await fileUp.save();
    res.send({ message: 'File Received', filename: filename });
});

module.exports = router;