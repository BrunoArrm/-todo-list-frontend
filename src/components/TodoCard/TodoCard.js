import './TodoCard.css';

function TodoCard({ id_tarefa, descricao, data_realizado, }) {

    return (

        <div className='todoCard' id={id_tarefa}>
            {
                data_realizado ?
                    <input type='checkbox'
                        className='todoCard-done'
                        checked
                    />
                    :
                    <input type='checkbox'
                        className='todoCard-done'
                    />
            }

            <input type='text'
                className='todoCard-input'
                value={descricao} />
            <div className='close'>X</div>

        </div>

    );
}

export default TodoCard;

// Usar type =
// new      : O tipo do card será um que adiciona novos cards
// default  : Será o card do tipo padrão