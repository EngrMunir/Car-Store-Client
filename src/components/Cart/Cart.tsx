// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchCart, setCart } from "../store/cartSlice";
// import axios from "axios";
import { useGetCartQuery } from "@/redux/features/Cart/CartManagementApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";

const Cart = () => {
  const user = useSelector(selectCurrentUser);
  console.log(user.email)
  const { data: cartItems } = useGetCartQuery(undefined);

  // const cart = useSelector((state) => state.cart);
  // const userEmail = "munir@gmail.com";

  // useEffect(() => {
  //   dispatch(fetchCart(userEmail));
  // }, []);

  // const updateQuantity = async (carId, quantity) => {
  //   const response = await axios.put("/api/cart/update", { userEmail, carId, quantity });
  //   dispatch(setCart(response.data));
  // };

  // const removeItem = async (carId) => {
  //   const response = await axios.delete("/api/cart/remove", { data: { userEmail, carId } });
  //   dispatch(setCart(response.data));
  // };

  return (
    <div className="container mx-auto p-6">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* {cart.items.map((item) => (
            <tr key={item.carId._id}>
              <td>{item.carId.name}</td>
              <td>${item.carId.price}</td>
              <td>
                <button onClick={() => updateQuantity(item.carId._id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.carId._id, item.quantity + 1)}>+</button>
              </td>
              <td>${item.carId.price * item.quantity}</td>
              <td><button onClick={() => removeItem(item.carId._id)}>Remove</button></td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
