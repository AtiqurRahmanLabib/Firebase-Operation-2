import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <img
        src="https://i.imgur.com/qIufhof.png" 
        alt="Error 404"
        className="w-80 mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md hover:bg-green-600">
        Go Back Home
      </Link>
    </div>
  );
}