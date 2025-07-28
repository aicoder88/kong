import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, MapPin, Tag, User } from "lucide-react";

interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation = ({ className = "" }: BottomNavigationProps) => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    {
      label: "Home",
      icon: <Home size={20} />,
      path: "/",
    },
    {
      label: "Products",
      icon: <ShoppingBag size={20} />,
      path: "/products",
    },
    {
      label: "Store",
      icon: <MapPin size={20} />,
      path: "/store",
    },
    {
      label: "Offers",
      icon: <Tag size={20} />,
      path: "/offers",
    },
    {
      label: "Account",
      icon: <User size={20} />,
      path: "/account",
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg ${className}`}
    >
      <div className="flex justify-around items-center h-16 px-2 max-w-screen-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full ${isActive ? "text-primary" : "text-gray-500"}`}
            >
              <div className={`${isActive ? "text-primary" : "text-gray-500"}`}>
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-0 w-6 h-1 bg-primary rounded-t-md" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
