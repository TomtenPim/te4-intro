export function game(element) {
    const start = element.querySelector('#start')
    const send = element.querySelector('#send')

    let canClick = true

    let atributes = [0, 0, 0, 0, 0, 0]


    let textarray = ["Felaktigt svar", "Vilken av följande attribut har Simon mest av?", "Vilken av följande attribut har Simon näst mest av?", ]
    let textchoicearray = [ ,"1.Styrka, 2.Smidighet, 3.Tålighet, 4.Intelligens, 5.Visdom, 6.Karisma", "1.Styrka, 2.Smidighet, 3.Tålighet, 4.Intelligens, 5.Visdom, 6.Karisma"]
    let choicearray = [ , 6,6,6,6,6,6,6,]
    let gotoarray = [[3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3]]
    let firsttext = true

    start.addEventListener('click', (e) => {

        e.preventDefault

        const startbutton = document.getElementById("startbutton")
        const answerfield = document.getElementById("answerfield")
        startbutton.style.display = "none"
        answerfield.style.display = "block"

        event(1)
    })

    function roll(atributes) {
        let result = Math.floor(Math.random() * 20) + 1 + atributes
        return result
    }

    function text(id) {
        const storylist = element.querySelector('#storylist')
        const li = document.createElement('li')

        
        if(firsttext == true){
            li.textContent = textarray[id]
            firsttext = false
            
        }
        else{
            li.textContent = textchoicearray[id]
            firsttext=true
        }
        storylist.appendChild(li)
    }

    function choice(answer, goto) {
        canClick = true
        if (answer) {

        }
        event(goto[answer - 1])
    }

    function event(id) {

        console.log(id)
        text(id)
        text(id)
        canClick = true

        if (canClick = true) {
            send.addEventListener('click', (e) => {

                const answer = parseInt(element.querySelector('#answer').value)
                e.preventDefault
                canClick = false

                if (answer <= choicearray[id] && answer >= 1) {
                    choice(answer, [2, 2, 2, 2, 2, 2])
                    console.log("Ett korrekt angivet svar")
                } else {
                    text(0)
                    
                    canClick = true
                }
                element.querySelector('#answer').value = ""
            })
        }
    }
}