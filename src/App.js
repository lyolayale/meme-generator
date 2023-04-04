import React from "react";
import Navbar from "../src/components/Navbar";
import Form from "../src/components/Form";
import Footer from "../src/components/Footer";

// JS data.js
import data from "../src/js/data";

export default class App extends React.Component {
  handleMouseEnter = () => {
    const memeImg = document.querySelector(".meme img");

    memeImg.style.filter = "brightness(.7)";
  };

  handleMouseLeave = () => {
    const memeImg = document.querySelector(".meme img");

    memeImg.style.filter = "brightness(1)";
  };

  render() {
    return (
      <main>
        <Navbar />
        <Form
          MEME_BUTTON={data.MEME_BUTTON}
          PHRASE1={data.PHRASE1}
          PHRASE2={data.PHRASE2}
          handleMemeButton={this.handleMemeButton}
          MEME_IMAGE={data.MEME_IMAGE}
          handleMouseEnter={this.handleMouseEnter}
          handleMouseLeave={this.handleMouseLeave}
          CLASSNAME={data.CLASSNAME}
        />
        <Footer />
      </main>
    );
  }
}
