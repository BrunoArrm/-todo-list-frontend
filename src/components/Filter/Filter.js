import { useState } from 'react';
import './Filter.css';

function Filter() {

    const [filterValue, setFilterValue] = useState("Todas");

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    }

  return (
    <div className='filter'>
      <select   name='Filtrar' 
                className={`filtrar ${filterValue}`}
                onChange={handleFilterChange}>
        <option selected>Todas</option>
        <option>Pendentes</option>
        <option>Concluídas</option>
      </select>
    </div>
  );
}

export default Filter;
