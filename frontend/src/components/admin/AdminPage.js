import React from 'react'
import {Admin, Resource, ListGuesser, Button} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ProductsList from './products/ProductsList'
import ProductsCreate from './products/ProductsCreate'
import ProductsEdit from './products/ProductsEdit'
import UsersList from './users/UsersList'
import UsersEdit from './users/UsersEdit'
import UsersCreate from './users/UsersCreate'
import {useUsers} from '../reducers/UserReducer'
import { useHistory, useLocation } from "react-router-dom";



const AdminPage = () => {
  const {user} = useUsers();
  const history = useHistory();
  if(!user) {
    history.push("")
  } 
    return (
      
       <Admin dataProvider={restProvider('http://localhost:3001/api')} >
         <Resource name='products' list={ProductsList} create={ProductsCreate} edit={ProductsEdit} />
         <Resource name='users' list={UsersList} create={UsersCreate} edit={UsersEdit}/>
         <Resource name='orders' list={ListGuesser} />
         <Resource name='reviews' list={ListGuesser} />
         <Resource name='ratings' list={ListGuesser} />
       </Admin>
    )
}

export default AdminPage
