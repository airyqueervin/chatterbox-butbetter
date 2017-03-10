const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
// serve up public folder on endpoint /
app.use(express.static(path.join(__dirname, '../public')));
// serve up bundles folder on enpoint /bundles
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));
app.use('/client', express )

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.get('/', function (req, res, next) {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Better app listening on port ${port}!`);
});