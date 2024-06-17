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
      <div> 
      {/* {Object.entries(entry).map(item=> {
        return <p>{item[0]}{item[1]}</p>
        })} */}
      {Object.entries(entry).map(headings=> {
        {/* return <h2>{headings[0]}</h2>   //headings[0] for heading */}
        headings[1].map(experience=> {
            Object.entries(experience).map(data => {
                console.log(headings[0], data[0],data[1])
            })
        })
        })}
  
      </div>
    );
  }
}

export default Section;
