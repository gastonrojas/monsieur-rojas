import React from 'react'
import '../Item/Item.css'

function Item({prod}) {

    return (
            <article className='card'>
                            
                <img src={prod.img} className="card-img-top" alt="img" />
                <div className="card-body">
                    <h4 className="card-title>">{prod.name}</h4>
                    <p className="card-text">{prod.desc}</p>
                    <p className="card-text">${prod.price}</p>
                    <button id={prod.id} className="btn btn-primary">Agregar al carrito</button>
                </div>
                
            </article>
        )
    }
    
    export default Item