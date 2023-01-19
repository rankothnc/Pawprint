import React from "react";
import "../../Styles/Emergency_Contact/form.css";
import { InputBase } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


export default function EForm() {
  return (
    <div>
      <p className="EmTitle">
        {" "}
        <ArrowBackIosIcon className="ArrowBack" />
        Emergency Contact Information
      </p>
      <Box class="boxContainer" sx={{ width: "80%"}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <p className="InputLabel">Pet Name</p>
            <InputBase className="inp" />

            <p className="InputLabel">Relationship</p>
            <InputBase className="inp" />

            <p className="InputLabel">First Name</p>
            <InputBase className="inp" />

            <p className="InputLabel">Last Name</p>
            <InputBase className="inp" />

            <p className="InputLabel">Pri Phone</p>
            <InputBase className="inp" />

            <p className="InputLabel">Sec Phone</p>
            <InputBase className="inp" />

            <p className="InputLabel">Email</p>
            <InputBase className="inp" />
          </Grid>
          <Grid item xs={6}>
            <p className="InputLabel">Street Address </p>
            <InputBase className="inp" />

            <p className="InputLabel">Street Address 2 </p>
            <InputBase className="inp" />

            <p className="InputLabel">City</p>
            <InputBase className="inp" />

            <p className="InputLabel">State</p>
            <InputBase className="inp" />

            <p className="InputLabel">Zip Code</p>
            <InputBase className="inp" />

            <p className="InputLabel">Country</p>
            <InputBase className="inp" />

            {/* <table>
              <tr className="A">
              <td>
              <p className="InputLabel">Country</p>
            <InputBase className="inp" />
              </td>
              <td>
              <p className="InputLabel">Country</p>
            <InputBase className="inp" />
              </td>
              </tr>
            
            </table> */}
            {/* <Grid container spacing={15} >
                    <Grid item xs={4}>
                      <p className="InputLabel2">Start Date</p>
                      <InputBase className="inpDate" />
                    </Grid>
                    <Grid item xs={4}>
                      <p className="InputLabel2">Duration</p>
                      <InputBase className="inpDur" />
                    </Grid>
                  </Grid> */}


                  <div className="AA">
                  <div> <p className="InputLabel2">Start Date</p>
                      <InputBase className="inpDate" /></div>
                 
                      <div> <p className="InputLabel2">Start Date</p>
                      <InputBase className="inpDate" /></div>
                  </div>

          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
