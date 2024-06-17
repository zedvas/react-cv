import React, { Component } from 'react'

class Button extends Component {
    state = {  } 
    render() { 
        return (<button>
        <a href={`#${this.props.buttonLink}`}>{this.props.buttonLink}</a>
        </button>);
    }
}
 
export default Button;