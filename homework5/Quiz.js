const intrebare={
    question: "Cine este presedintele Romaniei acum?" ,
    options: [ "Klaus Johannis" , "Vladimir Putin" , "Benny Hill" ],
    answer: 0
};

function Quiz() {
    let buttonElements = []
    const handler=(event)=>{
        const answer=event.target;
        const synth=new Tone.Synth().toDestination();
        buttonElements.forEach(function (el){
            el.disabled=true
        })
        if(intrebare.options[intrebare.answer] === answer.innerText){
            answer.classList.add("true") 
            synth.triggerAttackRelease("G7")

        }
        else {
            answer.classList.add("false")
            synth.triggerAttackRelease("C4", "8n");
        }
    }
    const h1=document.createElement("h1")
    h1.innerText=intrebare.question
    document.getElementById("quiz-container").appendChild(h1)
    
    const h2=document.createElement("h2")
    h2.innerText="Raspunsul tau:"
    document.getElementById("quiz-container").appendChild(h2)
    intrebare.options.forEach((option)=>{
        const container=document.createElement("div")
        document.getElementById("quiz-container").appendChild(container)
        const button=document.createElement("button")
        button.classList.add("raspuns")
        button.innerText=option;
        button.addEventListener("click", handler)
        container.appendChild(button) 
        buttonElements.push(button)
        const presidentAvatar=document.createElement("img")
        presidentAvatar.src="images/" +option + ".jpg"
        presidentAvatar.classList.add("presidentAvatar")
        container.appendChild(presidentAvatar)
       
    })
}

Quiz();

