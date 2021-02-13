const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
// const apiRouter = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/build', express.static(path.resolve(__dirname , '../build')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});


app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });

module.exports = app;