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
        {Object.entries(entry).map((level1) => {
          const title = level1[0];
          const data = level1[1];

          data.map(level2 => {
            Object.entries(level2)
            .map(level3 => {
              const infoHeading = level3[0];
              const infoDetail = level3[1];
              console.log(title, infoHeading, infoDetail);

              return <h2>{title}</h2>
            });
          });
        })}
      </div>
    );
  }
}

export default Section;
