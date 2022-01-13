

export const api = [
    {id: '1', name: 'Mermelada', desc: 'Sabor: Frutilla', price: 400, img: 'img/dFrutilla.jpg', categoria: 'natural'},
    {id: '2', name: 'Mermelada', desc: 'Sabor: Durazno', price: 400, img: 'img/dDurazno.jpg', categoria: 'natural'},
    {id: '3', name: 'Mermelada', desc: 'Sabor: Cereza', price: 400, img: 'img/dCereza.jpg', categoria: 'natural'},
    {id: '4', name: 'Mermelada', desc: 'Sabor: Ciruela', price: 400, img: 'img/dCiruela.jpg', categoria: 'natural'},
    {id: '5', name: 'Mermelada', desc: 'Sabor: Damasco', price: 400, img: 'img/dDamasco.jpg', categoria: 'natural'},
    {id: '6', name: 'Mermelada', desc: 'Sabor: Alcayota', price: 400, img: 'img/dAlcayota.jpg', categoria: 'natural'},
    {id: '7', name: 'Aceitunas', desc: 'Verdes', price: 450, img: 'img/verdes.jpg', categoria: 'natural'},
    {id: '8', name: 'Aceitunas', desc: 'Negras', price: 450, img: 'img/negras.jpg', categoria: 'natural'},
    {id: '9', name: 'Aceitunas', desc: 'Rellenas', price: 450, img: 'img/rellenas.jpg', categoria: 'natural'},
    {id: '10', name: 'Aceitunas', desc: 'descarozadas', price: 450, img: 'img/descarozadas.jpg', categoria: 'natural'},
    {id: '11', name: 'Aceite de Oliva', desc: 'Chico', price: 550, img: 'img/aChico.jpg', categoria: 'natural'},
    {id: '12', name: 'Aceite de Oliva', desc: 'Grande', price: 3000, img: 'img/aGrande.jpg', categoria: 'natural'},
    {id: '13', name: 'Tomates', desc: 'Pelados al Natural', price: 400, img: 'img/tomates.jpg', categoria: 'natural'},
    {id: '14', name: 'Duraznos', desc: 'Al Natural', price: 400, img: 'img/duraznos.jpg', categoria: 'natural'},
    {id: '15', name: 'Panqueques', desc: 'De Tigo Sarraceno', price: 400, img: 'img/panqueque.jpg', categoria: 'organico'},
    {id: '16', name: 'Almendras', desc: 'Act. y Deshdidr.', price: 400, img: 'img/pate.jpg', categoria: 'organico'},  
    {id: '17', name: 'Nueces', desc: 'Act. y Deshdidr.', price: 400, img: 'img/pate.jpg', categoria: 'organico'},  
    {id: '18', name: 'Galletas raw', desc: 'Tomate y mijo', price: 400, img: 'img/pate.jpg', categoria: 'organico'},  
    {id: '19', name: 'Humus', desc: 'De Garbanzos', price: 400, img: 'img/pate.jpg', categoria: 'organico'},  
    {id: '20', name: 'Pate', desc: 'De Girazol', price: 400, img: 'img/pate.jpg', categoria: 'organico'},  
    {id: '21', name: 'Queso de caju', desc: 'Untable', price: 480, img: 'img/pate.jpg', categoria: 'organico'},  
    {id: '22', name: 'Tomates', desc: 'Secos', price: 500, img: 'img/pate.jpg', categoria: 'organico'},  
]

export const getFetch = new Promise ((resolve, rejecct) =>{
    setTimeout(()=>{
        resolve(api)
        
    }, 2000)
})