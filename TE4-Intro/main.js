import './style.css'
import {game} from './game.js'

let titel = '${titel}'

//förmågorkey [str,dex,con,int,wis,cha]

document.querySelector('#app').innerHTML = `

  <section id=titel>
    <h1>Simon den ${titel} </h1>
  </section> 

  <div id=startknapp>
    <button onclick="" id=start> Start </button>
  </div>
  <div id=spel>

    <ul id="storylist"><ul>

    <div id=answerfield>
      <input id=svar></input>
      <button id=skicka>✔</button> 
    </div>
  </div>

  <script>
  function started(){
    console.log("du kom hit i alla fall")
    var start = document.getElementById("startknapp")
    var svar = document.getElementById("svarsfält")
  
    start.style.display = "none"
    svar.style.display = "block"  
  }
  </script>
`

game(document.querySelector('#app'))



//+3
//+2
//+1
//+1
//+0
//-1