import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom';


function Item({ prod }) {
  return (
    <article className="card">
      <img src={prod.imgUrl} className="card-img-top" alt="img" />
      <div className="card-body">
        <h4 className="card-title>">{prod.title}</h4>
        <p className="card-text">{prod.description}</p>
        <p className="card-text">${prod.price}</p>
        <Link to={`/detalle/${prod.id}`}>
          <button id={prod.id} className="btn btn-primary">
            Ver detalle
          </button>
        </Link>
      </div>
    </article>
  );
}
    
    export default Item