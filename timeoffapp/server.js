const express = require('express');
const path = require('path');
const externalRequest = require('./middleware');
const port = process.env.PORT || 3035;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, './build')));

app.use('/request', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
});

app.get('/holidays', externalRequest);

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.info(`server is running on port: ${port}`);
    }
});
