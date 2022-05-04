const express = require('express');
const app = express();

const products = require('./routes/products.js');

app.use('/products', products);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
	console.log('Server listening on port ', port);
});

app.get('/',(req, res)=>{
	res.send('Welcome to my server!');
});
