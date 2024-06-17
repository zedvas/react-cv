import React, { Component } from "react";
class Section extends Component {
  state = {};
  render() {
    const entry = this.props.entry;
    const {
      jobTitle,
      company,
      location,
      date,
      subject,
      institution,
      role,
      text,
    } = entry;

    return (
      <div> {Object.entries(entry).map(item=> {
        return <p>{item[0]}</p>
        })}
  
      </div>
    );
  }
}

export default Section;
