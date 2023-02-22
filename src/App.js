import { Collection } from "./Collection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { How } from "./How";
import { Why } from "./Why";

function App() {
  return (
    <>
        <Header/>
        <main>
          <Hero/>
          <Collection/>
          <How/>
          <Why/>
        </main>
        <Footer/>
    </>
  );
}

export default App;
