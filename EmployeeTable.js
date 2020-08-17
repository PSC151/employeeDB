import React from "react";

function EmployeeTable(props){
    return <div>
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone number</th>
            </tr>
            </thead>
            <tbody>
                {props.employeeList.map((employee, index) => {
                        return(
                            <tr key={index}>
                                <td><img src={employee.picture.thumbnail}></img></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                            </tr>
                        )
                })}
            </tbody>
        </table>
            </div>
}

export default EmployeeTable;