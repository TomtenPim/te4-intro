import './style.css'
import {game} from './game.js'

let titel = '${titel}'

//förmågorkey [str,dex,con,int,wis,cha]

document.querySelector('#app').innerHTML = `

  <section id=titel>
    <h1>Simon den ${titel} </h1>
  </section> 

  <div id="startbutton">
    <button id="start"> Start </button>
  </div>
  <div id="game">

    <ul id="storylist"><ul>

    <div id="answerfield">
      <input id="answer"></input>
      <button id="send">✔</button> 
    </div>
  </div>
`

game(document.querySelector('#app'))



//+3
//+2
//+1
//+1
//+0
//-1