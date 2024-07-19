document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button-add");
  const div = document.querySelector(".tasks-container");
  const completeContainer = document.querySelector(".tasks-container-complete");
  const hamburguer = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const now = new Date();
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let listOfTasks = GetList("pastTasks") || [];
  let completeTasks = GetList("completeTasks") || [];
  let path = window.location.pathname;

  function DayOfTheWeek(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }

  function SaveList(arrayName, array) {
    localStorage.setItem(arrayName, JSON.stringify(array));
  }

  hamburguer.addEventListener("click", () => {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        sidebar.classList.add('close');
        hamburguer.textContent = '☰';
        hamburguer.style.color = "black";
    } else {
        sidebar.classList.remove('close');
        sidebar.classList.add('open');
        hamburguer.textContent = '✖';
        hamburguer.style.color = "white";
    }
});

  function GetList(arrayName) {
    return JSON.parse(localStorage.getItem(arrayName));
  }
  if (path === "/planify.html") {
    button.addEventListener("click", (event) => {
      let task = document.querySelector("#task").value;
      if (String(task).length == 0) {
        alert("Please write a task");
      } else {
        event.preventDefault();
        const divTask = document.createElement("div");
        divTask.className = "divtask";
        const p = document.createElement("p");
        p.className = "task";
        const pDayTime = document.createElement("p");
        pDayTime.className = "task-time";
        p.textContent = `${String(task).toUpperCase()}`;
        pDayTime.textContent = `${DayOfTheWeek(day)} - ${hours}:${minutes}`;
        divTask.appendChild(pDayTime);
        divTask.appendChild(p);
        div.appendChild(divTask);
        listOfTasks.push(task);
        SaveList("pastTasks", listOfTasks);
        let input = document.querySelector("input");
        input.value = "";

        p.addEventListener("click", (event) => {
          event.preventDefault();
          divTask.style.display = "none";
          completeTasks.push(task);
          SaveList("completeTasks", completeTasks);
          const index = listOfTasks.indexOf(task);
          if (index > -1) {
            // only splice array when item is found
            listOfTasks.splice(index, 1); // 2nd parameter means remove one item only
            SaveList("pastTasks", listOfTasks);
          }
        });
      }
    });

    if (listOfTasks.length > 0) {
      listOfTasks.forEach((task) => {
        const divTask = document.createElement("div");
        divTask.className = "divtask";
        const p = document.createElement("p");
        p.className = "task";
        const pDayTime = document.createElement("p");
        pDayTime.className = "task-time";
        p.textContent = `${String(task).toUpperCase()}`;
        pDayTime.textContent = `${DayOfTheWeek(day)} - ${hours}:${minutes}`;
        divTask.appendChild(pDayTime);
        divTask.appendChild(p);
        div.appendChild(divTask);

        p.addEventListener("click", (event) => {
          event.preventDefault();
          divTask.style.display = "none";
          completeTasks.push(task);
          SaveList("completeTasks", completeTasks);
          const index = listOfTasks.indexOf(task);
          if (index > -1) {
            // only splice array when item is found
            listOfTasks.splice(index, 1); // 2nd parameter means remove one item only
            SaveList("pastTasks", listOfTasks);
          }
        });
      });
    }
  }
  // Adicionar tarefas salvas ao carregar a página

  if (path === "/planify-complete.html") {
    if (completeTasks.length > 0) {
      completeTasks.forEach((task) => {
        const divTask = document.createElement("div");
        divTask.className = "divtask";
        const p = document.createElement("p");
        p.className = "task complete-task";
        const pDayTime = document.createElement("p");
        pDayTime.className = "task-time";
        p.textContent = `${String(task).toUpperCase()}`;
        pDayTime.textContent = `${DayOfTheWeek(day)} - ${hours}:${minutes}`;
        divTask.appendChild(pDayTime);
        divTask.appendChild(p);
        completeContainer.appendChild(divTask);

        p.addEventListener("click", (event) => {
          event.preventDefault();
          divTask.style.display = "none";
          const index = completeTasks.indexOf(task);
          if (index > -1) {
            // only splice array when item is found
            completeTasks.splice(index, 1); // 2nd parameter means remove one item only
            SaveList("completeTasks", completeTasks);
          }
        });
      });
    }
  }
});
