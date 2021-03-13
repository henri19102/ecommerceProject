import Sequelize from 'sequelize'
import db from '../config/database.js'

const Product = db.define("items", {
    name: Sequelize.TEXT,
    count: Sequelize.INTEGER,
  });
  
  
     

  export default Product