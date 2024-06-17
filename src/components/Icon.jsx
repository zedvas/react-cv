import React, { Component } from 'react'

class Icon extends Component {
    state = {  } 
    render() { 
        return (<img src={this.props.src} style={{width: this.props.width ? this.props.width : "70px"}}></img>);
    }
}
 
export default Icon;