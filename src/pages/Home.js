import {useState} from 'react';
import Todo from '../components/Todo/Todo';
import TodoCard from '../components/TodoCard/TodoCard';
import './Home.css';

function Home() {

    const [tarefas, setTarefas] = useState([]); // Coleção de objetos, responsável por armazenar o conteúdo dos conteineres

    const updateTarefas = (tarefas) => {  // Função invocada no componente 'Todo' e sua finalidade é atualizar o estado 'Tarefas'.
        setTarefas(tarefas);
    }

  return (
    <main className='home'>
        <Todo
            tarefas={tarefas}
            updateTarefas={updateTarefas}
        />

        {tarefas.map(( tarefa, index) => (

            <TodoCard
                key={index}
                id_tarefa={tarefa.id_tarefa}
                descricao={tarefa.descricao}
                data_realizado={tarefa.data_realizado}
                updateTarefas={updateTarefas}
            />

        ))}

    </main>
  );
}

export default Home;
