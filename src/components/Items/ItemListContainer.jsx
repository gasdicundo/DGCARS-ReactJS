import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
    const {categoryId}= useParams()
    const [items] = useFetch("https://fakestoreapi.com/products?limit=12", categoryId)
    return (
        <Container>
            <Row>
                {
                    items !== null &&
                    <ItemList  items={items} />
                }
            </Row>
        </Container>
    )
}

export default ItemListContainer