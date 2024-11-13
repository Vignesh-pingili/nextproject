"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import AlertDialogSlide from './DilogBox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

export default function CustomizedTables(data:any) {
  const [open, setOpen] = React.useState(false);
  console.log(open,"open")
  return (
    <Box p={2}>
    <TableContainer component={Paper} sx={{p:2}}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align="right">Coin</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;($)
            </StyledTableCell>
            <StyledTableCell align="right">24h Change</StyledTableCell>
            <StyledTableCell align="right">Market Cap</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((row:any) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell  scope="row">
                {row.market_cap_rank}
              </StyledTableCell>
                 <StyledTableCell align="right">
                  <Box sx={{display:"flex",gap:0.5,alignItems:"center",justifyContent:"flex-end"}} onClick={()=>setOpen(row.market_cap_rank)}>
                     <img src={row.image} alt={row.name} width="20" height="20" /><Typography>{row.name}</Typography>
                    </Box></StyledTableCell>
              <StyledTableCell align="right">{row.current_price}</StyledTableCell>
              <StyledTableCell align="right">{row.price_change_24h}</StyledTableCell>
              <StyledTableCell align="right">{row.market_cap}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <AlertDialogSlide open={open} setOpen={setOpen} data={data?.data}/>
     </Box>
  );
}

