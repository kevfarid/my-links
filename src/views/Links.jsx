import Link from "../components/Link";
import socialMedias from "../constants/socialMedias";
import '../styles/Links.css';

export default function Links() {
  return (
    <section className="links">
      {Object.values(socialMedias).map((socialMedia) => (
        <Link
          key={socialMedia.name}
          href={socialMedia.url}
          icon={socialMedia.img}
          color={socialMedia.color}
          target="__blank"
        >
          {socialMedia.name}
        </Link>
      ))}
    </section>
  );
}
