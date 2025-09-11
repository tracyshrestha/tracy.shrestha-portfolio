import { Link } from "react-router-dom";


function Work() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">My Work 💼</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h3 className="text-lg font-bold mb-2">CRM System</h3>
          <p className="text-sm text-gray-600 mb-3">
            A client-facing CRM with React, Tailwind, and ShadCN UI.
          </p>
          <Link
            to="/work/crm"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            View
          </Link>
        </div>

        <div className="border rounded-lg p-4 shadow-sm bg-white">
          <h3 className="text-lg font-bold mb-2">Open Data Portal</h3>
          <p className="text-sm text-gray-600 mb-3">
            A platform to share and visualize open datasets for Nepal.
          </p>
          <Link
            to="/work/opendata"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            View
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Work;
