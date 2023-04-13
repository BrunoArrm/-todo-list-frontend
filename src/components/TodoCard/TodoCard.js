import './TodoCard.css';

function TodoCard({ id_tarefa, descricao, data_realizado, }) {

    return (

        <div className='todoCard' id={id_tarefa}>
            {
                data_realizado ?
                    <input  type='checkbox'
                            className='todoCard-done'
                            checked
                    />
                    :
                    <input type='checkbox'
                        className='todoCard-done'
                    />
            }

            <input  type='text'
                    className='todoCard-input'
                    value={descricao}
            />
            
            <div className='todoCardClose'/>

        </div>

    );
}

export default TodoCard;