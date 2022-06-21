import { useState } from "react";
import memeData from "../memeData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages] = useState(memeData);

  function getMeme() {
    const memeArray = allMemeImages["data"]["memes"];
    const randomNumber = Math.round(Math.random() * memeArray.length);
    const { url } = memeArray[randomNumber];
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMeme} className="form--button">
          Get a new meme image 😜
        </button>
        <div className="meme">
          <img
            src={meme.randomImage}
            alt="meme template"
            className="meme--image"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}

export default Meme;
