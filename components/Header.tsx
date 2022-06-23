import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-md mx-auto w-full">
      <nav className="bg-gray-700 text-white px-2 py-2">
        <ul className="flex justify-between">
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
