import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow container w-full mx-auto ">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
