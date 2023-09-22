import React from 'react';

const ShoeItem = ({shoe, addToBasket}) => {
   
    const handleClick = () => {
      addToBasket(shoe)

    }
   
    return (
        <li>
        <img src={shoe["image"]} alt="photo" />
        <p><b>{shoe.name}</b></p>
        <p>{shoe.color}</p>
        <p>£{shoe.cost}</p>
        <button onClick={handleClick}>Add to Basket</button>
        
        </li>
      );
}
 
export default ShoeItem;