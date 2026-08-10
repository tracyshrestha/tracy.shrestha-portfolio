import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black px-0 mx-0">
      <Navbar />

      {/* flex-1 grows; no items-center so multi-section Home isn't vertically centered */}
      <main className="flex w-full flex-1 flex-col bg-black">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
