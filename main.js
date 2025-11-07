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
  tarefasContainer = document.querySelector(".tarefas-lista"),
  addTarefaBtn = document.querySelector(".add-tarefa-float"),
  addTarefaBtnMobile = document.querySelector(".add-tarefa-float-mobile"),
  addTarefaWrapper = document.querySelector(".add-tarefa-wrapper"),
  addTarefaCloseBtn = document.querySelector(".fechar-tarefa"),
  addTarefaInput = document.querySelector(".descricao-tarefa"),
  addTarefaSubmit = document.querySelector(".add-tarefa-btn");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

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
  "Dezembro",
];

const dayName = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

// Array para armazenar tarefas
let tarefasArr = [];

// Carregar tarefas do localStorage ao iniciar
function carregarTarefas() {
  const tarefasSalvas = localStorage.getItem("tarefas");
  if (tarefasSalvas) {
    tarefasArr = JSON.parse(tarefasSalvas);
  }
}

carregarTarefas();

//funçao para adicionar dias

function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  // Adiciona células vazias para os dias anteriores (sem mostrar números)
  for (let x = day; x > 0; x--) {
    days += `<div class="dia diaAnterior"></div>`;
  }

  // Adiciona os dias do mês atual
  for (let i = 1; i <= lastDate; i++) {
    let temTarefa = false;
    tarefasArr.forEach((tarefaObj) => {
      if (
        tarefaObj.day === i &&
        tarefaObj.month === month + 1 &&
        tarefaObj.year === year
      ) {
        temTarefa = true;
      }
    });

    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      atualizarTarefas(i);

      if (temTarefa) {
        days += `<div class="dia hoje ativo evento">${i}</div>`;
      } else {
        days += `<div class="dia hoje ativo">${i}</div>`;
      }
    } else {
      if (temTarefa) {
        days += `<div class="dia evento">${i}</div>`;
      } else {
        days += `<div class="dia">${i}</div>`;
      }
    }
  }

  // Adiciona células vazias para os próximos dias (sem mostrar números)
  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="dia proximoDia"></div>`;
  }

  daysContainer.innerHTML = days;
  addListner();
}

initCalendar();

//mes anterior

function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

//proximo mes

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");

  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Data inválida");
}

function addListner() {
  const days = document.querySelectorAll(".dia");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      activeDay = Number(e.target.innerHTML);

      getActiveDay(e.target.innerHTML);
      atualizarTarefas(activeDay);

      days.forEach((day) => {
        day.classList.remove("ativo");
      });

      if (e.target.classList.contains("diaAnterior")) {
        prevMonth();

        setTimeout(() => {
          const days = document.querySelectorAll(".dia");

          days.forEach((day) => {
            if (
              !day.classList.contains("diaAnterior") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("ativo");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("proximoDia")) {
        nextMonth();

        setTimeout(() => {
          const days = document.querySelectorAll(".dia");

          days.forEach((day) => {
            if (
              !day.classList.contains("proximoDia") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("ativo");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("ativo");
      }
    });
  });
}

function getActiveDay(date) {
  const day = new Date(year, month, date);
  const dayNameStr = dayName[day.getDay()];

  eventDay.innerHTML = dayNameStr;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
}

// Função para atualizar as tarefas exibidas
function atualizarTarefas(date) {
  let tarefas = "";

  tarefasArr.forEach((tarefaObj) => {
    if (
      date === tarefaObj.day &&
      month + 1 === tarefaObj.month &&
      year === tarefaObj.year
    ) {
      tarefaObj.tarefas.forEach((tarefa, index) => {
        const concluida = tarefa.concluida ? "concluida" : "";
        const checked = tarefa.concluida ? "checked" : "";

        tarefas += `
                    <div class="tarefa ${concluida}" data-index="${index}">
                        <div class="tarefa-conteudo">
                            <input type="checkbox" class="tarefa-checkbox" ${checked}>
                            <span class="tarefa-texto">${tarefa.descricao}</span>
                        </div>
                        <button class="tarefa-excluir" title="Excluir tarefa">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
      });
    }
  });

  if (tarefas === "") {
    tarefas = `<div class="sem-tarefas">
            <p>Nenhuma tarefa para este dia</p>
        </div>`;
  }

  tarefasContainer.innerHTML = tarefas;
  adicionarEventosTarefas();
}

// Função para adicionar eventos aos elementos das tarefas
function adicionarEventosTarefas() {
  // Evento para marcar/desmarcar tarefa como concluída
  const checkboxes = document.querySelectorAll(".tarefa-checkbox");
  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", (e) => {
      marcarTarefaConcluida(index, e.target.checked);
    });
  });

  // Evento para excluir tarefa
  const botoesExcluir = document.querySelectorAll(".tarefa-excluir");
  botoesExcluir.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      excluirTarefa(index);
    });
  });
}

