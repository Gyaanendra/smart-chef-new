import { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Settings,
  BrainCircuit,
  Search,
} from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Home",
      icon: <Home className="w-5 h-5" />,
      href: "/",
    },
    {
      title: "Explore",
      icon: <Search className="w-5 h-5" />,
      href: "/explore",
    },
    {
      title: "Get-Recomendations",
      icon: <Settings className="w-5 h-5" />,
      href: "/reconmendation",
    },
    {
      title: "Genrate-Recipes",
      icon: <BrainCircuit className="w-5 h-5" />,
      href: "/genrate",
    },
    {
      title: "Profile",
      icon: <User className="w-5 h-5" />,
      href: "/profile",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-slate-400/30 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {" "}
            {/* Increased from h-16 to h-20 */}
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="text-3xl font-bold text-gray-950 flex items-center space-x-3"
              >
                {" "}
                {/* Increased text size and spacing */}
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-auto w-28 object-contain" // Increased from w-24 to w-28
                />
                <span className="flex items-center">Smart Chef</span>
              </a>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {" "}
                {/* Increased space-x-6 to space-x-8 */}
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center px-4 py-2.5 rounded-md text-base font-medium text-gray-950 hover:bg-white/30 hover:text-gray-900 transition-all duration-300" // Increased padding and text size
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-md text-gray-800 hover:bg-white/30 focus:outline-none" // Increased padding
              >
                {isOpen ? (
                  <X className="block h-7 w-7" /> // Increased from h-6 w-6
                ) : (
                  <Menu className="block h-7 w-7" /> // Increased from h-6 w-6
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-3 pt-3 pb-4 space-y-2 backdrop-blur-md bg-white/30">
            {" "}
            {/* Increased padding and spacing */}
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center px-4 py-3 rounded-md text-base from-neutral-800 text-gray-800 hover:bg-white/30 hover:text-gray-900 transition-all duration-300" // Increased padding
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
