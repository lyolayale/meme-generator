export default function Meme(props) {
  return (
    <section className="meme">
      <img
        className="animMeme"
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}
        src={props.MEME_IMAGE}
        alt="Meme"
      />
    </section>
  );
}
