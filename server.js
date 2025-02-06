// pulling in express to create API server 
const express = require('express');
const app = express();

// middleware that parses JSON in request body
app.use(express.json());    

// creating route that listens for POST requests on root URL
app.post('/', (req, res) => {  
    const acceptHeader = req.get('Accept');

    if (acceptHeader) {
        res.setHeader('Accept', acceptHeader);
    }

    const responseBody = {
        ...req.body
    }

    console.log("test")

    res.json(responseBody)
});
    
const port = process.env.PORT || 3000;
const server = app.listen(port, () => { 
     console.log(`Server is running on port ${port}`)
});

module.exports = server;
