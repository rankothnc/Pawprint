import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../../Styles/Emergency_Contact/buttons.css";
import  Vector from '../../Styles/Emergency_Contact/Vector.svg'
import Circles from '../../Styles/Emergency_Contact/Circles.svg'

export default function GroupOrientation() {
  return (
    <div>
    <Stack
      className="BtnGroup"
      paddingTop={"30px"}
      marginLeft={"400px"}
      spacing={2}
      direction="row"
      width={"250px"}
      alignItems={"center"}
    >
      <Button variant="contained" className="BottomButtons">
        Submit
      </Button>
      <Button variant="contained" className="BottomButtons">
        Next
      </Button>
    </Stack>
    
    
<div>
    <div className="left">
    <img className="Circles" src={Circles} />
    </div>

<div className="right">
<img className="Vector" src={Vector} height={25} width={25}/>
   
</div>
</div>
    </div>
  );
}
