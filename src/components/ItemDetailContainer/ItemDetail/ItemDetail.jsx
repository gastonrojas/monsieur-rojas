import "../../ItemListContainer/Item/Item.css"
import ItemCount from "./ItemCount";
import {useState} from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from "../../../context/cartContext";


function ItemDetail({product={}}) {

    const { addToCart } = useCartContext()

    const [show, setshow] = useState(true)

    const onAdd = (count) => {
        setshow(false)
        addToCart({...product, cantidad: count})
    }

    return (
      <div className="detail-container">

        <article className="card">
          <img src={product.imgUrl} alt="img" />
          <div className="card-body">
            <h4 className="card-title>">{product.title}</h4>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
            {show ? (
              <ItemCount stock={product.stock} onAdd={onAdd} />
            ) : (
              <div>
                <Link to="/cart">
                  <button>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Ir al carrito</span>
                  </button>
                </Link>
                <Link to="/">
                <button>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Seguir comprando</span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </article>
      </div>
    );
}

export default ItemDetail
