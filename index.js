const express = require('express');
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');


const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('./routes/user.route.js')

app.use(cors());
app.use(express.json());

// connect DB
dbConnect()

// all user
app.use("/api/user", userRoute)

app.get('/', (req, res) => {
  
})

app.all("*", (req, res) => {
    res.send("No route found");
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

