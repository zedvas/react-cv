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
      <div className="section">
        {/* 
        Russell's solution: 
        {Object.entries(entry).map(item=> {
        return <p>{item[0]}{item[1]}</p>
        })} 
        */}

        {Object.entries(entry).map((level1) => {
          const title = level1[0];
          const data = level1[1];
          return (
            <>
              <h2 className={title}>{title}</h2>
              {data.map((level2) => {
                return (
                  <>
                    {Object.entries(level2).map((level3) => {
                      const infoHeading = level3[0];
                      const infoDetail = level3[1];
                      return (
                        //determine what type of info it is and create html accordingly
                        <>
                        {infoHeading === "jobTitle" || infoHeading === "subject" ? <h3 className={infoHeading}>{infoDetail}</h3> 
                        :infoHeading === "company" || infoHeading === "institution" ? <h4 className={infoHeading}>{infoDetail}</h4>
                        :infoHeading === "location" || infoHeading === "role" || infoHeading === "text" ? <p className={infoHeading}>{infoDetail}</p>
                        : infoHeading === "date" ? <span className={infoHeading}>{infoDetail}</span> : ""}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    );
  }
}

export default Section;
