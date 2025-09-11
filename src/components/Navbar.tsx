import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Tracy</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Work</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