// Função para marcar tarefa como concluída
function marcarTarefaConcluida(index, concluida) {
  tarefasArr.forEach((tarefaObj) => {
    if (
      tarefaObj.day === activeDay &&
      tarefaObj.month === month + 1 &&
      tarefaObj.year === year
    ) {
      tarefaObj.tarefas[index].concluida = concluida;
    }
  });

  salvarTarefas();
  atualizarTarefas(activeDay);
}

// Função para excluir tarefa
function excluirTarefa(index) {
  if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
    tarefasArr.forEach((tarefaObj, objIndex) => {
      if (
        tarefaObj.day === activeDay &&
        tarefaObj.month === month + 1 &&
        tarefaObj.year === year
      ) {
        tarefaObj.tarefas.splice(index, 1);

        // Se não houver mais tarefas neste dia, remove o objeto inteiro
        if (tarefaObj.tarefas.length === 0) {
          tarefasArr.splice(objIndex, 1);
        }
      }
    });

    salvarTarefas();
    atualizarTarefas(activeDay);

    // Reinicializa o calendário para atualizar a marcação visual
    initCalendar();

    // Reaplica a classe ativo no dia selecionado
    setTimeout(() => {
      const days = document.querySelectorAll(".dia");
      days.forEach((day) => {
        if (
          Number(day.innerHTML) === activeDay &&
          !day.classList.contains("diaAnterior") &&
          !day.classList.contains("proximoDia")
        ) {
          day.classList.add("ativo");
        }
      });
    }, 50);
  }
}

// Função para salvar tarefas no localStorage
function salvarTarefas() {
  localStorage.setItem("tarefas", JSON.stringify(tarefasArr));
}

// Eventos do modal de adicionar tarefa
addTarefaBtn.addEventListener("click", () => {
  addTarefaWrapper.classList.toggle("ativo");
});

// Evento para o botão mobile também
if (addTarefaBtnMobile) {
  addTarefaBtnMobile.addEventListener("click", () => {
    addTarefaWrapper.classList.toggle("ativo");
  });
}

addTarefaCloseBtn.addEventListener("click", () => {
  addTarefaWrapper.classList.remove("ativo");
});

document.addEventListener("click", (e) => {
  if (
    e.target !== addTarefaBtn &&
    e.target !== addTarefaBtnMobile &&
    !addTarefaWrapper.contains(e.target)
  ) {
    addTarefaWrapper.classList.remove("ativo");
  }
});

// Limitar caracteres no input de tarefa
addTarefaInput.addEventListener("input", (e) => {
  addTarefaInput.value = addTarefaInput.value.slice(0, 200);
});

// Adicionar tarefa ao pressionar Enter
addTarefaInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTarefaSubmit.click();
  }
});

// Adicionar nova tarefa
addTarefaSubmit.addEventListener("click", () => {
  const descricaoTarefa = addTarefaInput.value.trim();

  if (descricaoTarefa === "") {
    alert("Por favor, insira a descrição da tarefa!");
    return;
  }

  const novaTarefa = {
    descricao: descricaoTarefa,
    concluida: false,
  };

  let tarefaAdicionada = false;

  // Verifica se já existe um objeto de tarefas para este dia
  tarefasArr.forEach((tarefaObj) => {
    if (
      tarefaObj.day === activeDay &&
      tarefaObj.month === month + 1 &&
      tarefaObj.year === year
    ) {
      tarefaObj.tarefas.push(novaTarefa);
      tarefaAdicionada = true;
    }
  });

  // Se não existe, cria um novo objeto de tarefas para este dia
  if (!tarefaAdicionada) {
    tarefasArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      tarefas: [novaTarefa],
    });
  }

  // Limpa o input e fecha o modal
  addTarefaInput.value = "";
  addTarefaWrapper.classList.remove("ativo");

  // Atualiza a interface
  atualizarTarefas(activeDay);
  salvarTarefas();

  // Reinicializa o calendário para atualizar a marcação visual
  initCalendar();

  // Reaplica a classe ativo no dia selecionado
  setTimeout(() => {
    const days = document.querySelectorAll(".dia");
    days.forEach((day) => {
      if (
        Number(day.innerHTML) === activeDay &&
        !day.classList.contains("diaAnterior") &&
        !day.classList.contains("proximoDia")
      ) {
        day.classList.add("ativo");
      }
    });
  }, 50);
});
