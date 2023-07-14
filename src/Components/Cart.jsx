import React, { useState, useContext } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cartitems from './Cartitems';
import { CartContext } from '../context/addtoCart/context';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false); // Cart visibility state

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  
  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-dark position-relative"
      >
        <GiShoppingCart size={30} color='orange' />
        {state.cart?.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Cart
            <button
              className="ms-4 btn btn-outline-dark"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart?.map((product, index) => (
            <Cartitems key={index} product={product} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}