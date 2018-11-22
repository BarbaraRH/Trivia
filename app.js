function save(){
    let primerElemento = document.getElementById("NOM").value;
    if (primerElemento == ""){
      alert("No has ingresado tu nombre")
    }else{
      document.getElementById("comienza_div").style.display = "block";
      document.getElementById("nombre_jugador").innerHTML = `¡Hola  ${primerElemento}!<br>`;    
    }
  } 
  
function Gatitos() {
    document.getElementById("DIVgatos1").style.display = "block";
    document.getElementById("DIVperros1").style.display = "none";
    document.getElementById("main").style.display = "none";
    
}

function gatosSiguiente1(){
    document.getElementById("DIVgatos2").style.display = "block";
    document.getElementById("DIVgatos1").style.display = "none";
    console.log('funciona')
} 

function gatosSiguiente2(){
    document.getElementById("DIVgatos3").style.display = "block";
    document.getElementById("DIVgatos2").style.display = "none";
    console.log('funciona')
}

function gatosSiguiente3(){
    document.getElementById("DIVgatos4").style.display = "block";
    document.getElementById("DIVgatos3").style.display = "none";
    console.log('funciona')
}  


function Perritos() {
    document.getElementById("DIVperros1").style.display = "block";
    document.getElementById("DIVgatos1").style.display = "none";
    document.getElementById("main").style.display = "none";
}

function perrosSiguiente1(){
    document.getElementById("DIVperros2").style.display = "block";
    document.getElementById("DIVperros1").style.display = "none";
    console.log('funciona')
}  
function perrosSiguiente2(){
    document.getElementById("DIVperros3").style.display = "block";
    document.getElementById("DIVperros2").style.display = "none";
    console.log('funciona')
} 
function perrosSiguiente3(){
    document.getElementById("DIVperros4").style.display = "block";
    document.getElementById("DIVperros3").style.display = "none";
    console.log('funciona')
} 
  
  
function dog(){
    let puntaje = 0;
    let pregunta1 = document.trivia_perros1.question1.value;
    let pregunta2 = document.trivia_perros2.question2.value;
    let pregunta3 = document.trivia_perros3.question3.value;
    let pregunta4 = document.trivia_perros4.question4.value;
    if (pregunta1 === "Border Collie"){
        puntaje++;
    }
    if (pregunta2 === "2 porciones"){
        puntaje++;
    }
    if (pregunta3 === "Chocolate"){
        puntaje++;
    }
    if (pregunta4 === "29"){
        puntaje++;
    }
    console.log(puntaje);
    document.getElementById("DIVperros4").innerHTML = `Tu puntaje fue de ${puntaje}/4. <br><br><br>
    <button type="boton" value="refrescar" onclick="javascript:window.location.reload();">Volver a jugar</button>`;
    // alert("¡Guau lo lograste!")
    // alert(`Las respuestas tuyas son: \n 1- ${pregunta1} \n 2- ${pregunta2} \n 3- ${pregunta3} \n 4- ${pregunta4}`)
    // alert("Las respuestas corectas son: \n 1- Border Collie \n 2- Dos porciones \n 3- Chocolate \n 4- 29 años")
  }
  
  
//   function cat(){
//     let pregunta1 = document.trivia_gatos.question1.value;
//     let pregunta2 = document.trivia_gatos.question2.value;
//     let pregunta3 = document.trivia_gatos.question3.value;
//     let pregunta4 = document.trivia_gatos.question4.value;
//     alert("¡Miau lo lograste!")
//     alert(`Las respuestas tuyas son: \n 1- ${pregunta1} \n 2- ${pregunta2} \n 3- ${pregunta3} \n 4- ${pregunta4}`)
//     alert("Las respuestas corectas son: \n 1- 1 \n 2- Es un signo de dominancia \n 3- Para comunicarse con las personas \n 4- Como regalo")
//   }
  
function cat() {
    let puntaje = 0;
    let pregunta1 = document.trivia_gatos1.question1.value;
    let pregunta2 = document.trivia_gatos2.question2.value;
    let pregunta3 = document.trivia_gatos3.question3.value;
    let pregunta4 = document.trivia_gatos4.question4.value;
    if (pregunta1 === "1"){
        puntaje++
    }
    if (pregunta2 === "Es un signo de dominancia"){
        puntaje++
    }
    if (pregunta3 === "Para comunicarse con las personas"){
        puntaje++
    }
    if (pregunta4 === "Como regalo"){
        puntaje++
    }
    console.log(puntaje);
    document.getElementById("DIVgatos4").innerHTML = `Tu puntaje fue de ${puntaje}/4. <br><br><br>
    <button type="boton" value="refrescar" onclick="javascript:window.location.reload();">Volver a jugar</button>`

}  
  