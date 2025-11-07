<div align="center">

# 📅 Calendário Interativo com Sistema de Tarefas

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />

*Um calendário moderno e elegante com gerenciamento de tarefas diárias*

[🇧🇷 Português](#português) • [🇺🇸 English](#english)

---

</div>

## Português

### 📖 Sobre o Projeto

Um calendário interativo desenvolvido com HTML, CSS e JavaScript puro, que permite gerenciar tarefas diárias de forma intuitiva e elegante. Todas as informações são armazenadas localmente no navegador, garantindo privacidade e funcionamento offline.

### ✨ Características Principais

#### 🎨 Interface Moderna
- Design responsivo que se adapta a qualquer dispositivo
- Animações suaves e transições fluidas
- Tema elegante com gradientes e sombras
- Indicadores visuais para dias com tarefas

#### 📋 Gerenciamento de Tarefas
- ✅ Adicionar tarefas a qualquer data
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas com confirmação
- ✅ Visualização organizada por dia
- ✅ Contador visual de tarefas no calendário

#### 🎯 Navegação Intuitiva
- Navegação por mês (anterior/próximo)
- Botão "Hoje" para retornar à data atual
- Campo de busca para ir direto a um mês/ano
- Destaque automático do dia atual

#### 💾 Armazenamento Local
- Todas as tarefas salvas no `localStorage`
- Dados persistem após fechar o navegador
- Sem necessidade de servidor ou internet
- Privacidade total dos seus dados

### 🚀 Como Usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/bmulim/CALENDARIO.git
   cd CALENDARIO
   ```

2. **Abra o projeto**
   
   Simplesmente abra o arquivo `index.html` em seu navegador preferido.

3. **Comece a usar**
   - Clique em qualquer data para ver/adicionar tarefas
   - Use o botão **+** para adicionar novas tarefas
   - Marque o checkbox para completar uma tarefa
   - Clique no ícone de lixeira para excluir

### 🎨 Funcionalidades Visuais

| Elemento | Descrição |
|----------|-----------|
| 🟦 **Dia Atual** | Fonte aumentada e marcador especial |
| 🟨 **Dia Selecionado** | Fundo azul com efeito de brilho |
| 🟩 **Dias com Tarefas** | Linha colorida na parte inferior |
| ⚪ **Tarefa Concluída** | Texto riscado e acinzentado |

### 📱 Responsividade

#### Desktop (>1024px)
- Layout em duas colunas (calendário | tarefas)
- Visualização completa de todas as funcionalidades

#### Tablet (768px - 1024px)
- Layout em coluna única
- Elementos otimizados para toque

#### Mobile (<768px)
- Interface compacta e funcional
- Botões e textos redimensionados
- Navegação simplificada

### ⚡ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com:
  - Flexbox & Grid Layout
  - Animações e Transições
  - Media Queries para responsividade
  - Variáveis CSS customizadas
- **JavaScript (Vanilla)** - Lógica de programação:
  - Manipulação do DOM
  - LocalStorage API
  - Event Listeners
  - Funções assíncronas

### 🎯 Atalhos do Teclado

| Tecla | Ação |
|-------|------|
| `Enter` | Adicionar tarefa (quando o campo está focado) |

### 🔄 Estrutura de Dados

```javascript
{
  day: 7,
  month: 11,
  year: 2025,
  tarefas: [
    {
      descricao: "Minha tarefa importante",
      concluida: false
    }
  ]
}
```

### 📂 Estrutura do Projeto

```
CALENDARIO/
├── index.html          # Estrutura HTML
├── style.css           # Estilos e animações
├── main.js             # Lógica do calendário e tarefas
├── README.md           # Documentação
├── INSTRUCOES.md      # Guia de uso
└── events.js          # (Não utilizado)
```

### 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma Branch para sua Feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a Branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

### 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

### 👨‍💻 Autor

**Bruno Mulim**

- GitHub: [@bmulim](https://github.com/bmulim)

### 🙏 Agradecimentos

- Font Awesome pela biblioteca de ícones
- Google Fonts pelas fontes utilizadas
- Comunidade open source por inspiração

---

<div align="center">

**[⬆ Voltar ao topo](#-calendário-interativo-com-sistema-de-tarefas)**

</div>

---

## English

### 📖 About The Project

An interactive calendar developed with pure HTML, CSS, and JavaScript that allows you to manage daily tasks intuitively and elegantly. All information is stored locally in the browser, ensuring privacy and offline functionality.

### ✨ Key Features

#### 🎨 Modern Interface
- Responsive design that adapts to any device
- Smooth animations and fluid transitions
- Elegant theme with gradients and shadows
- Visual indicators for days with tasks

#### 📋 Task Management
- ✅ Add tasks to any date
- ✅ Mark tasks as completed
- ✅ Delete tasks with confirmation
- ✅ Organized view by day
- ✅ Visual task counter on calendar

#### 🎯 Intuitive Navigation
- Month navigation (previous/next)
- "Today" button to return to current date
- Search field to go directly to a month/year
- Automatic highlight of current day

#### 💾 Local Storage
- All tasks saved in `localStorage`
- Data persists after closing browser
- No server or internet required
- Complete privacy of your data

### 🚀 How To Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/bmulim/CALENDARIO.git
   cd CALENDARIO
   ```

2. **Open the project**
   
   Simply open the `index.html` file in your preferred browser.

3. **Start using**
   - Click any date to view/add tasks
   - Use the **+** button to add new tasks
   - Check the checkbox to complete a task
   - Click the trash icon to delete

### 🎨 Visual Features

| Element | Description |
|---------|-------------|
| 🟦 **Current Day** | Enlarged font and special marker |
| 🟨 **Selected Day** | Blue background with glow effect |
| 🟩 **Days with Tasks** | Colored line at the bottom |
| ⚪ **Completed Task** | Strikethrough text and grayed out |

### 📱 Responsiveness

#### Desktop (>1024px)
- Two-column layout (calendar | tasks)
- Full view of all features

#### Tablet (768px - 1024px)
- Single column layout
- Touch-optimized elements

#### Mobile (<768px)
- Compact and functional interface
- Resized buttons and text
- Simplified navigation

### ⚡ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with:
  - Flexbox & Grid Layout
  - Animations and Transitions
  - Media Queries for responsiveness
  - Custom CSS Variables
- **JavaScript (Vanilla)** - Programming logic:
  - DOM Manipulation
  - LocalStorage API
  - Event Listeners
  - Asynchronous functions

### 🎯 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Add task (when field is focused) |

### 🔄 Data Structure

```javascript
{
  day: 7,
  month: 11,
  year: 2025,
  tasks: [
    {
      description: "My important task",
      completed: false
    }
  ]
}
```

### 📂 Project Structure

```
CALENDARIO/
├── index.html          # HTML structure
├── style.css           # Styles and animations
├── main.js             # Calendar and tasks logic
├── README.md           # Documentation
├── INSTRUCOES.md      # User guide
└── events.js          # (Not used)
```

### 🤝 Contributing

Contributions are always welcome! Feel free to:

1. Fork the project
2. Create a Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

### 📝 License

This project is under the MIT license. See the `LICENSE` file for more details.

### 👨‍💻 Author

**Bruno Mulim**

- GitHub: [@bmulim](https://github.com/bmulim)

### 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for the fonts used
- Open source community for inspiration

---

<div align="center">

**[⬆ Back to top](#-calendário-interativo-com-sistema-de-tarefas)**

Made with ❤️ by Bruno Mulim

</div>
