import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className="cartcontainer">
      <div className="cartnavigation">
        <Link to="/">
          <TiArrowBack />
        </Link>
      </div>
      <div className="cart">
        {cart.map((item) => {
          return (
            <div className="cartcad" key={item.id}>
              <div>
                <img src={` ../images/${item.image}`} alt="cart" />
                <h4>{item.name}</h4>
                <p> price: ksh. {item.price}.000,00</p>
                <p>amount : ksh.{item.price * item.quantity}.000,00</p>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item })}
                >
                  Hapus
                </button>
              </div>
              <div>
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}
                >
                  +
                </button>
                <p> {item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>           
          );
        })}
         <div className="cartcad">
        {total > 0 && <h2>Total : Rp.{total}.000,00</h2>}
        </div>
      </div>
       
      
    </div>
  );
};

export default Cart;
