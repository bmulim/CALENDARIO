const calendar = document.querySelector(".calendario"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".dias"),
    next = document.querySelector(".proximo"),
    prev = document.querySelector(".anterior"),
    gotoBtn = document.querySelector(".ir-btn"),
    todayBtn = document.querySelector(".hoje-btn"),
    dateInput = document.querySelector(".data-input"),
    eventDay = document.querySelector(".d-evento"),
    eventDate = document.querySelector(".dt-evento"),
    eventsContainer = document.querySelector(".eventos"),
    addEventBtn = document.querySelector(".add-evento-btn"),
    addEventWrapper = document.querySelector("add-evento-wrapper"),
    addEventCloseBtn = document.querySelector(".fechar"),
    addEventTitle = document.querySelector(".titulo-evento"),
    addEventFrom = document.querySelector(".hora-inicio"),
    addEventTo = document.querySelector(".hota-termino"),
    addEventSubmit = document.querySelector(".add-event-btn");

let today = new Date();
let activeDay
let month = today.getMonth()
let year = today.getFullYear()

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]
const dayName = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]
const eventsArr = [
    {
        day: 13,
        month: 11,
        year: 2023,
        events: [
            {
            title: "Novo Evento de teste(1)",
            time: "10:00"
            },
            {
            title: "Novo Evento de teste (2)",
            time: "22:00"
            }
        ]
    }
]

//funçao para adicionar dias

function initCalendar(){
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month+1, 0)
    const prevLastDay = new Date(year, month, 0)
        const prevDays = prevLastDay.getDate()
        const lastDate = lastDay.getDate()
        const day = firstDay.getDay()
        const nextDays = 7 - lastDay.getDay() -1

        date.innerHTML = months[month] + " " + year

        let days = ""

        for (let x = day; x>0; x--){
            days += `<div class="dia diaAnterior">${prevDays -x +1}</div>`
        }

        for(let i = 1; i<=lastDate; i++){

            let event =  false;
            eventsArr.forEach((eventObj) => {
                if (eventObj.day === i && eventObj.month === month +1 && eventObj.year === year){
                    event = true
                }
            })

            if (
                i === new Date().getDate() && 
                year === new Date().getFullYear() 
                && month === new Date().getMonth()
                ){
                    activeDay = i
                    getActiveDay(i)

                if (event) {
                    days += `<div class="dia hoje ativo evento">${i}</div>`
                } else {
                    days += `<div class="dia hoje ativo">${i}</div>`
                }
            } else {
                if (event){
                days += `<div class="dia evento">${i}</div>`
                } else {
                    days += `<div class="dia">${i}</div>`
                }
            }
        }

        for(let j = 1; j <= nextDays; j++){
            days += `<div class="dia proximoDia" >${j}</div>`
        }

        daysContainer.innerHTML = days
        addListner()
}

initCalendar()

//mes anterior

function prevMonth() {
    month--;
    if(month < 0) {
        month = 11;
        year--;
    }
    initCalendar()
}

//proximo mes

function nextMonth(){
    month++;
    if(month > 11) {
        month = 0;
        year++;
    }
    initCalendar()
}

prev.addEventListener("click", prevMonth)
next.addEventListener("click", nextMonth)

todayBtn.addEventListener("click", ()=> {
    today = new Date()
    month = today.getMonth()
    year = today.getFullYear()
    initCalendar()
})

dateInput.addEventListener("input", (e) =>{
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "")

    if (dateInput.value.length === 2) {
        dateInput.value += "/"
    }
        if (dateInput.value.length > 7){
            dateInput.value = dateInput.value.slice(0, 7)
        }
            if(e.inputType === "deleteContentBackward"){
                if(dateInput.value.length === 3){
                    dateInput.value = dateInput.value.slice(0, 2)
                }
            }
})

gotoBtn.addEventListener("click", gotoDate);

function gotoDate(){
    const dateArr = dateInput.value.split("/")
    if (date.length === 2) {
        if(dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4){
            month = dateArr[0] -1
            year = dateArr[1]
            initCalendar()
            return
        }
    }
    alert("Data inválida")
}


    

addEventBtn.addEventListener("click", ()=>{
    addEventContainer.classList.toggle("ativo")
})

addEventCloseBtn.addEventListener("click", ()=>{
    addEventContainer.classList.remove("ativo")
})

document.addEventListener("click", (e) => {
    if(e.target !== addEventBtn && !addEventContainer.contains(e.target)) {
        addEventContainer.classList.remove("ativo")
    }
})

addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 100)
})

addEventFrom.addEventListener("input", (e) => {
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "")
    if(addEventFrom.value.length === 2) {
        addEventFrom.value += ":"
    }

    if (addEventFrom.value.length >5) {
        addEventFrom.value = addEventFrom.value.slice(0, 5)
    }
})

addEventTo.addEventListener("input", (e) => {
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "")
    if(addEventTo.value.length === 2) {
        addEventTo.value += ":"
    }

    if (addEventTo.value.length >5) {
        addEventTo.value = addEventTo.value.slice(0, 5)
    }
})

function addListner(){
    const days = document.querySelectorAll(".dia")
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            activeDay = Number(e.target.innerHTML)

            getActiveDay(e.target.innerHTML)

            days.forEach((day) => {
                day.classList.remove("ativo")
            })

            if(e.target.classList.contains("diaAnterior")) {
                prevMonth()

                setTimeout(() => {
                    const days = document.querySelectorAll(".dia")

                    days.forEach((day) => {
                        if(
                            !day.classList.contains("diaAnterior") && 
                            day.innerHTML === e.target.innerHTML
                            ) {
                            day.classLits.add("ativo")
                        }
                    })
                }, 100)
            } else if(e.target.classList.contains("proximoDia")) {
                nextMonth()

                setTimeout(() => {
                    const days = document.querySelectorAll(".dia")

                    days.forEach((day) => {
                        if(
                            !day.classList.contains("proximoDia")
                            && day.innerHTML === e.target.innerHTML
                            ) {
                            day.classLits.add("ativo")
                        }
                    })
                }, 100)
             }
         })
    })
}

