import ItemList from '../ItemList/ItemList'

function ItemListContainer({greetings}) {
    

    return (
        <div>
            <h2>{greetings}</h2>
            < ItemList />
        </div>
    )
}

export default ItemListContainer
