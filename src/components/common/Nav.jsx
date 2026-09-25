import { useState } from "react";
import { BellIcon, CloseIcon, MailIcon, MenuIcon, navLinks } from "../../utils/helper";



const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <a
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/images/png/logo.png"
            alt="StudentHub"
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative block py-2 text-[13px] font-medium text-gray-800"
                >
                  {link.name}

                  {/* Underline animation 0% -> 100% */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      origin-left
                      scale-x-0
                      bg-blue-600
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Mail */}
          <button
            type="button"
            aria-label="Messages"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-600"
          >
            <MailIcon />
          </button>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            className="text-gray-400 transition-colors duration-200 hover:text-blue-600"
          >
            <BellIcon />
          </button>

          {/* Profile */}
          <button
            type="button"
            className="ml-1 h-9 w-9 overflow-hidden rounded-full"
            aria-label="Profile"
          >
            <img
              src="/images/png/profile.png"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </button>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            text-gray-700
            transition
            hover:bg-gray-100
            lg:hidden
          "
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          overflow-hidden
          border-t
          border-gray-100
          bg-white
          transition-all
          duration-300
          ease-in-out
          lg:hidden
          ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-5 pb-5 pt-3 sm:px-6">
          
          {/* Mobile Links */}
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    group
                    relative
                    block
                    border-b
                    border-gray-100
                    py-4
                    text-sm
                    font-medium
                    text-gray-800
                  "
                >
                  {link.name}

                  {/* Mobile underline */}
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      origin-left
                      scale-x-0
                      bg-blue-600
                      transition-transform
                      duration-300
                      group-hover:scale-x-100
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Right Side */}
          <div className="mt-5 flex items-center gap-5">
            <button
              type="button"
              aria-label="Messages"
              className="text-gray-400 transition hover:text-blue-600"
            >
              <MailIcon />
            </button>

            <button
              type="button"
              aria-label="Notifications"
              className="text-gray-400 transition hover:text-blue-600"
            >
              <BellIcon />
            </button>

            <button
              type="button"
              className="h-9 w-9 overflow-hidden rounded-full"
            >
              <img
                src="/images/png/profile.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;