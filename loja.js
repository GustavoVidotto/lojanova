const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Bem-vindo à ShopEasy!'));
app.listen(3000, () => console.log('App está rodando na porta 3000.'));
