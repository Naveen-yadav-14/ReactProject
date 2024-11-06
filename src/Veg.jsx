import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function Veg(){

    const vegProducts = useSelector(state=>state.products.veg)

    const dispatch = useDispatch()

   const vegItems = vegProducts.map((product,index)=>
                <li key={index}>
                    {product.name}-${product.price}
                    <button style={{color:'blue'}} onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                </li>
    )

    
    return(
        <>
        <h1>This is Veg Page</h1>
        <ul>{vegItems}</ul>
        </>
    )
}
export default Veg;