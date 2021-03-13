import Sequelize from 'sequelize'
import db from '../config/database.js'

const User = db.define("users", {
    name: Sequelize.TEXT,
    email: Sequelize.TEXT,
    password: Sequelize.TEXT,
  });
  
  // db.sync({ force: true }).then(() => {
  //   console.log(`Database & tables created!`);
  
    
  // });



  export default User