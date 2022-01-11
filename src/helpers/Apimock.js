

export const api = [
    {id: '1', name: 'Mermelada', desc: 'Sabor: Frutilla', price: 400, img: 'img/dFrutilla.jpg'},
    {id: '2', name: 'Mermelada', desc: 'Sabor: Durazno', price: 400, img: 'img/dDurazno.jpg'},
    {id: '3', name: 'Mermelada', desc: 'Sabor: Cereza', price: 400, img: 'img/dCereza.jpg'},
    {id: '4', name: 'Mermelada', desc: 'Sabor: Ciruela', price: 400, img: 'img/dCiruela.jpg'},
    {id: '5', name: 'Mermelada', desc: 'Sabor: Damasco', price: 400, img: 'img/dDamasco.jpg'},
    {id: '6', name: 'Mermelada', desc: 'Sabor: Alcayota', price: 400, img: 'img/dAlcayota.jpg'},
    {id: '7', name: 'Aceitunas', desc: 'Verdes', price: 450, img: 'img/verdes.jpg'},
    {id: '8', name: 'Aceitunas', desc: 'Negras', price: 450, img: 'img/negras.jpg'},
    {id: '9', name: 'Aceitunas', desc: 'Rellenas', price: 450, img: 'img/rellenas.jpg'},
    {id: '10', name: 'Aceitunas', desc: 'descarozadas', price: 450, img: 'img/descarozadas.jpg'},
    {id: '11', name: 'Aceite de Oliva', desc: 'Chico', price: 550, img: 'img/aChico.jpg'},
    {id: '12', name: 'Aceite de Oliva', desc: 'Grande', price: 3000, img: 'img/aGrande.jpg'},
    {id: '13', name: 'Tomates', desc: 'Pelados al Natural', price: 400, img: 'img/tomates.jpg'},
    {id: '14', name: 'Duraznos', desc: 'Al Natural', price: 400, img: 'img/duraznos.jpg'},
    {id: '15', name: 'Panqueques', desc: 'De Tigo Sarraceno', price: 400, img: 'img/panqueque.jpg'},
    {id: '16', name: 'Pate', desc: 'De Girasol', price: 400, img: 'img/pate.jpg'},  
]

export const getFetch = new Promise ((resolve, rejecct) =>{
    setTimeout(()=>{
        resolve(api)
        
    }, 2000)
})