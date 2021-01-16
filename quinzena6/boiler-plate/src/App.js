import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'Fazer os trabalhos da faculdade',
        completa: false
      },
      {
        id: Date.now(),
        texto: 'Terminar os trabalhos da labenu quinta-feira.',
        completa: true
      }],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    console.log("ATUALIZANDO");
    const tf = {
      id: this.state.id,
      texto: this.state.texto,
      completa: this.state.completa
    };
    localStorage.setItem("tarefa", JSON.stringify(tf))
  };

  componentDidMount() {
    const tarefaString = localStorage.getItem("tarefa")
    if(tarefaString !== null){
      const tarefaObjeto = JSON.parse(tarefaString);
      this.setState({
        id: tarefaObjeto.id,
        texto: tarefaObjeto.texto,
        completa: tarefaObjeto.completa
      })
    }
  };

  onChangeInput = (event) => {
      this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: novaListaTarefas})
  }

  /* selectTarefa = (id) => {
      const selecionarTarefa = this.state.tarefas.map((tarefa) =>{
        if(tarefa.id === id){
          const novaT = {
            ...tarefa,
            completa: !tarefa.completa
          }
          return novaT
        }else{
          return tarefa
        }
      })
      this.setState({tarefas: selecionarTarefa})
  } */
  excluirTarefa = (id) => {
    const selecionarTarefa = this.state.tarefas.map((tarefa) =>{
      if(tarefa.id === id){
        const novaT = {
          ...tarefa
        }
        var indice
        this.state.tarefas.splice(indice, 1)
        indice = tarefas.indexOf(novaT)
      }
    })
    this.setState({tarefas: selecionarTarefa})
}

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.excluirTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
