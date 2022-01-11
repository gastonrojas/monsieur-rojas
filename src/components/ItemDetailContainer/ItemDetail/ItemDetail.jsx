import "../../ItemListContainer/Item/Item.css"


function ItemDetail({product={}}) {


    return (
        <div>
            <article className='card'>
                            
                            <img src={product.img} className="card-img-top" alt="img" />
                            <div className="card-body">
                                <h4 className="card-title>">{product.name}</h4>
                                <p className="card-text">{product.desc}</p>
                                <p className="card-text">${product.price}</p>
                                <button id={product.id} className="btn btn-primary">Agregar al carrito</button>
                            </div>
                            
                        </article>
        </div>
    )
}

export default ItemDetail
