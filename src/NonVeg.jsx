import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg(){

    const nonVeg = useSelector((state)=>state.products.nonveg)

    const dispatch = useDispatch()

    const nonVegItems = nonVeg.map((product,index)=>
    (<li key={index}>
        {product.name}-${product.price.toFixed(2)}
        <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
    </li>))
    return(
        <>
        <h1>This is non veg Page</h1>
        <ul>{nonVegItems}</ul>
        </>
    )
}
export default NonVeg;