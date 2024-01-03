const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log('requete recue !');
    next();
});

app.use((req, res, next) => {
    
});

app.use((req, res, next) => {
    res.json({message:'la requete est la i guess 2.0'})
});

module.exports = app;