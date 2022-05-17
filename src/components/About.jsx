import "../styles/About.css";

export default function About({ title, subtitle, description }) {
  return (
    <div className="about">
      <h1>{title}</h1>
      <span>{subtitle}</span>
      <p>{description}</p>
    </div>
  );
}
