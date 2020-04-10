import React from "react";
import axios from "axios";
import EmployeeList from "../components/employeeList";

class Home extends React.Component {
    state = {
        employees: [],
        filteredEmployees: [],
        filterByName: "",
    };
    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=20").then((res) => {
            this.setState({
                employees: res.data.results,
                filteredEmployees: res.data.results,
                filterByName: "",
            });
        });
    }
    filterByName(event) {
        let currentValue = event.target.value.toLowerCase();
        if (currentValue.length < 1) {
            this.setState({ filteredEmployees: this.state.employees });
        } else {
            let filteredEmployees = this.state.employees.filter(function (
                employee
            ) {
                return (employee.name.first + " " + employee.name.last)
                    .toLowerCase()
                    .includes(currentValue);
            });
            this.setState({ filteredEmployees: filteredEmployees });
        }
    }
    sort(event) {
        let property = event.target.dataset.sort;
        let filteredEmployees = this.state.filteredEmployees.sort((a, b) => {
            return a[property] > b[property]
                ? 1
                : a[property] < b[property]
                ? -1
                : 0;
        });
        this.setState({ filteredEmployees: filteredEmployees });
    }

    render() {
        return (
            <div className="container mt-2 bg-contrast">
                <div className="employee-table">
                    <div className="columns employee-table-header">
                        <div className="column">
                            <input
                                type="text"
                                placeholder="name"
                                onChange={this.filterByName.bind(this)}
                            />
                        </div>
                        <div className="column">
                            <button
                                className="btn"
                                data-sort="email"
                                onClick={this.sort.bind(this)}
                            >
                                Email
                                <i
                                    data-sort="email"
                                    className="icon icon-arrow-down"
                                ></i>
                            </button>
                        </div>
                        <div className="column">
                            <button
                                className="btn"
                                data-sort="phone"
                                onClick={this.sort.bind(this)}
                            >
                                Phone
                                <i
                                    data-sort="phone"
                                    className="icon icon-arrow-down"
                                ></i>
                            </button>
                        </div>
                        <div className="column">Location</div>
                    </div>
                    {this.state.filteredEmployees.map((employee) => (
                        <EmployeeList employee={employee} />
                    ))}
                </div>
            </div>
        );
    }
}
export default Home;
