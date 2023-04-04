import React from "react";
import Meme from "./Meme";
import memesData from "../js/memesData";

export default function Form(props) {
  const [memeImage, setMemeImage] = React.useState({
    topText: props.PHRASE1,
    bottomText: props.PHRASE2,
    randomImage:
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ].url,
  });

  const [theMemes, setTheMemes] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(res => setTheMemes(res.data.memes));
  }, []);

  const handleMemeButton = () => {
    const randomMemeImg = Math.floor(Math.random() * theMemes.length);
    const url = theMemes[randomMemeImg].url;
    setMemeImage(prev => ({
      ...prev,
      randomImage: url,
    }));
  };

  function handleChange(e) {
    setMemeImage(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <form action="" onSubmit={e => e.preventDefault()}>
      <div className="form-wrapper">
        <section className="form-inputs">
          <input
            type="text"
            placeholder="Top Text"
            value={memeImage.topText}
            name="topText"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            value={memeImage.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </section>
        <button onClick={handleMemeButton}>{props.MEME_BUTTON} 🖼️</button>
        <section className="meme-container">
          <Meme
            handleMouseEnter={props.handleMouseEnter}
            handleMouseLeave={props.handleMouseLeave}
            MEME_IMAGE={memeImage.randomImage}
          />
          <div className="memeText">
            <h2 className="memeText--top">{memeImage.topText}</h2>
            <h2 className="memeText--bottom">{memeImage.bottomText}</h2>
          </div>
        </section>
      </div>
    </form>
  );
}
