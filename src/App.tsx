import "./App.css";

import { Header } from "./compoenents/organisms/Header";
import Footer from "./compoenents/organisms/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="w-full">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
