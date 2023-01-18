import React from 'react'
// import FixedContainer from '../../Components/Emergency_Contact/Form'
import '../../Styles/Emergency_Contact/EmergencyForm.css'
// import {TextField} from '@mui/material/TextField'
import { TextField, InputBase } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput:after":{
    borderBlockColor:"green"
  }
})

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
 
          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp' />

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

        </Grid>
        <Grid item xs={6}>

        <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>

          <p className="InputLabel">Pet Name</p>
          <InputBase className='inp'/>
        </Grid>
      </Grid>
    </Box>
     
      </div>
     
      </div>
      
    </div>
  )
}
