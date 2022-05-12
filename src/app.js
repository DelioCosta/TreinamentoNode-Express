const express = require('express');
//const ProductsController = require('/controllers/products.js');

const app = express();

const porta = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.get('/', (req, res) =>{
//     res.send(req.query);
// });

app.get("/products", (req, res) => {
    res.json([]);
});

app.post("/products", (req, res) => {
    res.json(req.body);
});  

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
  
    res.json({
      id,
      name: `Produto ${id}`,
      price: 300,
    });
});
  
// app.put('/products/:id', function (req, res) {
//     res.json(req.body);
// });

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
  
    res.json({
      id,
      ...(req.body || {}),
    });
  });
  

// app.delete('/products/:id', function (req, res) {    
// res.send('DELETADO')
// })

app.delete('/products/:id', function (req, res) {

    res.status(204).send('');
});

app.get('/:name?', (req, res) =>{
    const {name} = req.params;

    res.send(`Hello ${name || "world!"}`);
});

app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}`);
});