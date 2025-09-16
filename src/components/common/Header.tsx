import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navigation = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Services",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Product",
      href: "#",
    },
    {
      name: "Testimonials",
      href: "#",
    },
    {
      name: "FAQ",
      href: "#",
    },
  ];
  return (
    <header className="sticky py-8 top-0 z-10">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src="/Logo.png" alt="Nexcent Logo" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:block space-x-5 xl:space-x-12 ">
          {Navigation.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              {nav.name}
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {isOpen && (
          <div className="absolute top-18 left-0 w-full bg-white shadow-md ">
            <nav className="flex flex-col space-y-4 p-4">
              {Navigation.map((nav) => (
                <a
                  key={nav.name}
                  href={nav.href}
                  className="text-base font-medium text-gray-600 hover:text-gray-900"
                >
                  {nav.name}
                </a>
              ))}
            </nav>
          </div>
        )}

        <div className="hidden lg:flex gap-3.5">
          <a
            href="#"
            className="text-[var(--brand)] px-5 py-2.5 grid place-content-center"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-[var(--brand)] px-5 py-2.5 text-white rounded-lg"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
