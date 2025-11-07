# 📋 Instruções de Uso - Sistema de Tarefas

## ✅ Correções Implementadas

O problema do botão "+" foi resolvido! As seguintes correções foram feitas:

1. **Removido código antigo** que causava erros (referências a `addEventBtn`, `addEventContainer`, etc.)
2. **Corrigido bug** na função `gotoDate()` (estava usando `date.length` em vez de `dateArr.length`)
3. **Melhorada atualização visual** do calendário após adicionar/excluir tarefas
4. **Adicionado suporte** para adicionar tarefa pressionando Enter

---

## 🚀 Como Usar

### 1. **Abrir o Calendário**

- Abra o arquivo `index.html` em seu navegador
- O calendário será carregado com o mês atual

### 2. **Selecionar uma Data**

- Clique em qualquer dia do calendário
- As tarefas daquele dia aparecerão no painel direito

### 3. **Adicionar Tarefa**

- Clique no botão **+** (flutuante no canto inferior direito)
- Digite a descrição da tarefa
- Clique em "Adicionar Tarefa" ou pressione **Enter**
- A tarefa será salva automaticamente

### 4. **Marcar Tarefa como Concluída**

- Clique no **checkbox** ao lado da tarefa
- A tarefa ficará riscada e em cinza

### 5. **Excluir Tarefa**

- Clique no ícone de **lixeira** (🗑️) à direita da tarefa
- Confirme a exclusão

### 6. **Navegar pelo Calendário**

- Use as **setas** para ir ao mês anterior/próximo
- Clique em **"Hoje"** para voltar ao dia atual
- Digite **mm/aaaa** e clique em **"Ir"** para ir a um mês específico

---

## 🎨 Indicadores Visuais

- **Dia Atual**: Fonte maior e destaque especial
- **Dia Selecionado**: Fundo colorido com sombra
- **Dias com Tarefas**: Linha colorida abaixo do número
- **Tarefa Concluída**: Texto riscado e acinzentado

---

## 💾 Armazenamento

- Todas as tarefas são salvas no **localStorage** do navegador
- Os dados persistem mesmo após fechar o navegador
- Cada tarefa é vinculada a uma data específica (dia/mês/ano)

---

## 🔧 Funcionalidades Extras

- ✅ Limite de 200 caracteres por tarefa
- ✅ Confirmação antes de excluir
- ✅ Tecla Enter para adicionar tarefa rapidamente
- ✅ Atualização automática dos indicadores visuais
- ✅ Sem necessidade de conexão com internet

---

## 🐛 Problemas Resolvidos

- ✅ Botão "+" agora abre o modal corretamente
- ✅ Tarefas são salvas e carregadas do localStorage
- ✅ Marcadores visuais atualizam corretamente
- ✅ Função de ir para data específica corrigida
- ✅ Erros de console eliminados

---

## 📞 Suporte

Se encontrar algum problema, verifique:

1. Se o arquivo está sendo aberto diretamente no navegador
2. Se o console do navegador (F12) mostra algum erro
3. Se o localStorage está habilitado no navegador

**Criado por Bruno Mulim** 🚀
