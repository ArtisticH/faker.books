const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 8081);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 대기 중`);
});
