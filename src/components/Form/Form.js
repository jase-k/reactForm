import FormData from "./FormData"
import { useState, useReducer } from "react"
const initialState = {
    firstName: {
        value: "",
        error: null
    },
    lastName: {
        value: "",
        error: null
    },
    email: {
        value: "",
        error: null
    },
    password: {
        value: "",
        error: null
    },
    confirm: {
        value: "",
        error: null
    },
}
function Form(props){
    const [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action){
        return {
            ...state,
            [action.type]:action.payload
        }
    }
    // let [firstName, setFirstName] = useState("")
    // let [lastName, setLastName] = useState("")
    // let [email, setEmail] = useState("")
    // let [password, setPassword] = useState("")
    // let [confirmP, setConfirmP] = useState("")
    // let [firstNameErrors, setFirstNameErrors] = useState("")
    // let [lastNameErrors, setLastNameErrors] = useState("")
    // let [emailErrors, setEmailErrors] = useState("")
    // let [passwordErrors, setPasswordErrors] = useState("")
    // let [confirmErrors, setConfirmErrors] = useState("")
    // function handleFirstNameErrors(value){
    //     if(value.length < 3 || value.length > 10){
    //         setFirstNameErrors("First Name must be between 3 and 10 characters")
    //     }
    //     else{
    //         setFirstNameErrors("")
    //         setFirstName(value)
    //     }
        
    // }
    // function handleLastName(value){
    //     if(value.length < 3 || value.length > 10){
    //         setLastNameErrors("Last Name must be between 3 and 10 characters")
    //     }
    //     else{
    //         setLastNameErrors("")
    //         setLastName(value)
    //     }
        
    // }
    // function handleEmail(value){
    //     let email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/
        
    //     if(!email_regex.test(value)){
    //         setEmailErrors("Email must be valid")
    //     }
    //     else{
    //         setEmailErrors("")
    //         setEmail(value)
    //     }
        
    // }
    // function handlePassword(value){
    //     let regex = /[a-zA-Z0-9]*[0-9]+/
    //     if(value.length < 8){
    //         setPasswordErrors("Password must be atleast 8 characters")
    //     }
    //     else if(!regex.test(value)){
    //         setPasswordErrors("Password must contain one number")
    //     }
    //     else{
    //         setPasswordErrors("")
    //         setPassword(value)
    //     }
        
    // }
    // function handleConfirm(value){
    //     if(value !== password){
    //         setConfirmErrors("Passwords must match!")
    //     }
    //     else{
    //         setConfirmErrors("")
    //         setConfirmP(value)
    //     }
        
    // }
    function handleChange(e){
        const {name, value} = e.target
        dispatch({
            type: name,
            payload: value 
        })
    }
    return(
        <>
                    {JSON.stringify(state)}
        <form className="form-control container">
            <div className="mb-3">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" className="mb-3" name="firstName"
                onChange={(e) => {handleChange(e)}}
                ></input>
                
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
                
            </div>
            <div className="mb-3">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" className="mb-3" name="lastName"
                onChange={(e) => {handleChange(e)}}                
                ></input>
               {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" className="mb-3" name="email"
                onChange={(e) => {handleChange(e)}}
                ></input>
                {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" className="mb-3" name="password"
                onChange={(e) => {handleChange(e)}}
                ></input>
              {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="confirm">Confirm Password: </label>
                <input type="text" id="confirm" className="mb-3" name="confirm"
                onChange={(e) => {handleChange(e)}}
                ></input>
             {state.firstName.error !== null && (
                    <p className="error">{state.firstName.error}</p>
                )}
            </div>
        </form>
        <h2>Your Form Data</h2>
        <FormData 
        firstName = {state.firstName}
        lastName = {state.lastName}
        email = {state.email}
        password = {state.password}
        confirmP = {state.confirmP}
        />
        </>
    )
}
export default Form
