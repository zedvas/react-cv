import React, { Component } from "react";
import Button from "./Button";

class Hero extends Component {
  state = { heroButtonLinks: ["experience", "education", "contact"] };
  render() {
    return (
      <div className="hero">
        <h2>Hello</h2>
        <h3>Here's a little bit about me.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi aut
          saepe similique totam reiciendis odit velit ex distinctio architecto
          consequuntur!
        </p>
        <img src="https://img.freepik.com/free-vector/programmer-working-with-cms_52683-23279.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714867200&semt=ais" />
        <div className="buttonContainer">
          {this.state.heroButtonLinks.map((buttonLink) => {
            return <Button buttonLink={buttonLink} />;
          })}
        </div>
      </div>
    );
  }
}

export default Hero;
