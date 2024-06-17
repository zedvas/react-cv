import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
class App extends Component {
  state = {
    sections: [
      {
        experience: [
          {
            jobTitle: "Senior Stock Controller",
            company: "Prada Group",
            location: "London",
            date: "Jul 21 - May 24",
          },
          {
            jobTitle: "Stock Controller",
            company: "Celine",
            location: "London",
            date: "Nov 17 - Jun 20",
          },
          {
            jobTitle: "Stock Manager",
            company: "Reiss",
            location: "London",
            date: "Jan 16 - Oct 17",
          },
          {
            jobTitle: "Supervisor",
            company: "Reiss",
            location: "London",
            date: "Jan 15 - Dec 15",
          },
        ],
      },
      {
        education: [
          {
            subject: "BA Accounting & Finance (Hons) – 2:1 ",
            institution: "Middlesex University",
            location: "London",
            date: "2016",
          },
          {
            subject: "A-Levels: Mathematics, Psychology, Biology",
            institution: "WQEIC",
            location: "London",
            date: "2012",
          },
          {
            subject: "9 GCSE’s A*-C (inc. English and Mathematics)",
            institution: "Madani High School",
            location: "Leicester",
            date: "2010",
          },
        ],
      },
      {
        "personal achievements": [
          { role: "Shoebox 4 Syria campaign", date: "2014, 2015" },
          {
            role: "President of Middlesex University Accounting and Finance Society",
            date: "2013, 2014",
          },
        ],
      },
      {
        "technical skills": [
          {
            text: "Advanced knowledge of Microsoft Office, particularly MS Word and Excel",
          },
          {
            text: "Specialised softwares: CEGID, Retail J, Sage 50 Accounts, OneSource",
          },
        ],
      },
      { references: [{ text: "Available on request" }] },
    ],
  };
  render() {
    // console.log(Array.isArray(this.state.sections));
    const {
      experience,
      education,
      personalAchievements,
      technicalSkills,
      references,
    } = this.state.sections;
    return (
      <>
        <Header />
        <Hero />
{        this.state.sections.map(entry=>{return <Section entry={entry}/>})}
        
      </>
    );
  }
}

export default App;
