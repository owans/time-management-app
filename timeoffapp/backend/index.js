const express = require('express');
const path = require('path');
// const moment = require('moment');
const port = 3310;

const app = express();

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/', (req, res,next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    next();
})


app.get('/request', (req, res, next) =>{
    res.json();
    next();
})
// app.get('/current', (req, res) => {
//     res.json({currentTime: moment().format('hh:mm:ss: a').toString()
// })
// });

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.info(`we have an express powered server running on port: ${port}`);
    }
});