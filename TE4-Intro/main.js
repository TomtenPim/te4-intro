import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Simon Mikael Ågren</h1>
  </div>
  <div id=pnmr>
    +4673 073 85 80
  </div>
`

setupCounter(document.querySelector('#counter'))
