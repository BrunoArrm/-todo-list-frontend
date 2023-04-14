import {useState, useEffect} from 'react';
import Todo from '../../components/Todo/Todo';
import TodoCard from '../../components/TodoCard/TodoCard';
import './Home.css';
import Filter from '../../components/Filter/Filter';
import { GET, POST } from '../../components/API/api';

function Home() {
    
    const [tarefas, setTarefas] = useState([]); // Coleção de objetos, responsável por armazenar o conteúdo dos conteineres
    
    useEffect( () => {
        const carregarDados = async () => {
            setTarefas(await GET());
        }
        carregarDados();
    },[] );
    
    const updateTarefas = async (tarefas) => {  // Função invocada no componente 'Todo' e sua finalidade é atualizar o estado 'Tarefas'.
        console.log('lista de tarefas: ', tarefas);
    };
    
    const createTarefas = async (tarefas) => {
        console.log(tarefas);
        await POST(tarefas);
        setTarefas(await GET());
    };

  return (
      <main className='home'>
        <h1>Meu ToDo List</h1>
        <Todo
            tarefas={tarefas}
            updateTarefas={createTarefas}
        />

        <Filter />

        {tarefas.map(( tarefa, index) => (
            
            <TodoCard
            key={index}
            id_tarefa={tarefa.id_tarefa}
            descricao={tarefa.descricao}
            executado={tarefa.executado}
            updateTarefas={updateTarefas}
            deleteTarefas={setTarefas}
            />
            
            ))}

    </main>
  );
}

export default Home;