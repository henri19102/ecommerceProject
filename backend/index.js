const dotenv = require("dotenv") ;
const express = require('express');
const { sequelize } = require('./models')
const productsRouter = require('./routes/products')
const usersRouter = require('./routes/users') 
const ordersRouter = require('./routes/orders') 
const reviewsRouter = require('./routes/reviews') 
const ratingsRouter = require('./routes/ratings') 
const likesRouter = require('./routes/likes')
const path = require('path');

const cors = require('cors')

const app = express();

app.use(cors({exposedHeaders: ['Content-Range']}))

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

app.use(express.static('build'))

app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/reviews', reviewsRouter)
app.use('/api/ratings', ratingsRouter)
app.use('/api/likes', likesRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname+'/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
