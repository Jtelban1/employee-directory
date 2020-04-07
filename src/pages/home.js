import React from "react";
import axios from "axios";


class Home extends React.Component{
    state = {
        employees: []
    };
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=20').then(res =>{
            this.setState({employees:res.data.results});
            console.log(this.state.employees)
        })
    }

    render(){
        return(
            <div>
                <div className="columns">
                    <div className="column">name</div>
                    <div className="column">email</div>
                </div>
                { this.state.employees.map(employee => (
                    <div className="columns">
                        <div className="column">{ employee.name.first} {employee.name.last}</div>
                        <div className="column">{ employee.email}</div>
                    </div>
                )) }
            </div>

        )
    }

}
export default Home;