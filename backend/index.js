import express from 'express'
import dotenv from 'dotenv'
import Sequelize from 'sequelize'

const app = express()
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, 
  {host: process.env.DB_HOST, dialect: 'mysql'});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Item = sequelize.define('items', { name: Sequelize.TEXT, count: Sequelize.INTEGER });

  sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Item.bulkCreate([
      { name: 'car', count: 3 },
      { name: 'table', count: 10 },
      { name: 'shirt', count: 55 }
    ]).then(function() {
      return Item.findAll();
    }).then(function(items) {
      console.log(items);
    });
  });

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>')
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})