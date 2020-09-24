const router = require('express').Router();

router.get('/', (req, res)=>{
    return res.send('Api Home');
});

module.exports = router;