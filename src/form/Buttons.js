import {useState, useEffect} from "react";

export default function Button(props){
    const PreviousButton = ()=> {
        let currentStep2 = props.currentStep;
        if(currentStep2 !==1){
            return (
                <button type="button" onClick={props._prev}>Назад</button>
            )
        }
        return null;
    }
    const NextButton= ()=>{
        let currentStep2 = props.currentStep;
        if(currentStep2 <3){
            return (
                <button type="button" onClick={props._next}>Вперед</button>        
            )
        }
        return null;
    }
    const SendButton = ()=>{
        let currentStep2 = props.currentStep;
        if(currentStep2 === 3){
            return (
                <button type="submit">Отправить</button>      
            )
        }
        return null;
    }
    return(
        <div class="buttons_form">
            <PreviousButton/>
            <NextButton/>
            <SendButton/>
        </div>
    )
     
}