import React from 'react'


function Item({prod}) {
console.log(prod)
    return (
        <div>
            <div> {prod.map(prods => <div key={prods.id}>

                    <div className="card m-4" >
                        <img src={prods.img} className="card-img-top" alt="img" />
                        <div className="card-body">
                            <h4 className="card-title>">${prods.name}</h4>
                            <p className="card-text">${prods.desc}</p>
                            <p className="card-text">${prods.price}</p>
                            <button id={prods.id} className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>   
            </div>)} </div>
        </div>
    )
}

export default Item
