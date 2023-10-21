import React, { useState, useEffect, Children } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import { getData, getDocuments } from '../../services/firebaseService';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
 
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
        
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
           
        });
    }, [categoryId]);
    return (
        <Container>
            <Row>
                {
                    items.length > 0 &&
                    <ItemList items={items} />
                }
            </Row>
        </Container>
    )
}



export default ItemListContainer