async function genereaza() {
    const raspuns = await fetch("https://randomuser.me/api/");
    const data = await raspuns.json()
    const {gender, email, name, dob, picture} = data.results[0]
    document.getElementById("name").innerText = name.title + ' ' + name.first + ' ' + name.last
    document.getElementById("gender").innerText = gender
    document.getElementById("e-mail").innerText = email
    document.getElementById("age").innerText = dob.age
    document.getElementById("picture").src = picture.medium
}
