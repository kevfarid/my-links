import "./App.css";
import "animate.css";
import Links from "./views/Links";
import Info from "./views/Info";

function App() {
  return (
    <>
      <main>
        <div className="container">
          <section className="app">
            <Info />
            <Links />
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
