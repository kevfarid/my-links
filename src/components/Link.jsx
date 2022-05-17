import '../styles/Link.css';

const styles = ({ color }) => ({
  background: color || "black",
});

export default function Link({ href, children, color, icon, ...props }) {
  return (
    <div className="link" style={styles({ color })}>
      <a href={href} {...props}>
        <img src={icon} alt={`${children} icon`} />
        <p>{children}</p>
      </a>
    </div>
  );
}