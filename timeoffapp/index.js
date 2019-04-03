const express = require('express');
const path = require('path');
const port = 3310;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, './build')));
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './build/index.html'));
})


app.get('/request', (req, res) =>{
    res.sendFile(path.join(__dirname, './build/index.html'))
    res.json();
})

app.listen(port, (err) => {
    if(err){
        console.log(err)
    }else{
        console.info(`we have an express powered server running on port: ${port}`);
    }
});
