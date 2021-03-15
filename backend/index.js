const express = require('express');
const dotenv = require("dotenv") ;
const { sequelize } = require('./models')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users') 

const app = express();
app.use(express.json())
dotenv.config();

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });


app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
