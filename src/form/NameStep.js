import {useState, useEffect} from "react";

function NameStep(props){
    if (props.currentStep !== 1) {
        return null
      } 
      return(
        <div>
          <h2>Имя</h2>
          <input
            name="name"
            type="text"
            placeholder="Введите имя "
            value={props.name}
            onChange={props.handleChange}
            />
        </div>
      );
    }
    export default NameStep;