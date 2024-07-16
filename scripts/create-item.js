const buttom = document.querySelector(".buttom-add");
const div = document.querySelector(".todo-itens");
const now = new Date();
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();

buttom.addEventListener('click', (event) => {
    console.log("teste")
    event.preventDefault(); 
    let task = document.querySelector("#task").value;
    const p = document.createElement('p');
    const pDayTime = document.createElement('p');
    p.textContent = `${String(task).toUpperCase()}`;
    pDayTime.textContent = `${day} - ${hours}:${minutes}`;
    div.appendChild(p);
    div.appendChild(pDayTime);
    let input = document.querySelector("input");
    input.value = "";
})

