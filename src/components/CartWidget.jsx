import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';

function CartWidget() {
  const itemsInCart = 34;

  return (
    <div className="cart-widget" style={{ position: 'relative' }}>
      <FaShoppingCart size={30} />
      {itemsInCart > 0 && (
        <Badge pill bg="danger" style={{ position: 'absolute', top: -10, right: -10 }}>
          {itemsInCart}
        </Badge>
      )}
    </div>
  );
}

export default CartWidget;
