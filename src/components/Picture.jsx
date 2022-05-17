import '../styles/Picture.css';

export function Picture({ img }) {
  return (
    <div className="picture">
      <img src={img} alt="picture" />
    </div>
  );
}
