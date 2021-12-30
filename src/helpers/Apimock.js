

const Products = [
    {id: 1, name: 'Mermelada', desc: 'Sabor: Frutilla', price: 400, img: '../assets/img/dFrutilla.jpg'},
    {id: 2, name: 'Mermelada', desc: 'Sabor: Durazno', price: 400, img: './assets/dDurazno.jpg'},
    {id: 3, name: 'Mermelada', desc: 'Sabor: Cereza', price: 400, img: './assets/dCereza.jpg'},
    {id: 4, name: 'Mermelada', desc: 'Sabor: Ciruela', price: 400, img: './assets/dCiruela.jpg'},
    {id: 5, name: 'Mermelada', desc: 'Sabor: Damasco', price: 400, img: './assets/dDamasco.jpg'},
    {id: 6, name: 'Mermelada', desc: 'Sabor: Alcayota', price: 400, img: './assets/dAlcayota.jpg'},
    {id: 7, name: 'Aceitunas', desc: 'Verdes', price: 450, img: './assets/verdes.jpg'},
    {id: 8, name: 'Aceitunas', desc: 'Negras', price: 450, img: './assets/negras.jpg'},
    {id: 9, name: 'Aceitunas', desc: 'Rellenas', price: 450, img: './assets/rellenas.jpg'},
    {id: 10, name: 'Aceitunas', desc: 'descarozadas', price: 450, img: './assets/descarozadas.jpg'},
    {id: 11, name: 'Aceite de Oliva', desc: 'Chico', price: 550, img: './assets/aChico.jpg'},
    {id: 12, name: 'Aceite de Oliva', desc: 'Grande', price: 3000, img: './assets/aGrande.jpg'},
    {id: 13, name: 'Tomates', desc: 'Pelados al Natural', price: 400, img: './assets/tomates.jpg'},
    {id: 14, name: 'Duraznos', desc: 'Al Natural', price: 400, img: './assets/duraznos.jpg'},
    {id: 15, name: 'Panqueques', desc: 'De Tigo Sarraceno', price: 400, img: './assets/panqueque.jpg'},
    {id: 16, name: 'Pate', desc: 'De Girasol', price: 400, img: './assets/pate.jpg'},  
]

export const getFetch = new Promise ((resolve, rejecct) =>{
    setTimeout(()=>{
        resolve(Products)
        
    }, 2000)
})