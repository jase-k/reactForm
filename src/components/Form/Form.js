import FormData from "./FormData"
import { useState } from "react"
function Form(props){
    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmP, setConfirmP] = useState("")
    let [firstNameErrors, setFirstNameErrors] = useState("")
    let [lastNameErrors, setLastNameErrors] = useState("")
    let [emailErrors, setEmailErrors] = useState("")
    let [passwordErrors, setPasswordErrors] = useState("")
    let [confirmErrors, setConfirmErrors] = useState("")
    function handleFirstName(value){
        if(value.length < 3 || value.length > 10){
            setFirstNameErrors("First Name must be between 3 and 10 characters")
        }
        else{
            setFirstNameErrors("")
            setFirstName(value)
        }
        
    }
    function handleLastName(value){
        if(value.length < 3 || value.length > 10){
            setLastNameErrors("Last Name must be between 3 and 10 characters")
        }
        else{
            setLastNameErrors("")
            setLastName(value)
        }
        
    }
    function handleEmail(value){
        let email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/
        
        if(!email_regex.test(value)){
            setEmailErrors("Email must be valid")
        }
        else{
            setEmailErrors("")
            setEmail(value)
        }
        
    }
    function handlePassword(value){
        let regex = /[a-zA-Z0-9]*[0-9]+/
        if(value.length < 8){
            setPasswordErrors("Password must be atleast 8 characters")
        }
        else if(!regex.test(value)){
            setPasswordErrors("Password must contain one number")
        }
        else{
            setPasswordErrors("")
            setPassword(value)
        }
        
    }
    function handleConfirm(value){
        if(value !== password){
            setConfirmErrors("Passwords must match!")
        }
        else{
            setConfirmErrors("")
            setConfirmP(value)
        }
        
    }
    return(
        <>
        <form className="form-control container">
            <div className="mb-3">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" className="mb-3" name="firstName"
                onChange={(e) => {handleFirstName(e.target.value)}}
                ></input>
                {
                    firstNameErrors ?
                        <p className="danger">{firstNameErrors}</p>
                        : ""
                }
            </div>
            <div className="mb-3">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" className="mb-3" name="lastName"
                onChange={(e) => {handleLastName(e.target.value)}}                
                ></input>
                {
                    lastNameErrors ?
                        <p className="danger">{lastNameErrors}</p>
                        : ""
                }
            </div>
            <div className="mb-3">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" className="mb-3" name="email"
                onChange={(e) => {handleEmail(e.target.value)}}
                ></input>
                 {
                    emailErrors ?
                        <p className="danger">{emailErrors}</p>
                        : ""
                }
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" className="mb-3" name="password"
                onChange={(e) => {handlePassword(e.target.value)}}
                ></input>
                 {
                    passwordErrors ?
                        <p className="danger">{passwordErrors}</p>
                        : ""
                }
            </div>
            <div className="mb-3">
                <label htmlFor="confirm">Confirm Password: </label>
                <input type="text" id="confirm" className="mb-3" name="confirm"
                onChange={(e) => {handleConfirm(e.target.value)}}
                ></input>
                 {
                    confirmErrors ?
                        <p className="danger">{confirmErrors}</p>
                        : ""
                }
            </div>
        </form>
        <h2>Your Form Data</h2>
        <FormData 
        firstName = {firstName}
        lastName = {lastName}
        email = {email}
        password = {password}
        confirmP = {confirmP}
        />
        </>
    )
}
export default Form
