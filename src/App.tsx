import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black w-full  px-0  mx-0">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex min-h-screen bg-black w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
