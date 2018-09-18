import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee/Employee';

class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            employees: [
                {name: 'Sylvia', age : 26},
                {name: 'Ramesh', age : 24},
                {name: 'Peter', age : 27} 
            ],
            company: 'xyz', 
            location: 'chennai'
        };
        
        //Alternate to bind this via constructor instead arrow function
        //this.switchName = this.switchName.bind(this);
    }
    
    switchName = (name) => {

        // Dont do this: this.state.employees[0].name = 'Evangeline';
        this.setState({
            employees: [
                {name: name, age: 26},
                {name: 'Ramesh', age : 24},
                {name: 'Peter', age : 27} 
            ]
        });
    }

    render(){ 
        return(
            <div>
                <h1>My First Functional Component</h1>
                <h2>Employee List</h2>
                <button onClick={this.switchName.bind(this, 'Evangeline')}>Switch</button>
                <Employee 
                    name={this.state.employees[0].name} 
                    age={this.state.employees[0].age}
                    swapName={this.switchName.bind(this, 'Evangeline M')}>
                </Employee>
                <Employee 
                    name={this.state.employees[1].name} 
                    age={this.state.employees[1].age}>My hobby is cricket
                </Employee>
                <Employee 
                    name={this.state.employees[2].name} 
                    age={this.state.employees[2].age}>
                </Employee>
            </div>
        );        
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));