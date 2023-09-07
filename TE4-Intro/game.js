export function game(element) {
    const start = element.querySelector('#start')
    const svar = element.querySelector('#svar').value
    const skicka = element.querySelector('#skicka')

    var förmågor = [0,0,0,0,0,0]

    start.addEventListener('click', (e) => {

        e.preventDefault
        console.log(roll(förmågor[5]))
        
        text("Vilken dag är det idag?")
    })


    function roll (förmåga){
        let result = Math.floor(Math.random()*20) +1 +förmåga
        return result        
    }

    function text (String){
        const storylist = element.querySelector('#storylist')
        const li = document.createElement('li')

        li.textContent = String
        storylist.appendChild(li)
    }
}