import "./App.scss";

import { Header } from "./compoenents/organisms/Header";
import Footer from "./compoenents/organisms/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-screen h-screen overflow-auto relative">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
