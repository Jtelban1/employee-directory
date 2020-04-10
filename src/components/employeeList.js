import React from "react";

function EmployeeList(props) {
    return (
        <div className="columns">
            <div className="column">
                {props.employee.name.first} {props.employee.name.last}
            </div>
            <div className="column">{props.employee.email}</div>
            <div className="column">{props.employee.phone}</div>
            <div className="column">
                {props.employee.location.city}, {props.employee.location.state}
            </div>
        </div>
    );
}

export default EmployeeList;
