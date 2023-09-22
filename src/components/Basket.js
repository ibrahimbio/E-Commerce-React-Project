import BasketItem from "./BasketItem"


const Basket = ({basket, onRemoveItem}) => {

    const shoeNode = basket.map((shoe, index) => {
        return <BasketItem key={index} shoe={shoe} onRemoveItem={onRemoveItem}/>
      })


    return (
        <ul>
            {shoeNode}
        </ul>
)}
 
export default Basket;