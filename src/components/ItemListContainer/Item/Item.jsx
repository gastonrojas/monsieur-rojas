import React from 'react'
import '../Item/Item.css'
import { Link } from 'react-router-dom';


function Item({ prod }) {
  return (
    <article className="card">
      <img src={prod.imgUrl} alt="img" />
      <div className="card-body">
        <div className="card-body-text">
          <h4 className="card-title>">{prod.title}</h4>
          <p className="card-text">{prod.description}</p>
        </div>
        <div className="card-bottom">
          <p className="card-price">${prod.price}</p>
          <Link to={`/detail/${prod.id}`}>
        
            <button id={prod.id}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> Ver detalle</span>
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
    
    export default Item