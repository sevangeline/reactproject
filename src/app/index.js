import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee/Employee';

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>My First Functional Component</h1>
                <h2>Employee List</h2>
                <Employee name="Sylvia" age="26"></Employee>
                <Employee name="Ramesh" age="24">My hobby is cricket</Employee>
                <Employee name="Peter" age="27"></Employee>
            </div>
        );        
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));