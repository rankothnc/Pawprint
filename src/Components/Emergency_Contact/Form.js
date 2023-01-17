import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../../Styles/Emergency_Contact/form.css'

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box className='Em-form-container'/>
      </Container>
    </React.Fragment>
  );
}
