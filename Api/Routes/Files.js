const router = require('express').Router();
const File = require('../Models/FileModel');

router.get('/', async (req, res) =>{
    try {
        const Files = await File.find({}, {__v: false});
        File.countDocuments({}, (err)=>{
            if(Files == 0){
                console.log(err);
                return res.status(404).send("No hay archivos subidos");
            }
            return res.status(200).json({
                Files
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send('Ha ocurrido un Error, compruebe su conexion a internet');
    }
});

module.exports = router;