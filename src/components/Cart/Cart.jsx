import { useCartContext } from '../../context/cartContext';
import { useEffect } from 'react';

function Cart() {
  const { cartSteps, setStep } = useCartContext();

  useEffect(() => {
    setStep(0);
  }, [setStep]);

  return cartSteps();
}

export default Cart;
