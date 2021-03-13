import express from "express";
import dotenv from "dotenv";
import db from './config/database.js'
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
import Product from './models/Product.js'
import User from './models/User.js'


const app = express();
dotenv.config();



db
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });


  db.sync({ force: true }).then(() => {
    console.log(`Database & tables created!`);

    Product.bulkCreate([
      { name: "car", count: 3 },
      { name: "table", count: 10 },
      { name: "shirt", count: 55 },
    ])
      .then(function () {
        return Product.findAll();
      })
      .then(function (products) {
        console.log(products);
      });

      User.bulkCreate([
        { name: "Pekka Koivu", email: "juu@mail.fi", password: "joku" },
        { name: "Sini Mänty", email: "juu@mail.fi", password: "joku" },
        { name: "Teppo Seppä", email: "juu@mail.fi", password: "joku" },
        { name: "Ilmari Jaakkola", email: "juu@mail.fi", password: "joku" },
      ])
        .then(function () {
          return User.findAll();
        })
        .then(function (users) {
          console.log(users);
        });
    
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
