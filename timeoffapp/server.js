
const express = require('express');
const path = require('path');
const externalRequest = require('./middleware');
const port = process.env.PORT || 3032;

const app = express();

app.use('/', express.static(path.join(__dirname, './public')));

app.get('/request', (req, res) => {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });


app.get('/holidays', externalRequest);

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.info(`server is running on port: ${port}`);
    }
});
