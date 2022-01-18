import { dFrutilla, dAlcayota, dCereza, dDurazno, dDamasco, dCiruela, aChico, aGrande, negras, verdesRellenas, verdes, descarozadas, pasta, tomates, pimientos, pate, panqueque, duraznos } from "../assets/img"

export const api = [
    {id: '1', name: 'Mermelada', desc: 'Sabor: Frutilla', price: 400, img: dFrutilla, categoria: 'natural'},
    {id: '2', name: 'Mermelada', desc: 'Sabor: Durazno', price: 400, img: dDurazno, categoria: 'natural'},
    {id: '3', name: 'Mermelada', desc: 'Sabor: Cereza', price: 400, img: dCereza, categoria: 'natural'},
    {id: '4', name: 'Mermelada', desc: 'Sabor: Ciruela', price: 400, img: dCiruela, categoria: 'natural'},
    {id: '5', name: 'Mermelada', desc: 'Sabor: Damasco', price: 400, img: dDamasco, categoria: 'natural'},
    {id: '6', name: 'Mermelada', desc: 'Sabor: Alcayota', price: 400, img: dAlcayota, categoria: 'natural'},
    {id: '7', name: 'Aceitunas', desc: 'Verdes', price: 450, img: verdes, categoria: 'natural'},
    {id: '8', name: 'Aceitunas', desc: 'Negras', price: 450, img: negras, categoria: 'natural'},
    {id: '9', name: 'Aceitunas', desc: 'Rellenas', price: 450, img: verdesRellenas, categoria: 'natural'},
    {id: '10', name: 'Aceitunas', desc: 'descarozadas', price: 450, img: descarozadas, categoria: 'natural'},
    {id: '11', name: 'Aceite de Oliva', desc: 'Chico', price: 550, img: aChico, categoria: 'natural'},
    {id: '12', name: 'Aceite de Oliva', desc: 'Grande', price: 3000, img: aGrande, categoria: 'natural'},
    {id: '13', name: 'Tomates', desc: 'Pelados al Natural', price: 400, img: tomates, categoria: 'natural'},
    {id: '14', name: 'Duraznos', desc: 'Al Natural', price: 400, img: duraznos, categoria: 'natural'},
    {id: '15', name: 'Pimientos', desc: 'Al Natural', price: 400, img: pimientos, categoria: 'natural'},
    {id: '16', name: 'Pasta', desc: 'De Aceitunas', price: 400, img: pasta, categoria: 'natural'},
    {id: '17', name: 'Panqueques', desc: 'De Tigo Sarraceno', price: 400, img: panqueque, categoria: 'organico'},
    {id: '18', name: 'Almendras', desc: 'Act. y Deshdidr.', price: 400, img: pate, categoria: 'organico'},  
    {id: '19', name: 'Nueces', desc: 'Act. y Deshdidr.', price: 400, img: pate, categoria: 'organico'},  
    {id: '20', name: 'Galletas raw', desc: 'Tomate y mijo', price: 400, img: pate, categoria: 'organico'},  
    {id: '21', name: 'Humus', desc: 'De Garbanzos', price: 400, img: pate, categoria: 'organico'},  
    {id: '22', name: 'Pate', desc: 'De Girazol', price: 400, img: pate, categoria: 'organico'},  
    {id: '23', name: 'Queso de caju', desc: 'Untable', price: 480, img: pate, categoria: 'organico'},  
    {id: '24', name: 'Tomates', desc: 'Secos', price: 500, img: pate, categoria: 'organico'},  
]

export const getFetch = new Promise ((resolve, rejecct) =>{
    setTimeout(()=>{
        resolve(api)
        
    }, 2000)
})