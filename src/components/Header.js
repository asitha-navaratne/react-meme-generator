import logo from "../images/troll-face.png";

function Header() {
  return (
    <header>
      <div className="header--title">
        <img src={logo} alt="logo" className="header--logo" />
        <h1>Meme Generator</h1>
      </div>
      <div className="header--subtitle">
        <p>React Course - Project 3</p>
      </div>
    </header>
  );
}

export default Header;
