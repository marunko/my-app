import {useState, useEffect} from "react";
import NameStep from './NameStep';
import EmailStep from './EmailStep';
import PasswordStep from './PasswordStep';
import Button from './Buttons.js';
import './Form.css';
 
function Add_to_page(props){
      
     
}

 
function TheForm(props){

    const [currentStep, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     
    const [result, setResult] = useState(false);
     
    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        let result2 = result? false: true;
        setResult(result2);
        setStep(1);
         
      };

    const namehandle = (e) =>{
        setName(e.target.value);
    }
    const emailhandle = (e) =>{
        setEmail(e.target.value);
    }
    const passhandle = (e) =>{
        setPassword(e.target.value);
    }
    useEffect(()=>{
        console.log(name);
        //if(name !== '')add_to_page('#users_added', name, email);
        setName(''); setEmail(''); setPassword('');
    }, [result]);

    const _next = () => {
        let currentStep2 = currentStep;
        currentStep2 = currentStep2 >= 2? 3: currentStep2 + 1
        setStep(currentStep2);
    }       
    const _prev = () => {
        let currentStep2 = currentStep;
        currentStep2 = currentStep2 <= 1? 1: currentStep2 - 1
        setStep(currentStep2);
    }
      return (
        <>
        <div>
            <h1>Форма входа</h1>
            <p id="step">Шаг {currentStep} </p> 
    
            <form onSubmit={handleSubmit}>
                <NameStep
                    currentStep={currentStep} 
                    handleChange={namehandle}
                    name={name}
                />
                <EmailStep
                    currentStep={currentStep} 
                    handleChange={emailhandle}
                    email={email}
                />
                <PasswordStep
                    currentStep={currentStep} 
                    handleChange={passhandle}
                    password={password}
                />
                 <Button  
                    currentStep={currentStep}
                    _next = {_next}
                    _prev = {_prev}
                 />
            </form>
        </div>
        <div id="users_added">
              
        </div>

        </>
        )
}
export default TheForm;