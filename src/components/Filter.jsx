import { useDispatch } from 'react-redux';
import { filter } from 'redax/Slise';
import { useState } from 'react';

const Filter = () => {
  const [filterName, setFilterName] = useState('');

  const dispach = useDispatch();
  dispach(filter(filterName));

  const changeFilter = el => {
    setFilterName(el.target.value);
  };

  return <input type="text" onChange={changeFilter} />;
};

export default Filter;
