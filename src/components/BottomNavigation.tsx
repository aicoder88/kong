import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, MapPin, Tag, User } from "lucide-react";

interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation = ({ className = "" }: BottomNavigationProps) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [language, setLanguage] = React.useState("en");

  React.useEffect(() => {
    // Get language from localStorage or detect from URL/context
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const translations = {
    en: {
      home: "Home",
      products: "Products",
      store: "Store",
      offers: "Offers",
      account: "Account",
    },
    fr: {
      home: "Accueil",
      products: "Produits",
      store: "Boutique",
      offers: "Offres",
      account: "Compte",
    },
    zh: {
      home: "首页",
      products: "产品",
      store: "商店",
      offers: "优惠",
      account: "账户",
    },
  };

  const t = translations[language as keyof typeof translations];

  const navItems = [
    {
      label: t.home,
      icon: <Home size={20} />,
      path: "/",
    },
    {
      label: t.products,
      icon: <ShoppingBag size={20} />,
      path: "/products",
    },
    {
      label: t.store,
      icon: <MapPin size={20} />,
      path: "/store",
    },
    {
      label: t.offers,
      icon: <Tag size={20} />,
      path: "/offers",
    },
    {
      label: t.account,
      icon: <User size={20} />,
      path: "/account",
    },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 backdrop-blur-xl shadow-2xl border-t transition-all duration-300 z-50
                  dark:bg-gray-900/95 dark:border-gray-700/50
                  bg-white/95 border-gray-200/50 ${className}`}
    >
      <div className="flex justify-around items-center h-16 px-2 max-w-screen-lg mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full relative transition-all duration-300 rounded-lg mx-1
                         hover:scale-105 hover:bg-white/10 dark:hover:bg-white/5
                         ${
                           isActive
                             ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/30"
                             : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                         }`}
            >
              <div
                className={`transition-all duration-300 ${isActive ? "scale-110" : ""}`}
              >
                {item.icon}
              </div>
              <span
                className={`text-xs mt-1 font-medium transition-all duration-300
                              ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute bottom-0 w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-md shadow-lg" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
