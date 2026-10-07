const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const products = require('./data');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    res.json(product);
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});