import { useState } from 'react';
import './Filter.css';

function Filter(props) {

    const [filterValue, setFilterValue] = useState("Todas");

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
        props.filtrar(event.target.value);
    }

  return (
    <div className='filter'>
      <select   name='Filtrar' 
                className={`filtrar ${filterValue}`}
                onChange={handleFilterChange}>
        <option value="T">Todas</option>
        <option value="P">Pendentes</option>
        <option value="R">Concluídas</option>
      </select>
    </div>
  );
}

export default Filter;
