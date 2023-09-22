import styled from 'styled-components';


const Image = styled.img`
max-width: 20%;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
justify-content: center;

`

const BasketItem = ({shoe, onRemoveItem}) => {

  const handleClick = () => {
    onRemoveItem(shoe)
  }

    return ( 

      <li>
      <Image src={shoe["image"]} alt="photo"></Image>
      <p><b>{shoe.name}</b></p>
      <p>{shoe.color}</p>
      <p>£{shoe.cost}</p>
      <button onClick={handleClick}>Remove Item</button>
      
      </li>
       
     );
}
 
export default BasketItem;