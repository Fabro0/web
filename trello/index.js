
const fs = require('fs');
const express=require('express');

const path = require('path');
const app=express();

// window.onload( function(){
    
//     let rawdata = fs.readFileSync('yes.json');
//     let student = JSON.parse(rawdata);
//     console.log("uwu" + student);
    
// }
// )

let rawdata = fs.readFileSync('yes.json');
    let student = JSON.parse(rawdata);
    let materias = [];
    let posiciones = [];
    let colores = [];
    for (let index = 0; index < student["todo"].length; index++) {
        materias.push( student["todo"][index].name);
        posiciones.push( student["todo"][index].posicion);
        colores.push( student["todo"][index].color);

    }
    console.log(materias) 
    console.log(posiciones) 
    console.log(colores) 
app.get('/*', (req, res) => {
    
    
res.sendFile(path.join(__dirname, './index.html'), { title: 'Hey', message: 'Hello there!'});
})


const port =3001;
app.listen(port,()=>{

    


console.log(`App running on ${port}`);
})