const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log('requete recue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message:'la requete est la i guess 2.0'})
    next();
});

app.use ((req, res, next) => {
    console.log('La requete a été envoyée avec succès !');
});

module.exports = app;