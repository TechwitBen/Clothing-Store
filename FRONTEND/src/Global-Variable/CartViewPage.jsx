import { useCart } from "./CartContext"


function CartViewPage(){
const {cartItems} = useCart()
return(<>
{cartItems.map((cartItem)=>(
    <div key={cartItem.id}>
        <p>{cartItem.name}</p>
        <p>{cartItem.type}</p>
        <p>{cartItem.price}</p>
    </div>
))}
</>)

}


export default CartViewPage