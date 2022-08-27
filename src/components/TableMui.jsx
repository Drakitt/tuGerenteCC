import React, { useEffect, useState, useContext } from 'react';
import { getAll, getAllNext } from '../hooks/InvoicesHooks';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppContext from '../context/AppContext';
import { Button } from '@mui/material';

import InfiniteScroll from "react-infinite-scroll-component";


const TableMui = () => {

  const [data, setData] = useState([]);
  const { filtro } = useContext(AppContext);
  const [lastKey, setLastKey] = useState('')

  useEffect(() => {
    const getInvoices = async () => {
      const recibed = await getAll()
      .then((res)=> {
        setData(res);
        setLastKey(res[19].lastKey);
      })
      /* if (recibed) {
        setData(recibed.items);
        setLastKey(recibed.lastKey)
      } */
    }
    getInvoices();
  }, []);
console.log("ffffff", lastKey);


  const handleClick = (e)=> {
    console.log("elemento", e);
  }

  const handleNext = ()=> {
    getAllNext(data.length)
    .then((res)=> {
      setData(res);
      setLastKey(res[19].lastKey);
    })
  }

  const handleX = () => {
    console.log("llega");
  }


  return (
    <div>
    <TableContainer component={Paper} sx={{ marginTop: '20px', border: '1px solid #b7b7b7' }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="left">Código</TableCell>
            <TableCell align="left">Nit</TableCell>
            <TableCell align="left">Razón social</TableCell>
            <TableCell align="left">Teléfono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtro != null ?
          
            <TableRow
              onClick={()=>handleClick(filtro.id)}
              key={filtro.id}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row">
                {filtro.nombre}
              </TableCell>
              <TableCell align="left">{filtro.codigo}</TableCell>
              <TableCell align="left">{filtro.nit}</TableCell>
              <TableCell align="left">{filtro.razonSocial}</TableCell>
              <TableCell align="left">{filtro.telefono}</TableCell>
            </TableRow>
          :
          data.map((row, key) => (
            <TableRow
              onClick={()=>handleClick(row.id)}
              key={key}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="left">{row.codigo}</TableCell>
              <TableCell align="left">{row.nit}</TableCell>
              <TableCell align="left">{row.razonSocial}</TableCell>
              <TableCell align="left">{row.telefono}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
    {data ?
    <InfiniteScroll
      dataLength={data ? data.length + 20 :0}
      next={handleNext}
      hasMore={true}
    />
    : null
    }
    </div>
  )
}

export default TableMui