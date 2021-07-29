export default function EmailStep(props){
    
        if (props.currentStep !== 2) {
            return null;
        } 
        return(
            <div>
               <h2> &lt; Email /&gt;</h2>
              <input
                name="email"
                type="email"
                placeholder="Введите email"
                value={props.email}
                onChange={props.handleChange}
                />
            </div>
        );
}