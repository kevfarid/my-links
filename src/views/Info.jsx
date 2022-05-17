import About from "../components/About";
import { Picture } from "../components/Picture";
import info from "../constants/info";
import "../styles/Info.css";

export default function Info() {
  return (
    <section className="info">
      <Picture img={info.img} />
      <About
        title={info.title}
        subtitle={info.subtitle}
        description={info.description}
      />
    </section>
  );
}