function getActiveDay(date) {
    const day = new Date(year, month, date)
    const dayName = day.toString().split("")[0]

    eventDay.innerHTML = dayName
    eventDate.innerHTML = date + " " + months[month] + " " + year
}

function updateEvents(date) {
    let events = "";
    eventsArr.forEach((event) => {
      if (
        date === event.day &&
        month + 1 === event.month &&
        year === event.year
      ) {
        event.events.forEach((event) => {
          events += `<div class="evento">
              <div class="titulo">
                <i class="fas fa-circle"></i>
                <h3 class="titulo-evento">${event.title}</h3>
              </div>
              <div class="hora-evento">
                <span class="hora-evento">${event.time}</span>
              </div>
          </div>`;
        });
      }
    });
    if (events === "") {
      events = `<div class="semEvento">
              <h3>Sem Eventos</h3>
          </div>`;
    }
    eventsContainer.innerHTML = events;
    saveEvents();
  }
  
  addEventBtn.addEventListener("click", () => {
    addEventWrapper.classList.toggle("ativo");
  });
  
  addEventCloseBtn.addEventListener("click", () => {
    addEventWrapper.classList.remove("ativo");
  });
  
  document.addEventListener("click", (e) => {
    if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
      addEventWrapper.classList.remove("ativo");
    }
  });
  
  addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 60);
  });
  
    
  addEventFrom.addEventListener("input", (e) => {
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    if (addEventFrom.value.length === 2) {
      addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
      addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
  });
  
  addEventTo.addEventListener("input", (e) => {
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    if (addEventTo.value.length === 2) {
      addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
      addEventTo.value = addEventTo.value.slice(0, 5);
    }
  });
  
  addEventSubmit.addEventListener("click", () => {
    const eventTitle = addEventTitle.value;
    const eventTimeFrom = addEventFrom.value;
    const eventTimeTo = addEventTo.value;
    if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
      alert("Por favor preencha todos os campos!");
      return;
    }
  
    const timeFromArr = eventTimeFrom.split(":");
    const timeToArr = eventTimeTo.split(":");
    if (
      timeFromArr.length !== 2 ||
      timeToArr.length !== 2 ||
      timeFromArr[0] > 23 ||
      timeFromArr[1] > 59 ||
      timeToArr[0] > 23 ||
      timeToArr[1] > 59
    ) {
      alert("Hora Inválida");
      return;
    }
  
    const timeFrom = convertTime(eventTimeFrom);
    const timeTo = convertTime(eventTimeTo);
  
    let eventExist = false;
    eventsArr.forEach((event) => {
      if (
        event.day === activeDay &&
        event.month === month + 1 &&
        event.year === year
      ) {
        event.events.forEach((event) => {
          if (event.title === eventTitle) {
            eventExist = true;
          }
        });
      }
    });
    if (eventExist) {
      alert("Compromisso já agendado");
      return;
    }
    const newEvent = {
      title: eventTitle,
      time: timeFrom + " - " + timeTo,
    };
    console.log(newEvent);
    console.log(activeDay);
    let eventAdded = false;
    if (eventsArr.length > 0) {
      eventsArr.forEach((item) => {
        if (
          item.day === activeDay &&
          item.month === month + 1 &&
          item.year === year
        ) {
          item.events.push(newEvent);
          eventAdded = true;
        }
      });
    }
  
    if (!eventAdded) {
      eventsArr.push({
        day: activeDay,
        month: month + 1,
        year: year,
        events: [newEvent],
      });
    }
  
    console.log(eventsArr);
    addEventWrapper.classList.remove("ativo");
    addEventTitle.value = "";
    addEventFrom.value = "";
    addEventTo.value = "";
    updateEvents(activeDay);

    const activeDayEl = document.querySelector(".dia.ativo");
    if (!activeDayEl.classList.contains("evento")) {
      activeDayEl.classList.add("evento");
    }
  });
  
  eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("evento")) {
      if (confirm("Quer realmente excluir o evento?")) {
        const eventTitle = e.target.children[0].children[1].innerHTML;
        eventsArr.forEach((event) => {
          if (
            event.day === activeDay &&
            event.month === month + 1 &&
            event.year === year
          ) {
            event.events.forEach((item, index) => {
              if (item.title === eventTitle) {
                event.events.splice(index, 1);
              }
            });

            if (event.events.length === 0) {
              eventsArr.splice(eventsArr.indexOf(event), 1);

              const activeDayEl = document.querySelector(".dia.ativo");
              if (activeDayEl.classList.contains("evento")) {
                activeDayEl.classList.remove("evento");
              }
            }
          }
        });
        updateEvents(activeDay);
      }
    }
  });
  
  function saveEvents() {
    localStorage.setItem("eventos", JSON.stringify(eventsArr));
  }
  
  function getEvents() {

    if (localStorage.getItem("eventos") === null) {
      return;
    }
    eventsArr.push(...JSON.parse(localStorage.getItem("eventos")));
  }
  
  function convertTime(time) {

    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMin = timeArr[1];
    let timeFormat = timeHour >= 12 ? "PM" : "AM";
    timeHour = timeHour % 12 || 12;
    time = timeHour + ":" + timeMin + " " + timeFormat;
    return time;
  }
