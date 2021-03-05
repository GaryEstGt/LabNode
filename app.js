const express = require('express')
const app = express()
const port = 3000

app.get('/verifica',(req,res,next)=>{
  var texto=req.query.texto || '';
  var respuesta='';
  var espera=["null"]
  var correcto=false;
  if(texto!='') {
    var letras=texto.split("")
    var contador=0;
    for (const letra in letras){
      console.log(letra)
      if(letras[letra]=="{"){
        espera[contador]="}"
        contador=contador+1
      }
      if(letras[letra]=="("){
        espera[contador]=")"
        contador=contador+1
      }
      if(letras[letra]=="¿"){
        espera[contador]="?"
        contador=contador+1
      }
      if(letras[letra]=="["){
        espera[contador]="]"
        contador=contador+1
      }
      if(letras[letra]=="¡"){
        espera[contador]="!"
        contador=contador+1
      }
      if(letras[letra]=="<"){
        espera[contador]=">"
        contador=contador+1
      }
      if(letras[letra]=="}"){
        console.log(espera.indexOf("}"))
        if(espera.indexOf("}")>-1){
          var i = espera.indexOf("}"); 
          if ( i !== -1 ) {
          espera.splice( i, 1 );
          contador=contador-1
          }
        }
      }
      if(letras[letra]==")"){
        if(espera.indexOf(")")>-1){
          var i = espera.indexOf(")"); 
          if ( i !== -1 ) {
          espera.splice( i, 1 );
          contador=contador-1
          }
        }
      }
      if(letras[letra]=="?"){
        if(espera.indexOf("?")>-1){
          var i = espera.indexOf("?"); 
          if ( i !== -1 ) {
          espera.splice( i, 1 );
          contador=contador-1
          }
        }
      }
      if(letras[letra]=="]"){
        if(espera.indexOf("]")>-1){
          var i = espera.indexOf("]"); 
          if ( i !== -1 ) {
          espera.splice( i, 1 );
          contador=contador-1
          }
        }
      }
      if(letras[letra]=="!"){
        if(espera.indexOf("!")>-1){
          var i = espera.indexOf("!"); 
          if ( i !== -1 ) {
          espera.splice( i, 1 );
          contador=contador-1
          }
        }
      }
      if(letras[letra]==">"){
        if(espera.indexOf(">")>-1){
          var i = espera.indexOf(">"); 
          if ( i !== -1 ) {
          espera.splice( i, 1 );
          contador=contador-1
          }
        }
      }
    }
  }
  else {respuesta='no llegó nada :('}

  if(espera.length>0) {respuesta='error falta cerrar algún simbolo'}
  else {respuesta='todo bien todo correcto'}
  console.log(espera)
  res.send(respuesta)
})

app.post('/hello/:name', (req, res) => {
  var name=req.params.name
  res.send("Hola "+name)
})

app.listen(port, () => {
  console.log(`Laboratorio 1 listening at http://localhost:${port}`)
})