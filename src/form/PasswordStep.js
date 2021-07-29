export default function PasswordStep(props){
    if (props.currentStep !== 3) {
        return null;
    } 
    return(
        <div>
           <h2> &lt; Password /&gt;</h2>
          <input
            name="password"
            type="password"
            placeholder="Введите Password"
            value={props.password}
            onChange={props.handleChange}
            />
        </div>
    );
}