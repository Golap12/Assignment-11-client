
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-white">Page Not Found</h2>
        <p className="mt-2 text-gray-400">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
