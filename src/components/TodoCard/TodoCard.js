import { useEffect, useState } from 'react';
import { GET, DELETE, PUT } from '../../components/API/api';
import './TodoCard.css';

function TodoCard({ id_tarefa, descricao, executado, deleteTarefas }) {

    const [inputValue, setInputValue] = useState(descricao); // Estado que armazena o valor do input no card
    const [prevInputValue, setPrevInputValue] = useState(""); // Caso clique para editar o card, a descrição anterior é gravada e poderá ser retornada em caso de desistência
    const [isChecked, setIsChecked] = useState("checked"); // Estado da marcação como concluído
    const [removido, setRemovido] = useState("");

    // Bloco que trata da função para marcar concluído no card
    useEffect(() => {
        if (executado === 1) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [executado])

    const handleCheckboxChange = async (event) => {
        setIsChecked(event.target.checked);
        let IDcheck;
        if (isChecked === true) {
            IDcheck = 0;
            console.log(descricao, "pendente!!");
        } else {
            IDcheck = 1;
            console.log(descricao, "concluído!");
        }
        await PUT({ descricao: inputValue, executado: IDcheck, ordem: 0, id_tarefa: id_tarefa });
    }

    // Bloco de trata das funções para editar o card
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const editMode = () => {
        setPrevInputValue(inputValue);
    }

    const handlePressKey = async (event) => {

        if (event.keyCode === 13) {
            let IDcheck;
            if (isChecked === true) {
                IDcheck = 1;
                console.log(descricao, "pendente!!");
            } else {
                IDcheck = 0;
                console.log(descricao, "concluído!");
            }
            await PUT({ descricao: inputValue, executado: IDcheck, ordem: 0, id_tarefa: id_tarefa });
        } else if (event.keyCode === 27 || event.keyCode === 9) {
            setInputValue(prevInputValue);
        }

    }

        const handleBlur = async () => {
            let IDcheck;
            if (isChecked === true) {
                IDcheck = 1;
                console.log(descricao, "pendente!!");
            } else {
                IDcheck = 0;
                console.log(descricao, "concluído!");
            }
            await PUT({ descricao: inputValue, executado: IDcheck, ordem: 0, id_tarefa: id_tarefa });
        }

        // Bloco que trata da função de deletar o card
        const handleDeleteItem = async (id_tarefa) => {
            console.log('Deletando card: ', { id_tarefa: id_tarefa });
            deleteAnimation();
            await DELETE({ id_tarefa: id_tarefa });
        }

        // Bloco que controla a animação após deletar um card
        const deleteAnimation = () => {
            setRemovido("removendo");
            setTimeout(() => {
                setRemovido("removido");
            }, 300);
        }

        return (
            <div className={`todoCard ${removido}`} id={id_tarefa}>
                <input type='checkbox'
                    className='todoCard-done'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <input type='text'
                    className={isChecked ? 'todoCard-input marcado' : 'todoCard-input'}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onKeyDown={handlePressKey}
                    onClick={editMode}
                />
                <div className='todoCardClose' onClick={() => handleDeleteItem(id_tarefa)} />
            </div>
        );
    }

    export default TodoCard;
