import React from 'react';
import ShoeItem from "./ShoeItem"
import styled from 'styled-components';


const Products = styled.div`
margin-left: 14em;
`


const ShoeList = ({productList, addToBasket}) => {
    const shoeNodes = productList.map((shoe, index)=> {
        return <ShoeItem key={index} shoe={shoe} addToBasket={addToBasket}/>
    
       
    })
    return (  
        <Products className="shoe-list">
       
        {shoeNodes}
        </Products>
    );
    
}

export default ShoeList;