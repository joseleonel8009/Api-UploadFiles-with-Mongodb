const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FilesUploads', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(db => console.log('conectado a la base de datos')).catch(err => console.log(err));