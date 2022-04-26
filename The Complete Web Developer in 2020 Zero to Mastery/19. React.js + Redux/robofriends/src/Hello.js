import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return (
            <div className="f1 c1">
                <h1> Hello World</h1>
                <p> How are you {this.props.greetings}? </p>  
            </div>
            
        );
        
    }

}

export default Hello;

