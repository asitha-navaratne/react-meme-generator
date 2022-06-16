import memeData from "../memeData";

function Meme() {
  function getMemeData() {
    const memeArray = memeData["data"]["memes"];
    const randomNumber = Math.round(Math.random() * memeArray.length);
    const { url } = memeArray[randomNumber];
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text" />
        <input type="text" className="form--input" placeholder="Bottom Text" />
        <button onClick={getMemeData} className="form--button">
          Get a new meme image 😜
        </button>
      </div>
    </main>
  );
}

export default Meme;
