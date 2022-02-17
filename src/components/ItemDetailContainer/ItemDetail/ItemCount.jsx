import {useState} from 'react'
import "../../ItemListContainer/Item/Item.css"
 


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)

    const handlerAdd =()=>{
        count < stock ?
        setCount(count +1) 
        :
        alert('stock maximo alcanzado')       
    }

    const handlerRemove =()=>{
        if(count > 1) setCount(count - 1)
    }   


    return (
        <div>
            <p>{count}</p>
            <button onClick={handlerAdd}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> +</span>
            </button>
            <button onClick={handlerRemove}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> -</span>
            </button>
            <button onClick={() => onAdd(count)}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text"> Agregar al carrito</span>
            </button>
            
            
        </div>           
    )
}


export default ItemCount
