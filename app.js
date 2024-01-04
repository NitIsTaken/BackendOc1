const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://LafuenteM:MotDePasseMongoDB@ocbackend.heqqnoe.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'objet crée !'
    });
});

app.get('/api/stuff',(req, res, next) => {
    const stuff = [
        {
            _id:'objUn',
            title:'Le premier objet !',
            description:'La descriprion du premier objet',
            imageUrl:'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price:'4900',
            userId:'User1'
        },
        {
            _id:'objDeux',
            title:'Le deuxième objet !',
            description:'La descriprion du deuxième objet',
            imageUrl:'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price:'8900',
            userId:'User1'
        },
    ];
    res.status(200).json(stuff);
});

module.exports = app;