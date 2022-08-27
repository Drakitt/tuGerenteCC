import React, {useEffect, useState, useContext} from 'react';
import { getAll } from '../hooks/InvoicesHooks';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AppContext from '../context/AppContext';

const Dropdown = () => {

  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState('');
  const { searchContext } = useContext(AppContext);

  useEffect(() => {
    const getInvoices = async () => {
      const recibed = await getAll();
      if (recibed) {
        setData(recibed);
      }
    }
    getInvoices();
  }, []);



  return (
    <div style={{ marginTop: '50px' }}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          searchContext(newValue);
          setValue(newValue);

        }}
        /* inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }} */
        getOptionLabel={(option)=>option.nombre}
        options={data}        
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
    </div> 
  )
}

export default Dropdown