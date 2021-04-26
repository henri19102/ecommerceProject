import React from "react";
import { Button, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {useOrders} from '../reducers/OrdersReducer'
import {useUsers} from '../reducers/UserReducer'

const ShoppingCart = () => {

  const {orders} = useOrders()
  const {loggedUser} = useUsers()
  
  const filteredOrders = orders.filter(x=>x.userId === loggedUser.id)

  return (
    <div>
       <Box borderRadius={16} className="box" boxShadow="10">
   {filteredOrders.map((x)=>(
     <p key={x.id} >{x.userId} ja {x.id}</p>
   ))}
      </Box>
    </div>
  )
}

export default ShoppingCart

