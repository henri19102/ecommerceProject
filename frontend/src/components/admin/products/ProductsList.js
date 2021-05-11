import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const ProductsList = (props) => {
    return (
        <List {...props} >
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <TextField source='price' />
                <TextField source='count' />
                <TextField source='category' />
                <DateField source='createdAt' />
                <DateField source='updatedAt' />
                <EditButton basePath='' />
                <DeleteButton basePath='' />
            </Datagrid>
        </List>
    )
}

export default ProductsList
