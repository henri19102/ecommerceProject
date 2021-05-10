import React from 'react'
import {Create, SimpleForm, TextInput, NumberInput, AutocompleteInput} from 'react-admin'


const ProductsCreate = (props) => {
const category = [ 
{ id: 'vaatteet', name: 'vaatteet' },
{ id: 'urheilu', name: 'urheilu' },
{ id: 'elintarvike', name: 'elintarvike' },]

    return (
        <Create title='Add product' {...props} >
            <SimpleForm>
                <TextInput source='name' />
                <NumberInput source='price' step={1} />
                <NumberInput source='count' step={1} />
                <AutocompleteInput source="category" choices={category} />
            </SimpleForm>
        </Create>
    )
}

export default ProductsCreate
