import React from 'react'
import {Admin, Resource, ListGuesser} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ProductsList from './ProductsList'
import ProductsCreate from './ProductsCreate'
import ProductsEdit from './ProductsEdit'
import {useProducts} from '../reducers/ProductsReducer'
import { fetchUtils } from 'ra-core';

const AdminPage = () => {
    return (
       <Admin dataProvider={restProvider('http://localhost:3001/api')} >
         <Resource name='products' list={ProductsList} create={ProductsCreate} edit={ProductsEdit} />
         <Resource name='users' list={ListGuesser} />
         <Resource name='orders' list={ListGuesser} />
       </Admin>
    )
}

export default AdminPage
