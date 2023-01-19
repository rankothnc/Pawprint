import React from "react";
import "../../Styles/Emergency_Contact/EmergencyForm.css";
import EForm from "../../Components/Emergency_Contact/Form";
import Buttons from "../../Components/Emergency_Contact/Buttons";

export default function EmergencyForm() {
  return (
    <div>
      <div className="column left"></div>

      <div className="column right">
        <div className="container">
          <EForm />    
          <Buttons/>
        </div>
         
      </div>
    </div>
  );
}
