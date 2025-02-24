"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "react-feather";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Find Jobs", path: "/find-jobs" },
    { name: "Browse Companies", path: "/browse-companies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "#", dropdown: true },
    { name: "Contact Us", path: "/contact" },
  ];

  const dropdownLinks = [
    { name: "Blog", path: "/resources/blog" },
    { name: "FAQs", path: "/resources/faqs" },
    { name: "How It Works", path: "/resources/how-it-works" },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow fixed-top py-3">
        <div className="container">
          <button
            className="navbar-toggler border-0 order-0"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle navigation"
          >
            <Menu size={24} className="text-dark" />
          </button>

          <Link href="/" className="navbar-brand mx-auto mx-lg-0 order-1">
            <img src="/logo.svg" alt="Logo" className="h-5 w-auto" />
          </Link>

          <div className="collapse navbar-collapse justify-content-center order-2">
            <ul className="navbar-nav">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="nav-item position-relative"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.name)
                  }
                  onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                  ref={dropdownRef}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className={`nav-link fw-medium d-flex align-items-center gap-1 ${
                          pathname.startsWith("/resources") ? "active" : ""
                        }`}
                        aria-expanded={openDropdown === link.name}
                      >
                        {link.name}
                        <ChevronDown size={16} />
                      </button>
                      <ul
                        className={`dropdown-menu shadow border-0 ${
                          openDropdown === link.name ? "show" : ""
                        }`}
                      >
                        {dropdownLinks.map((dropdown) => (
                          <li key={dropdown.name}>
                            <Link
                              href={dropdown.path}
                              className="dropdown-item py-2"
                            >
                              {dropdown.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      className={`nav-link fw-medium ${
                        pathname === link.path ? "active" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="d-none d-lg-flex gap-2 order-3">
            <Link href="/login">
              <button className="btn login-btn rounded-pill px-4">Login</button>
            </Link>
            <Link href="/start-free-trial">
              <button className="btn trial-btn rounded-pill px-4">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-btn"
            onClick={() => setMobileMenuOpen(false)}
          ></button>
          <ul className="mobile-nav">
            {links.map((link) => (
              <li key={link.name}>
                {link.dropdown ? (
                  <div className="mobile-dropdown">
                    <button
                      className={`mobile-nav-link d-flex justify-content-between w-100 ${
                        mobileDropdownOpen ? "active" : ""
                      }`}
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    >
                      {link.name}
                      <ChevronDown size={18} />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="mobile-submenu">
                        {dropdownLinks.map((dropdown) => (
                          <Link
                            key={dropdown.name}
                            href={dropdown.path}
                            className="mobile-submenu-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdown.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.path}
                    className={`mobile-nav-link ${
                      pathname === link.path ? "active" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-buttons">
            <Link href="/login">
              <button className="btn login-btn rounded-pill w-100 py-2">
                Login
              </button>
            </Link>
            <Link href="/start-free-trial">
              <button className="btn trial-btn w-100 py-2 rounded-pill mb-5 mt-2">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .navbar {
          z-index: 1050;
        }

        /* Reduced gap between nav items */
        .navbar-nav .nav-item {
          margin: 0 0.4rem;
        }

        .nav-link {
          color: #333;
          transition: color 0.3s ease;
          padding: 0.2rem 0.2rem !important;
        }

        .nav-link.active {
          color: rgb(45, 194, 158) !important;
          font-weight: bold;
        }

        /* Smooth Dropdown Animation */
        .dropdown-menu {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95) !important;
          min-width: 200px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          display: block;
          visibility: hidden;
        }

        .dropdown-menu.show {
          opacity: 1;
          transform: translateY(0);
          visibility: visible;
        }

        .dropdown-item {
          transition: background-color 0.3s ease;
        }

        .dropdown-item:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }

        .btn {
          transition: background-color 0.3s ease;
        }

        /* Login & Free Trial Buttons */
        .login-btn {
          background-color: rgb(255, 235, 189) !important;
          border: none;
          color: black;
        }

        .trial-btn {
          background-color: rgb(224, 248, 222) !important;
          border: none;
          color: black;
        }

        .login-btn:hover {
          background-color: rgba(
            255,
            235,
            189,
            0.6
          ) !important; /* Light effect */
          color: black !important;
        }

        .trial-btn:hover {
          background-color: rgba(
            224,
            248,
            222,
            0.6
          ) !important; /* Light effect */
          color: black !important;
        }

        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1100;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 280px;
          height: 100%;
          background: white;
          padding: 0px 1rem;
          transform: translateX(-100%);
          transition: transform 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .close-btn {
          position: absolute;
          right: 1.5rem;
          top: 1.5rem;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
        }

        .mobile-nav {
          list-style: none;
          padding: 0;
          margin-top: 0.1rem;
        }

        .mobile-nav-link {
          display: block;
          border: none;
          background: none;
          padding: 0.75rem 0;
          font-size: 1rem;
          color: #333;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .mobile-nav-link.active {
          color: rgb(45, 194, 158);
          font-weight: 600;
        }

        .mobile-dropdown {
          margin: 0.5rem 0;
        }

        .mobile-submenu {
          padding-left: 0.1rem;
        }

        .mobile-submenu-link {
          display: block;
          padding: 0.5rem 0;
          color: #666;
          text-decoration: none;
        }

        @media (min-width: 992px) {
          .mobile-menu-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
