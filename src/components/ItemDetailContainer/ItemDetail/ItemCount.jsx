import {useState} from 'react'

 


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

    // const handlerOnAdd=()=>{
    //     onAdd(count)
    //     // setCount(initial)
    // }

    return (
        <div className="w-50">
            <button className="btn btn-primary" onClick={handlerAdd}>+</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={handlerRemove}>-</button><br />
            <button className="btn btn-outline-primary btn-block" onClick={() => onAdd(count)}>Agregar</button>
        </div>           
    )
}


export default ItemCount
