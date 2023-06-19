const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const MangaRouter = require('./route/Manga');

app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.static('.././client/build'));

app.use("/api/Manga", MangaRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '.././client/build/index.html'));
  });

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

