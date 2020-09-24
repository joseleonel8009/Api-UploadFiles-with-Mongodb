const express = require('express');
const app = express();
const homeApi = require('./Api/Routes/Home');

const port = process.env.PORT || 3000;

// Routes require
const uploadFileRoute = require('./Api/Routes/UploadFile');
const FilesRoute = require('./Api/Routes/Files');

// DB
require('./Api/DB/Connection');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', homeApi);
app.use('/UploadFile', uploadFileRoute);
app.use('/FilesUploads', FilesRoute);

// Server
app.listen(port, ()=>{
    console.log('Server is on port: ', port);
});