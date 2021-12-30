import React, {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/Apimock'
import Item from '../Item/Item'



function ItemList() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch
        .then(data => setProductos(data))
        .catch(err => console.log('error'))
        .finally(() => setLoading(false))
    }, [])



    return (
        <div>
            { loading ? <h3>Cargando...</h3> : <Item prod={productos}/>}  
        </div>
    )
}

export default ItemList
