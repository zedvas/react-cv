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
    for (const key in entry) {console.log(key)} //works fine but want to produce dom elem for this

    return (
      <div>
      {/* {for (const key in entry) {
         {return
          <h2>{key}</h2>
          }
          }
          }               
 */  }
        {/* {jobTitle ? <h3>{jobTitle}</h3> : ""} */  }

        {/* {for (const prop in entry) {
                return (
                    <h2>{prop}</h2>
                    )
                    }
            } */                     
            }
      </div>
    );
  }
}

export default Section;
