import React from 'react'
// import FixedContainer from '../../Components/Emergency_Contact/Form'
import '../../Styles/Emergency_Contact/EmergencyForm.css'
import TextField from '@mui/material/TextField'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EmergencyForm() {
  return (
    <div className="App">
     <div className="column left">
     
      </div>

      <div className="column right">
      <div className='container'>
      <Box class='boxContainer' sx={{ width: '80%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
      </Grid>
    </Box>
     
      </div>
     
      </div>
      
    </div>
  )
}
