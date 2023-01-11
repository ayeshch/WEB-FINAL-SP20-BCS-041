const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

app.use(express.json());

const postRoutes = require('./routes/post');
const viewsRoutes = require('./routes/views');
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/api/post', postRoutes);
app.use('/', viewsRoutes)
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});