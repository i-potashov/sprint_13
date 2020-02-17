const express = require('express');

const app = express();
const path = require('path');
const routes = require('./routes');

const { PORT: PORT_DEV } = require('./config');

const { PORT = PORT_DEV } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
