import React from "react";
import { Button, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {useOrders} from '../reducers/OrdersReducer'
import {useUsers} from '../reducers/UserReducer'
import CartProductView from './CartProductView'

const ShoppingCart = () => {

  const {orders} = useOrders()
  const {loggedUser} = useUsers()

  const filteredOrders = orders.filter(x=>x.userId === loggedUser.id)
const joku = filteredOrders.map(x=>x.productId)  
let counts = {};
joku.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
const product = Object.entries(counts)

  return (
    <div>
       <Box borderRadius={16} className="box" boxShadow="10">
   {product.map((x)=>(
     <CartProductView key={x[0]} order={x}  />
   ))}
      </Box>
    </div>
  )
}

export default ShoppingCart

