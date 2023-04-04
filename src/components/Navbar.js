import troll from "../resources/images/troll.png";
import heart from "../resources/images/heart.png";

export default function Navbar(props) {
  return (
    <header>
      <div className="header-wrapper">
        <nav>
          <section className="title">
            <img src={troll} alt="Cartoon face of a troll." />
            <h3>Meme Generator</h3>
          </section>
          <section className="course hide">
            <p>
              I <img className="heart-img" src={heart} alt="heart" /> Memes!
            </p>
          </section>
        </nav>
      </div>
    </header>
  );
}
