import React, {useState} from 'react';
import ShoeList from '../components/ShoeList';
import product from '../components/Products';
import Basket from '../components/Basket';

import NavBar from '../components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';



const Title = styled.h1`
 background: #12486B;
 margin:0;
 text-align:center;
 padding: 1.5em;
 color: #F1EFEF;
` 

const Welcome = styled.h1`
text-align:center;
`


const ShoeContainer = () => {

const [productList, setProductList ] = useState(product);
// console.log(product);
const [basket, setBasket] = useState([])


const addToBasket = (itemToAdd) => {
    const updatedBasket = [...basket, itemToAdd]
    setBasket(updatedBasket)
  
}

const onRemoveItem = (itemToRemove) => {
    const editedArray = []
    for(let shoe of basket){
        if (shoe.name != itemToRemove.name){
            editedArray.push(shoe)

        }
    }
  setBasket(editedArray)
}

    return ( 
        <>
   
     <Title>Create a first impression with good shoes...</Title>
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Welcome>Welcome to your Favorite Online Shoes Store... </Welcome>}/>
            <Route path='/shoes' element={<ShoeList productList= {productList} addToBasket={addToBasket}/>}/>
            <Route path='/basket' element={<Basket basket={basket} onRemoveItem={onRemoveItem}/>} />
        </Routes>
    </Router>
    </>


     );
}
 
export default ShoeContainer;