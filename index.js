const express = require('express');
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// connect DB
dbConnect()


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.all("*", (req, res) => {
    res.send("No route found");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

