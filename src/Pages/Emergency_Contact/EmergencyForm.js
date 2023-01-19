import React from "react";
import "../../Styles/Emergency_Contact/EmergencyForm.css";
import { TextField, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import EForm from "../../Components/Emergency_Contact/Form";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput:after": {
    borderBlockColor: "green",
  },
});

export default function EmergencyForm() {
  return (
    <div>
      <div className="column left"></div>

      <div className="column right">
        <div className="container">
          <EForm />
        </div>
      </div>
    </div>
  );
}
