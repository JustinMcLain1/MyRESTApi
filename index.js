const express = require('express');
const app = express();
const PORT = 8080;

//this is the middleware
app.use( express.json() )

app.listen(PORT, 
    () => console.log(`ITS ALIVE!!! on https://localhost:${PORT}`))

//tshirt uri, then our job to handle requests 
//pass callback function as second argument
app.get('/tshirt', (req,res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
});

//id is a route param - captures dyanmic values
//in the url
//express doesnt parse JSON in the body by default
app.post('/tshirt/:id', (req,res) => {

    const { id } = req.params;
    const { logo } = req.body; // this is not parsed
    //make middleware to parse JSON

    if( !logo ) {
        res.status(418).send({message: 'we need a logo!'})
    }

    res.send({ message: `👕 with your ${logo} and ID of ${id}`,
    });

});