const calendar = document.querySelector(".calendario")
date = document.querySelector(".date")
daysContainer = document.querySelector(".dias")
next = document.querySelector(".proximo")
prev = document.querySelector(".anterior")
gotoBtn = document.querySelector(".ir-btn")
todayBtn = document.querySelector(".hoje-btn")
dateInput = document.querySelector(".data-input")

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

            if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()){
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

const addEventBtn = document.querySelector(".add-evento")
    addEventContainer = document.querySelector(".add-evento-wrapper")
    addEventCloseBtn = document.querySelector(".fechar")
    addEventTitle = document.querySelector(".nome-evento")
    addEventFrom = document.querySelector(".hora-inicio")
    addEventTo = document.querySelector(".hora-termino")

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
/*
function getActiveDay(date){
    const 
}*/
