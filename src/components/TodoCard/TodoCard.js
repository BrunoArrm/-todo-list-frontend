import { useState } from 'react';
import './TodoCard.css';

function TodoCard({ id_tarefa, descricao, data_realizado }) {

    const [isChecked, setIsChecked] = useState(data_realizado);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }

    return (
        <div className='todoCard' id={id_tarefa}>
            <input  type='checkbox'
                    className='todoCard-done'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
            />
            <input  type='text'
                    className={isChecked ? 'todoCard-input marcado' : 'todoCard-input'}
                    value={descricao}
                    readOnly={!isChecked}
            />
            <div className='todoCardClose'/>
        </div>
    );
}

export default TodoCard;
