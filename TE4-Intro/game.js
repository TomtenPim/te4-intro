export function game(element) {
    const start = element.querySelector('#start')
    const send = element.querySelector('#send')

    let atributes = [0,0,0,0,0,0]
    let position = 0

    start.addEventListener('click', (e) => {

        e.preventDefault

        const startbutton = document.getElementById("startbutton")
        const answerfield = document.getElementById("answerfield")  
        startbutton.style.display = "none"
        answerfield.style.display = "block"  

        text("Vilken av följande attribut har Simon mest av?")
        text("1.Styrka, 2.Smidighet, 3.Tålighet, 4.Intelligens, 5.Visdom, 6.Karisma")
    })

    send.addEventListener('click', (e) =>{

        const answer = element.querySelector('#answer').value
        e.preventDefault

        if(answer == "1" || answer == "2" || answer == "3" || answer == "4" || answer == "5" || answer == "6"){

            choice (answer,a,a)    

        }
        else{
            text("Felaktigt svar")
        }
    })

    function roll (atributes){
        let result = Math.floor(Math.random()*20) +1 +atributes
        return result        
    }

    function text (String){
        const storylist = element.querySelector('#storylist')
        const li = document.createElement('li')

        li.textContent = String
        storylist.appendChild(li)
    }

    function choice (answer,choiceCount,goto){
        for(let i = 0; i < choiceCount; i++){
            if (answer == i){
                
            }
        }
    }
}