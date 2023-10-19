import { useSelector } from 'react-redux';

function Cart() {
  //subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <ul>
      <li>Cart ({cartItems.length} items)</li>
    </ul>
  );
}

export default Cart;