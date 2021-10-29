function FormData(props){
    return(
        <table className="table table-borderless container">
            <tr>
                <th>First Name:</th>
                <td>{props.firstName}</td>
            </tr>
            <tr>
                <th>Last Name:</th>
                <td>{props.lastName}</td>
            </tr>
            <tr>
                <th>Email:</th>
                <td>{props.email}</td>
            </tr>
            <tr>
                <th>Password:</th>
                <td>{props.password}</td>
            </tr>
            <tr>
                <th>Confirm Password:</th>
                <td>{props.confirmP}</td>
            </tr>
        </table>
    )
}
export default FormData