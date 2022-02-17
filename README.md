# Monsieur Gaston
## _Proyecto React.js Coderhouse_

Monsieur Gaston es un proyecto de ecommerce realizado con React.js durante la cursada de coderhouse, utilizando  [Create React App](https://github.com/facebook/create-react-app).

## Codigo 
Para  iniciar create-react app es requerido instalar previamente Node.

### `npx`
```sh
npx create-react-app my-app
```
Con este metodo cree mi app.


### `npm-start`
Corre mi aplicacion en modo desarrollo. 
Abre http://localhost:3000 para verla en el navegador.
Aqui puedo ver los cambios realizados asi como una leyenda en caso de error.

### `react-router-dom`
Permite el enrutado de mi aplicacion, envolviendo mis componentes a enrutar cde la siguiente manera:
```sh
<BrowserRouter>
    <NavBar />
    <Routes>
        <Route exact path="/" element= root>
        <Route exact path="/1/:query" element= 1....>
        <Route exact path="/2" element=2....>
        ...
    </Routes>
</BrowserRouter>
```
Se coloca en este caso NavBar por fuera de routes ya que este componente debera ser visible en todo momento.
Luego con Routes envolvemos cada Route que definira un camino iniciando con el parametro "/" que sera la raiz y definiendo el componenete a renderizar en element={<Componente 1 />}.
En el path podemos colocar '/1/:query' para poder ir haciendo un enrutado dinamico, para poder renderizar listas segun categoria por ejemplo.

### `Context provider`
 Se creo un contexto CartContext:
 
 ```sh
const cartContext = createContext([]);
 ```
Y para utilizar el context se exporta el mismo:

```sh 
export function useCartContext() {
  return useContext(cartContext);
}
```
Dentro de cartContext.jxs creamos un context provider con el cual envolvemos todos los componentes que deban estar bajo la orbita del contexto. En esta aplicacion el contexto envuelve todos los componenetes, quedando en orden superior a BrowserRouter.

### `Firebase`
Utilizamos el servicio de firebase y sus metodos para poder proveer a la aplicacion desde un servidor de la base de datos necesaria para su funcionamiento.
Con el metodo getDocs() se provee de forma asincrona un listado de elementos que luego son mapeados segun su categoria o en su totalidad en el componente <ItemListContainer>.

Con el metodo getDoc() se provee un unico elemento en <ItemDetailContainer>

Ambos metodos estar provistos en el archivo useProducts.js en la carpeta hooks.

Con el metodo addDoc() creamos un elemento en firebase para guardar la orden realizada por el usuario y se devuelve un id para el mismo. 
Este metodo se encuentra en cartContext.jsx.

### `react-spinners`

```sh
npm install --save react-spinners
```

Para utlizar react-spinners se utiliiza [emotion](https://github.com/emotion-js/emotion) para lo que es requerido agregar un plugin .babelrc por ejemplo:

```sh
{
    "presets": ["@babel/preset-react", "@babel/preset-env"],
    "plugins": ["@emotion"]
}
```
Se creara un renderizado condicional en las llamadas api donde se muestra el spinner seleccionado de react-spinners.

### `Estilo`
Por el momento se esta utlizando css plano para todos los estilos de la aplicacion.
