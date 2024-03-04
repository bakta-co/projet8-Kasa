import { BrowserRouter } from "react-router-dom";
import Header from "./header";
import Rooter from "./router";
import Footer from "./footer";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Rooter />
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
