import "../../ItemListContainer/Item/Item.css"
import ItemCount from "./ItemCount";
import {useState} from 'react'
import {Link} from 'react-router-dom'


function ItemDetail({product={}}) {

    const [show, setshow] = useState(true)

    const onAdd = () => {
        setshow(false)
    }

    return (
        <div>
            <article className='card'>
                            
                            <img src={product.img} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h4 className="card-title>">{product.name}</h4>
                                <p className="card-text">{product.desc}</p>
                                <p className="card-text">${product.price}</p>
                                {/* <button id={product.id} className="btn btn-primary">Agregar al carrito</button> */}
                                { show ? <ItemCount stock={product.stock} onAdd={onAdd} />
                                 : 
                                 <div>
                                     <Link to='/cart'><button>Ir al carrito</button></Link>
                                     <Link to='/'><button>Seguir comprando</button></Link>
                                </div>}
                            </div>
                            
                        </article>
        </div>
    )
}

export default ItemDetail
