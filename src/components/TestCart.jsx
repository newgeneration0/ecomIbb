import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import bg from '../assets/image/bgPics.jpg'
import { FaTrashAlt } from 'react-icons/fa'
import { removeFromCart } from '../redux/CartSlice'



function TestCart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
  return (
    <div>
        {cart.products.length > 0 ?
        <div>
            {cart.products.map((product)=> (
                <div key={product.id}>
                    <img src={product.image} alt=''/> 
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <div>
                        <button>-</button>
                        <p>{product.quantity}</p>
                        <button>+</button>
                    </div>
                    <p>${(product.quantity * product.price).toFixed(2)}</p>

                   <button onClick={()=>dispatch(removeFromCart(product.id))}> <FaTrashAlt />
                    </button>                

</div>
            ))}
<br/>
<br/>
            <div>
            <p>cart total</p>
                <span>{cart.totalQuantity}</span>

                <p>total Price</p>
                <span>{cart.totalPrice.toFixed(2)}</span>
            </div>
        </div>

        : <div>
            <img src={bg} alt='' className='h-96'/>
        </div>}
    </div>
  )
}

export default TestCart