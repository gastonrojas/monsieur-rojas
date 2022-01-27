import "../../ItemListContainer/Item/Item.css"
import ItemCount from "./ItemCount";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from "../../../context/cartContext";


function ItemDetail({product={}}) {

    const {agregarAlCarrito } = useCartContext()

    const [show, setshow] = useState(true)

    const onAdd = (count) => {
        setshow(false)
        agregarAlCarrito({...product, cantidad: count})
    }

    return (
      <div>
        <article className="card">
          <img src={product.imgUrl} className="card-img-top" alt="img" />
          <div className="card-body">
            <h4 className="card-title>">{product.title}</h4>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
            {show ? (
              <ItemCount stock={product.stock} onAdd={onAdd} />
            ) : (
              <div>
                <Link to="/cart">
                  <button>Ir al carrito</button>
                </Link>
                <Link to="/">
                  <button>Seguir comprando</button>
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    );
}

export default ItemDetail
