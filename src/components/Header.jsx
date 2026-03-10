import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gray-800  text-white">
      <nav className="container mx-auto bg-black p-4 rounded border-b border-teal-500">
        <ul className="flex gap-4 pl-4"> 
          <li>
            <Link className="font-bold " to="/">HariBlog</Link>
          </li>
          <li>  
            <Link className="hover:text-gray-300" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/about">About</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to="/topics">Topics</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}