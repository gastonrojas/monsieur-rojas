import { useState } from 'react';
import './cartForm.css';

function CartForm({ placeOrder }) {
  const [dataForm, setDataForm] = useState({
    email: '',
    name: '',
    phone: '',
  });
  const [isInvalid, setIsInvalid] = useState({
    name: '',
    phone: '',
    email: '',

  });
  const [error, setError] = useState(null)
  // const [isSubmitted, setIsSubmitted] = useState(false)

  function validateName() {
    if (dataForm.name.length < 2 || dataForm.name.length > 20) {
      setIsInvalid({...isInvalid, name: true });
      return;
    } else {
      setIsInvalid({...isInvalid, name: false });
    }
  }

  function validatePhone() {
    if (dataForm.phone.length < 9 || dataForm.phone.length > 15) {
      setIsInvalid({...isInvalid, phone: true });
      return;
    } else {
      setIsInvalid({...isInvalid, phone: false });
    }
  }

  function validateEmail() {
    let at = dataForm.email.indexOf('@');
    let dot = dataForm.email.indexOf('.');

    if (at === -1 || dot === -1 || at < 1 || dot - at < 2) {
      setIsInvalid({...isInvalid, email: true });
      return;
    } else {
      setIsInvalid({...isInvalid, email: false });
    }
  }

  function handleChange({ target: { name, value } }) {
    setDataForm({
      ...dataForm,
      [name]: value,
    });

    if (name === 'name') {
      validateName();
    }
    if (name === 'phone') {
      validatePhone();
    }
    if (name === 'email') {
      validateEmail();
    }

    setError(null)
  }

  function handleOnSubmit(e) {
    e.preventDefault()
      // setIsSubmitted(true)
      if (Object.values(isInvalid).every((val) => val === false)){
        return placeOrder(e, dataForm)
      } else{

        setError('Hubo un problema...') 

      }
  }

  return (
    <div className='cart-checkout'>
      <form onSubmit={handleOnSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
            value={dataForm.name}
          />
          <p className={isInvalid.name ? 'is-invalid' : 'is-valid'}>
            Min. 2 y max. 20 caracteres
          </p>
        </label>
        <br />
        <label>
          Telefono:
          <input
            type="number"
            name="phone"
            placeholder="tel"
            onChange={handleChange}
            value={dataForm.phone}
          />
          <p className={isInvalid.phone ? 'is-invalid' : 'is-valid'}>
            Min. 9 y max. 15 caracteres
          </p>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            value={dataForm.email}
          />
          <p className={isInvalid.email ? 'is-invalid' : 'is-valid'}>
            Ingrese un email valido.
          </p>
        </label>
        <br />
        {error && <h3> {error} </h3>}
        <button type='submit'>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Generar orden</span>
            </button>
      </form>
    </div>
  );
}

export default CartForm;
